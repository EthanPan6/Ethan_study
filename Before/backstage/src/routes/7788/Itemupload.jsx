import React from 'react'
import { Upload, Button } from 'antd';
import CustomBreadcrumb from '../../component/CustomBreadcrumb'
{/*<> <CustomBreadcrumb arr={['学员后台', '学员违纪']} /> </>*/ }
export default class Itemupload extends React.Component {
    render() {
        return (
            <> <CustomBreadcrumb arr={['学员后台', '项目上传']} />
                <div className="itemupload">
                    <h2>学员项目上传</h2>

                    <div className="content">
                        <label >项目文件:</label>
                        <Upload >
                            <Button>选择文件</Button>
                            <i className="tip">未选择任何文件</i>
                        </Upload>

                        <div className="btn-Cp">
                            <Button type="primary" size='large' icon='check'>提交</Button>
                            <Button size='large' icon='undo'>返回</Button>
                        </div>
                    </div>
                </div></>
        )

    }
}