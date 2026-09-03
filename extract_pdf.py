try:
    from pypdf import PdfReader
except:
    from PyPDF2 import PdfReader

pdf_path = "AMT_bro_final.pdf"
try:
    reader = PdfReader(pdf_path)
    print(f"Total pages: {len(reader.pages)}\n")
    for i, page in enumerate(reader.pages):
        print(f"=== Page {i+1} ===")
        text = page.extract_text()
        print(text)
        print("\n")
except Exception as e:
    print(f"Error: {e}")
