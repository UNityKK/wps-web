import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">在线办公套件</div>
        <div className="space-x-4">
          <Link to="/word" className="hover:text-blue-200">文档</Link>
          <Link to="/excel" className="hover:text-blue-200">表格</Link>
          <Link to="/ppt" className="hover:text-blue-200">演示</Link>
          <Link to="/pdf" className="hover:text-blue-200">PDF</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 