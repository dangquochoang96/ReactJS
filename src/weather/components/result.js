import React from 'react';
import { Row, Col, Skeleton } from 'antd';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import * as reselect from '../reselect/weather-reselect'
import { isEmptyObject } from '../helper/common'

const ResultWeather = () => {
  // const isLoading = useSelector(state => state.currentWeather.loading);
  // const dataWeather = useSelector(state => state.currentWeather.weather);
  const { isLoading, dataWeather } = useSelector(createStructuredSelector({
    isLoading: reselect.loadingSelector,
    dataWeather: reselect.getDataWeather,
  }))

  if (isLoading) {
    return (
      <Row>
        <Col span={24}>
          <Skeleton active />
        </Col>
      </Row>
    )
  }

  return (
    <>
      {!isEmptyObject(dataWeather) ? 
      (
        <Row>
        <Col span={18} offset={3}>
          <Row>
            <Col span={24}>
              <h1>{dataWeather.name},{dataWeather.country}</h1>
            </Col>
          </Row>
          <Row>
             <Col span={12}>
                <img src={`http://openweathermap.org/img/w/${dataWeather.icon}.png`} alt="" />
                <span>{dataWeather.temp}</span>
                <p>{dataWeather.description}</p>
             </Col>   
             <Col span={12}>
                <Row>
                  <Col span={8}>
                    <h3>{dataWeather.temp_max}</h3>
                    <p>height</p>
                  </Col>
                </Row>
                <Row>
                <Col span={8}>
                    <h3>{dataWeather.temp_min}</h3>
                    <p>Low</p>
                  </Col>
                </Row>
             </Col>
          </Row>
        </Col>
      </Row>
      ) : null}
      
      
    </>
  )
}
export default React.memo(ResultWeather);