// 文件大小
enum FileSizes {
  'K' = 1024,
  'M' = 1048576,
  'G' = 1073741824,
  'T' = 1099511627776
}

// 文件图标
enum Icons {
  'doc' = 'iconword',
  'docx' = 'iconword',
  'xls' = 'iconexcel',
  'xlsx' = 'iconexcel',
  'ppt' = 'iconppt',
  'pptx' = 'iconppt',
  'pdf' = 'iconpdf',
  'zip' = 'iconzip',
  'rar' = 'iconzip',
  'jpg' = 'iconimage',
  'jpeg' = 'iconimage',
  'png' = 'iconimage',
  'gif' = 'iconimage',
  'bmp' = 'iconimage',
  'file' = 'iconcolorfile'
}

// 计算文件大小
function calcFileSize(fileByte: number): string {
  const KB = FileSizes.K;
  const MB = FileSizes.M;
  const GB = FileSizes.G;
  const TB = FileSizes.T;
  const FIXED_TWO_POINT = 2;
  let fileSizeMsg = '';
  if (fileByte < KB) {
    fileSizeMsg = '文件小于1K';
  } else if (fileByte > KB && fileByte < MB) {
    fileSizeMsg = (fileByte / KB).toFixed(FIXED_TWO_POINT) + 'K';
  } else if (fileByte === MB) {
    fileSizeMsg = '1M';
  } else if (fileByte > MB && fileByte < GB) {
    fileSizeMsg = (fileByte / (KB * KB)).toFixed(FIXED_TWO_POINT) + 'M';
  } else if (fileByte > MB && fileByte === GB) {
    fileSizeMsg = '1G';
  } else if (fileByte > GB && fileByte < TB) {
    fileSizeMsg = (fileByte / (KB * KB * KB)).toFixed(FIXED_TWO_POINT) + 'G';
  } else {
    fileSizeMsg = '文件超过1T';
  }
  return fileSizeMsg;
}

// 获取文件后缀
function getFileSuffix(fileName: string): string {
  const pointIndex: number = fileName.lastIndexOf('.');
  let suffix: string;
  if (pointIndex > -1) {
    suffix = fileName.slice(pointIndex + 1);
  } else {
    suffix = 'file';
  }
  return suffix;
}

// 获取文件图标
function getFileIcon(fileName: string): string {
  const suffix: string = getFileSuffix(fileName);
  console.log('suffix: ', suffix);
  return Icons['doc'];
}

// 下载文件
function downloadByURI(data: string, fileName: string, header: string = '') {
  const link = document.createElement('a');
  link.style.display = 'none';
  link.href = header + data;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function downloadByBlob() {}

export { calcFileSize, getFileIcon, downloadByURI, downloadByBlob };
