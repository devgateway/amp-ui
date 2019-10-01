const FileSaver = require('file-saver');
const docx = require('docx');

const { Document, Paragraph, Packer } = docx;

export default class GenerateWordPreview {
  static generateDocument() {
    alert('entro');
    const doc = new Document();
    const paragraph = new Paragraph('Hello World');
    doc.addParagraph(paragraph);

    const packer = new Packer();
    packer.toBlob(doc).then(blob => {
      console.log(blob);
      FileSaver.saveAs(blob, 'example.docx');
      console.log('Document created successfully');
    });
  }
}
