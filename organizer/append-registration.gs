function doPost(e) {
  var book = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = book.getSheetByName("Registrations");
  if (!sheet) {
    sheet = book.insertSheet("Registrations");
    sheet.appendRow([
      "Saved at",
      "Event",
      "Intent",
      "Name",
      "Email",
      "USN",
      "Branch",
      "Year",
      "Team size",
      "Note",
    ]);
  }

  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(),
    data.eventName || "",
    data.intent === "next" ? "Next edition" : "This edition",
    data.name || "",
    data.email || "",
    data.usn || "",
    data.branch || "",
    data.year || "",
    data.team || "",
    data.note || "",
  ]);

  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(
    ContentService.MimeType.JSON
  );
}
