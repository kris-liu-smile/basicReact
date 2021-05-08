import * as React from 'react';
import { FC, useState, useEffect } from 'react';
import './index.scss';
import { homePageList, homePageItem } from 'utils/information/homePage';
import HPInput from '../../component/basic/input/HPInput';
import K6Loading from '../../component/basic/loading/K6Loading';
import { RouterProps } from 'react-router-dom';

const HomePage: FC<RouterProps> = (props) => {
  const [loading, setLoading] = useState(false);
  const [listData, setListData] = useState(homePageList);

  useEffect(() => {}, []);

  const gotoPage = (path: string) => {
    const { history } = props;
    if (path) {
      history.push(path);
    }
  };

  const getList = (data: any) => {
    setLoading(true);
    setListData(data);
  };

  return (
    <div>
      <HPInput list={homePageList} getListData={getList} />
      <K6Loading isloading={loading}>
        <div className="home_contain">
          {listData.map((item: homePageItem) => {
            return (
              <div
                key={item.title}
                onClick={() => gotoPage(item.path)}
                className="home_part"
              >
                <p>{item.title}</p>
                {/* <p>{item.introduce}</p> */}
              </div>
            );
          })}
        </div>
      </K6Loading>
    </div>
  );
};

export default HomePage;
