from PIL import Image
import pytesseract
import os

def extractText():

    photoName = "DNA_sequence.png"
    photo = Image.open(photoName)


    #set pytesseract path
    pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
    eDNA_array = []

    # translates image to text and removes spaces
    text = pytesseract.image_to_string(photo)
    text = text.replace(' ','') 

    # removes blank lines and stores each individual line in eDNA_array
    for line in text.splitlines():
        if(line == ''):
            continue
        eDNA_array.append(line)


    #print(text)
    print(eDNA_array)

    #returns array with the 3 coral reef fish eDNA substrings
    return eDNA_array

#extractText()