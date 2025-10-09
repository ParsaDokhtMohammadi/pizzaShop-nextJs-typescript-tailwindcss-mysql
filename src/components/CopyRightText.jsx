function CopyRightText() {
  const persianYear = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    year: "numeric",
  }).format(new Date());

  return (
    <p className="text-center text-white text-sm">
      © {persianYear} پیتزا پلنت. تمام حقوق قالب محفوظ است.
    </p>
  );
}

export default CopyRightText;
