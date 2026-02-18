const svg = document.getElementById("networkSvg");
const details = document.getElementById("detailsContent");
const filters = document.getElementById("majorFilters");
const resetBtn = document.getElementById("resetFilters");

const selectedMajors = new Set();
let selectedCareerId = null;

function renderFilters() {
  majors.forEach((major) => {
    const id = `major-${major.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")}`;
    const label = document.createElement("label");
    label.innerHTML = `<input type="checkbox" id="${id}" value="${major}"> ${major}`;
    const input = label.querySelector("input");

    input.addEventListener("change", (event) => {
      if (event.target.checked) {
        selectedMajors.add(major);
      } else {
        selectedMajors.delete(major);
      }
      drawNetwork();
      renderSelectedDetails();
    });

    filters.appendChild(label);
  });
}

function computePositions() {
  const centerX = 600;
  const centerY = 380;
  const majorRadius = 285;
  const careerRadius = 180;

  const majorNodes = majors.map((major, index) => {
    const angle = (index / majors.length) * Math.PI * 2 - Math.PI / 2;
    return {
      id: `major-${index}`,
      type: "major",
      label: major,
      x: centerX + majorRadius * Math.cos(angle),
      y: centerY + majorRadius * Math.sin(angle)
    };
  });

  const careerNodes = careers.map((career, index) => {
    const angle = (index / careers.length) * Math.PI * 2;
    const radialJitter = (index % 2 === 0 ? 1 : -1) * 25;
    return {
      id: career.id,
      type: "career",
      label: career.title,
      x: centerX + (careerRadius + radialJitter) * Math.cos(angle),
      y: centerY + (careerRadius + radialJitter) * Math.sin(angle),
      career
    };
  });

  return { majorNodes, careerNodes };
}

function createSvgElement(tag, attrs) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs).forEach(([key, value]) => {
    el.setAttribute(key, value);
  });
  return el;
}

function isCareerVisible(career) {
  if (selectedMajors.size === 0) {
    return true;
  }
  return career.majors.some((major) => selectedMajors.has(major));
}

function drawNetwork() {
  svg.innerHTML = "";

  const { majorNodes, careerNodes } = computePositions();
  const majorMap = new Map(majorNodes.map((node) => [node.label, node]));

  careers.forEach((career) => {
    const targetNode = careerNodes.find((node) => node.id === career.id);
    const careerVisible = isCareerVisible(career);

    career.majors.forEach((major) => {
      const sourceNode = majorMap.get(major);
      const edge = createSvgElement("line", {
        x1: sourceNode.x,
        y1: sourceNode.y,
        x2: targetNode.x,
        y2: targetNode.y,
        class: `edge ${careerVisible ? "" : "dimmed"}`
      });
      svg.appendChild(edge);
    });
  });

  majorNodes.forEach((node) => {
    const g = createSvgElement("g", { class: "node major" });
    const circle = createSvgElement("circle", {
      cx: node.x,
      cy: node.y,
      r: 10
    });

    if (selectedMajors.size > 0 && !selectedMajors.has(node.label)) {
      g.classList.add("dimmed");
    }

    const text = createSvgElement("text", {
      x: node.x + 14,
      y: node.y + 4
    });
    text.textContent = node.label;

    g.append(circle, text);
    svg.appendChild(g);
  });

  careerNodes.forEach((node) => {
    const visible = isCareerVisible(node.career);
    const g = createSvgElement("g", {
      class: `node career ${visible ? "" : "dimmed"} ${selectedCareerId === node.id ? "active" : ""}`,
      tabindex: 0,
      role: "button",
      "aria-label": node.label
    });
    const circle = createSvgElement("circle", {
      cx: node.x,
      cy: node.y,
      r: 11
    });
    const text = createSvgElement("text", {
      x: node.x + 14,
      y: node.y + 4
    });
    text.textContent = node.label;

    g.addEventListener("click", () => {
      selectedCareerId = node.id;
      renderSelectedDetails();
      drawNetwork();
    });

    g.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectedCareerId = node.id;
        renderSelectedDetails();
        drawNetwork();
      }
    });

    g.append(circle, text);
    svg.appendChild(g);
  });
}

function renderSelectedDetails() {
  const career = careers.find((item) => item.id === selectedCareerId);

  if (!career) {
    details.className = "placeholder";
    details.innerHTML = "<p>Select a career node to view role details from O*NET and BLS.</p>";
    return;
  }

  details.className = "";
  details.innerHTML = `
    <h3>${career.title}</h3>
    <p><strong>Aligned majors:</strong> ${career.majors.join(", ")}</p>
    <p><strong>Interest themes:</strong> ${career.interests.join(", ")}</p>

    <div class="metrics">
      <div class="metric"><div class="label">BLS Median Pay</div><div class="value">${career.bls.medianPay}</div></div>
      <div class="metric"><div class="label">BLS Growth</div><div class="value">${career.bls.growth}</div></div>
      <div class="metric"><div class="label">Outlook Period</div><div class="value">${career.bls.outlookPeriod}</div></div>
    </div>

    <h4>O*NET Occupation Tasks</h4>
    <ul>${career.onet.tasks.map((task) => `<li>${task}</li>`).join("")}</ul>

    <h4>O*NET Technology Skills</h4>
    <ul>${career.onet.technologySkills.map((skill) => `<li>${skill}</li>`).join("")}</ul>

    <h4>O*NET Work Activities</h4>
    <ul>${career.onet.workActivities.map((activity) => `<li>${activity}</li>`).join("")}</ul>

    <p class="source-links">
      Sources: <a href="${career.sources.onet}" target="_blank" rel="noopener noreferrer">O*NET profile</a>
      • <a href="${career.sources.bls}" target="_blank" rel="noopener noreferrer">BLS Occupational Outlook</a>
    </p>
  `;
}

resetBtn.addEventListener("click", () => {
  selectedMajors.clear();
  selectedCareerId = null;
  Array.from(filters.querySelectorAll("input[type='checkbox']")).forEach((input) => {
    input.checked = false;
  });
  renderSelectedDetails();
  drawNetwork();
});

renderFilters();
renderSelectedDetails();
drawNetwork();
