/**
 * The one servable copy of Dr. Ramana's CV (a Word doc, not the print-to-PDF
 * page at /cv) — every "Download CV" button site-wide links here. Kept as
 * one constant pair so replacing the CV later is a one-file change instead
 * of hunting down every button.
 */
export const CV_DOWNLOAD_URL = "/documents/dr-m-venkat-ramana-cv.docx";

/** The filename the browser saves it as, via the anchor's `download`
 *  attribute — independent of whatever the file is actually named on disk. */
export const CV_DOWNLOAD_FILENAME = "Dr. M. Venkat Ramana - CV.docx";
