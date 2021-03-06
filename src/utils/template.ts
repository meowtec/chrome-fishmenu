export default function replaceTemplate(text: string, data: Record<string, any>) {
  let txt = text;

  Object.keys(data).forEach((key) => {
    txt = txt.replace(new RegExp(`{%${key}%}|{${key}}`, 'g'), data[key]);
  });

  return txt;
}
