function doGet() {
  // Cette fonction affiche le fichier nommé 'Index' (votre fichier HTML)
  return HtmlService.createHtmlOutputFromFile('Index')
      .setTitle('Laboratoire des Fractions - Tronc Commun')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/**
 * Note : Assurez-vous que votre fichier HTML se nomme exactement "Index" 
 * (sans le .html dans le nom à gauche du script).
 */
