'use client'
import {  Row, Col, Select } from "antd"

export const Artist = () => {
  
  return (
    <div>
      <Row>
        <Col xs={24}>
          Listar áudios por generos: &nbsp;
          <Select
            defaultValue="lucy"
            style={{
              width: 120,
            }}
            onChange={(e) => console.log(e)}
            options={[
              {
                value: 'jack',
                label: 'Jack',
              },
              {
                value: 'lucy',
                label: 'Lucy',
              },
              {
                value: 'Yiminghe',
                label: 'yiminghe',
              },
              {
                value: 'disabled',
                label: 'Disabled',
                disabled: true,
              },
            ]}
          />
        </Col>
      </Row>
    </div>
  )
}