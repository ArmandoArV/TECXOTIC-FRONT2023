from PIL import Image
import pytesseract
import os

def extractText():

    photoName = "DNA_sequence.png"
    photo = Image.open(photoName)

    #set pytesseract path
    pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

    text = pytesseract.image_to_string(photo)
    print(text)

    return text

#extractText()