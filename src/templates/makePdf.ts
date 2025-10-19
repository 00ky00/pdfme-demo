import { Template, BLANK_PDF } from '@pdfme/common';
import { generate } from '@pdfme/generator';

/**
 * PDF生成関数
 */

export const makePdf = async (): Promise<Uint8Array> => {
  // テンプレート
  const template: Template = {
    basePdf: BLANK_PDF,
    schemas: [
      [
        {
          name: 'a',
          type: 'text',
          position: { x: 0, y: 0 },
          width: 10,
          height: 10,
        },
        {
          name: 'b',
          type: 'text',
          position: { x: 10, y: 10 },
          width: 10,
          height: 10,
        },
        {
          name: 'c',
          type: 'text',
          position: { x: 20, y: 20 },
          width: 10,
          height: 10,
        },
      ],
    ],
  };

  // 入力データ
  const inputs = [{ a: 'a1', b: 'b1', c: 'c1' }];
  const pdf = await generate({ template, inputs });
  return pdf; // PDFをバッファ型で返す
};