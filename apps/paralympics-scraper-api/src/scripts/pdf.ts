import PDFParser from 'pdf2json';

const pdfParser = new PDFParser(this, 1);

const readPDFFile = (pdfFilePath) => {
  pdfParser.on('pdfParser_dataError', (errData) =>
    console.error(errData.parserError)
  );
  pdfParser.on('pdfParser_dataReady', (pdfData) => {
    const allContent = pdfParser.getRawTextContent().split('\r\n').splice(6);
    console.log(allContent);
    const allStartLocations = allContent.reduce((a, e, i) => {
      if (e.includes('Name Surname Age')) {
        a.push(i);
      }
      return a;
    }, []);
    console.log(allStartLocations);

    const allEndLocations = allContent.reduce((a, e, i) => {
      if (e.match(/Page [1-7] of 7/)) {
        a.push(i);
      }
      return a;
    }, []);

    let i = 0;

    while (i < allStartLocations.length) {
      const pageData = allContent.slice(
        allStartLocations[0] + 1,
        allEndLocations[0]
      );
      for (let element of pageData) {
        const athleteData = element.split(' ');
        console.log(athleteData.slice(0, 5).join(','));
        console.log('\n');
        console.log(athleteData.slice(6, athleteData.length - 5).join(','));
        console.log(' \n \n ');
      }
      i++;
    }
  });
  pdfParser.loadPDF(pdfFilePath);
};

readPDFFile(
  '/Users/shaarangtanpure/Desktop/explorimentations/Australian-Paralympic-Team-List-by-Sport-7-Aug-2024.pdf'
);
