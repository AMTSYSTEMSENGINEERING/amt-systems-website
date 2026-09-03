const fs = require('fs');

const content = fs.readFileSync('src/App.js', 'utf8');

const newServices = `  const services = [
    {
      icon: "🔧",
      title: "Systems-Engineering Services",
      description:
        "Ingénierie complète : Requirement engineering, Architecture Design (HW/SW), Verification & Validation. Conception robuste et innovante de systèmes complexes.",
      href: "#contact",
    },
    {
      icon: "💾",
      title: "Data Engineering & Analytics",
      description:
        "Data acquisition & transformation, Data analysis, Data modeling. Transformez vos données en insights pour optimiser vos opérations et stratégies.",
      href: "#contact",
    },
    {
      icon: "🌐",
      title: "Web & Mobile App Design",
      description:
        "Mobile App Design, Embedded SW Design, Web App Design. Solutions numériques adaptées à vos besoins métier et utilisateurs.",
      href: "#contact",
    },
    {
      icon: "🔬",
      title: "Prototyping & Reverse Engineering",
      description:
        "CAD-modelling, 3D-Printing & 3D scanning, HW-Layout design & PCB prototyping. De l'idée au prototype en passant par l'innovation technologique.",
      href: "#contact",
    },
    {
      icon: "📦",
      title: "Procurement & Supply Management",
      description:
        "Customer needs identification, Supplier relationship management, Inventory & Supply Chain Optimization. Sourcing global avec associates mondiaux.",
      href: "#contact",
    },
    {
      icon: "🤖",
      title: "AI-Integrated Smart Solutions",
      description:
        "Cross-domain ecosystem unique : Hardware + Software + Mechanical + AI. Intégration IT pour solutions innovantes et intelligentes from a single source.",
      href: "#contact",
    },
  ];`;

const pattern = /  const services = \[[\s\S]*?\n  \];/;
const newContent = content.replace(pattern, newServices);
fs.writeFileSync('src/App.js', newContent, 'utf8');
console.log('✓ Services updated successfully');
