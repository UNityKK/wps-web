import { useState } from 'react';
import { utils, write } from 'xlsx';

const Spreadsheet: React.FC = () => {
  const [data, setData] = useState([]);

  const handleExport = () => {
    const ws = utils.json_to_sheet(data);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Sheet1");
    // 导出为Excel文件
    write(wb, "表格.xlsx");
  };

  return (
    <div className="spreadsheet-container">
      {/* 这里添加表格编辑界面 */}
    </div>
  );
} 