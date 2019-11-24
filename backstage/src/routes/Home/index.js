import React from 'react'
import { Row, Col, Descriptions, Divider, Button } from 'antd';
import CustomBreadcrumb from '../../component/CustomBreadcrumb'

export default class Index extends React.Component {
    change() {
        console.log(111)
    }
    render() {
        return (
            <> <CustomBreadcrumb arr={['学员后台', '我的资料']} />
                <div className='index'>
                    <div className="detail">
                        <Row>
                            <Divider orientation="left" style={{ color: 'red' }}>我的信息</Divider>
                            <Col span={18}>
                                <Descriptions title="" bordered column={1}>
                                    <Descriptions.Item label="姓名">张三</Descriptions.Item>
                                    <Descriptions.Item label="身份证号码">******************</Descriptions.Item>
                                    <Descriptions.Item label="手机号">***********</Descriptions.Item>
                                    <Descriptions.Item label="QQ">********</Descriptions.Item>
                                    <Descriptions.Item label="学号">GZ190913015</Descriptions.Item>
                                    <Descriptions.Item label="毕业学院">XXXXXX大学 &nbsp;&nbsp; XXXX专业</Descriptions.Item>
                                    <Descriptions.Item label="在校状态">大三</Descriptions.Item>
                                    <Descriptions.Item label="学历">本科</Descriptions.Item>
                                    <Descriptions.Item label="千锋班级">广州HTML5就业班1909期</Descriptions.Item>
                                    <Descriptions.Item label="招生老师">陈XX</Descriptions.Item>
                                    <Descriptions.Item label="报名日期">      20xx-0x-xx	</Descriptions.Item>
                                    <Descriptions.Item label="介绍人">     XXX	</Descriptions.Item>
                                </Descriptions>
                            </Col>
                            <Col span={6}>
                                <img style={{ width: 180, height: 200 }} alt="请上传照片" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574581748640&di=db5b74c291579b8d845b8bfc894ef099&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180921%2F070545a4679c439780b08b3c347359da.gif" />
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
                </div ></>
        )

    }
}


