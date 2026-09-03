import re

# Read the file
with open('src/App.js', 'r', encoding='utf-8') as f:
    content = f.read()

# New services content
new_services = '''  const services = [
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
  ];'''

# Replace using regex
pattern = r'  const services = \[[\s\S]*?\n  \];'
content = re.sub(pattern, new_services, content)

# Write back
with open('src/App.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("✓ Services updated successfully")
