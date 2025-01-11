import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">欢迎使用在线办公套件</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/word" className="block">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">文档编辑</h2>
            <p className="text-gray-600">创建和编辑文档，支持丰富的格式化功能</p>
          </div>
        </Link>

        <Link to="/excel" className="block">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">电子表格</h2>
            <p className="text-gray-600">处理数据，创建图表和进行计算</p>
          </div>
        </Link>

        <Link to="/ppt" className="block">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">演示文稿</h2>
            <p className="text-gray-600">制作精美的演示幻灯片</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home; 