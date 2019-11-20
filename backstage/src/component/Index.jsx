import React from 'react'
import { Row, Col, Descriptions, Divider, Button } from 'antd';
export default class Index extends React.Component {
    change() {
        console.log(111)
    }
    render() {

        return (
            <div className='index'>
                <div className="detail">
                    <Row>
                        <Divider orientation="left" style={{ color: 'red' }}>我的信息</Divider>
                        <Col span={18}>
                            <Descriptions title="" bordered column={1}>
                                <Descriptions.Item label="姓名">潘金虎</Descriptions.Item>
                                <Descriptions.Item label="身份证号码">******************</Descriptions.Item>
                                <Descriptions.Item label="手机号">***********</Descriptions.Item>
                                <Descriptions.Item label="QQ">********</Descriptions.Item>
                                <Descriptions.Item label="学号">GZ190913015</Descriptions.Item>
                                <Descriptions.Item label="毕业学院">江西科技师范大学 &nbsp;&nbsp; 物联网</Descriptions.Item>
                                <Descriptions.Item label="在校状态">大三</Descriptions.Item>
                                <Descriptions.Item label="学历">本科</Descriptions.Item>
                                <Descriptions.Item label="千锋班级">广州HTML5就业班1909期</Descriptions.Item>
                                <Descriptions.Item label="招生老师">陈名依</Descriptions.Item>
                                <Descriptions.Item label="报名日期">      2019-03-09	</Descriptions.Item>
                                <Descriptions.Item label="介绍人">      无	</Descriptions.Item>
                            </Descriptions>
                        </Col>
                        <Col span={6}>
                            <img style={{ width: 180, height: 200 }} alt="请上传照片" src="http://qfzs.static.1000phone.net/img/2019-07-15/28b3668c433bf6290e9db2fcad071037.jpg" />

                            <Button type="primary">修改资料</Button>
                        </Col>
                    </Row>
                </div>
                <div className="msg">
                    <Divider orientation="left" style={{ color: 'red' }}>[ 我的消息 ]</Divider>

                </div>
                <div className="wish">
                    <Divider orientation="left" style={{ color: 'red' }}>[ 班主任寄语 ]</Divider>

                </div>
                <div className="ovip" >
                    <Divider orientation="left" style={{ color: 'red' }}>[ 千锋其他会员开通 ]</Divider>

                </div>
            </div >
        )

    }
}


