// netlify-functions/receiveMessage.js
exports.handler = async (event) => {
    const { message } = JSON.parse(event.body);
  
    // Hier kannst du den erhaltenen Nachrichtentext speichern,
    // z.B., in einer Datenbank oder einer JSON-Datei.
    // Du kannst auch Netlify Add-ons wie FaunaDB oder andere Dienste nutzen, um Daten zu speichern.
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Nachricht empfangen und gespeichert." }),
    };
  };
  