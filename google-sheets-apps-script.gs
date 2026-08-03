const STATE_KEY = "francos_fabrica_estado";

function doGet(e) {
  const action = String(e.parameter.action || "load");
  const callback = e.parameter.callback;
  let result;

  try {
    if (action === "load") {
      result = { ok: true, state: loadState_() };
    } else {
      result = { ok: false, error: "Accion no reconocida." };
    }
  } catch (error) {
    result = { ok: false, error: error.message };
  }

  if (callback) {
    return ContentService
      .createTextOutput(callback + "(" + JSON.stringify(result) + ");")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }

  return json_(result);
}

function doPost(e) {
  let result;

  try {
    const body = JSON.parse(e.postData.contents || "{}");
    if (body.action !== "save") throw new Error("Accion no reconocida.");
    saveState_(body.state || {});
    result = { ok: true, savedAt: new Date().toISOString() };
  } catch (error) {
    result = { ok: false, error: error.message };
  }

  return json_(result);
}

function loadState_() {
  const props = PropertiesService.getDocumentProperties();
  const raw = props.getProperty(STATE_KEY);
  if (!raw) return { date: new Date().toISOString(), sectors: [], employees: [], events: [] };
  return JSON.parse(raw);
}

function saveState_(state) {
  PropertiesService.getDocumentProperties().setProperty(STATE_KEY, JSON.stringify(state));
  writeTab_("Empleados", ["ID", "Nombre", "Turno", "Sector principal", "Segundo sector", "Franco inicial", "Inicio rotacion"], (state.employees || []).map(e => [
    e.id || "",
    e.name || "",
    e.shift || "",
    e.primarySector || "",
    e.secondarySector || "",
    e.startOff || "",
    e.rotationStart || ""
  ]));
  writeTab_("Sectores", ["Sector", "Minimo"], (state.sectors || []).map(s => [s.name || "", s.min || 0]));
  writeTab_("Eventos", ["ID", "Empleado ID", "Fecha", "Tipo", "Nota"], (state.events || []).map(ev => [
    ev.id || "",
    ev.employeeId || "",
    ev.date || "",
    ev.type || "",
    ev.note || ""
  ]));
  writeTab_("Configuracion", ["Clave", "Valor"], [
    ["Ultima actualizacion", new Date()],
    ["Mes activo", state.date || ""]
  ]);
}

function writeTab_(name, headers, rows) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(name) || ss.insertSheet(name);
  sheet.clearContents();
  const values = [headers].concat(rows);
  if (values.length) sheet.getRange(1, 1, values.length, headers.length).setValues(values);
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, headers.length);
}

function json_(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
