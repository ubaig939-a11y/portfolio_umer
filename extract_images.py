import fitz
import os

files_map = {
    "media_1791650404754.pdf": "ads",
    "media_1791650405015.pdf": "seo"
}
dir_path = "/Users/macbook/.gemini/antigravity/brain/c32a463c-0ee4-4ad2-9bac-a3b9f56db88b/.user_uploaded/"
out_dir = "public/assets/images"

for file, prefix in files_map.items():
    full_path = os.path.join(dir_path, file)
    doc = fitz.open(full_path)
    
    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        image_list = page.get_images(full=True)
        
        for img_index, img in enumerate(image_list):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            
            image_filename = f"{prefix}_page{page_num+1}_img{img_index+1}.{image_ext}"
            with open(os.path.join(out_dir, image_filename), "wb") as f:
                f.write(image_bytes)
            print(f"Extracted {image_filename}")
