import React from 'react'
import CustomMenu from "../CustomMenu/index";

const menus = [
    {
        title: '首页',
        icon: 'home',
        key: '/home'
    },
    {
        title: '学员后台',
        icon: 'user',
        key: '/home/stuBE',
        subs: [
            { key: '/home/stuBE/complaint', title: '匿名投诉', icon: 'exclamation-circle' },
            { key: '/home/stuBE/problem', title: '技术问题', icon: 'question-circle' },
            { key: '/home/stuBE/itemupload', title: '项目上传', icon: 'file-add' },
            { key: '/home/stuBE/stuvip', title: 'VIP', icon: 'crown' },
            { key: '/home/stuBE/weekly', title: '学员周报', icon: 'profile' },
            { key: '/home/stuBE/index', title: '我的资料', icon: 'info' },
            { key: '/home/stuBE/moneyDetail', title: '缴费明细', icon: 'pay-circle' },
            { key: '/home/stuBE/exam', title: '参加考试', icon: 'edit' },
            { key: '/home/stuBE/evaluate', title: '学员评价', icon: 'heart' },
            { key: '/home/stuBE/inquiry', title: '教学测评', icon: 'star' },


        ]
    },
    {
        title: '学员考勤',
        icon: 'team',
        key: '/home/daily',
        subs: [
            { key: '/home/daily/leave', title: '学员请假', icon: 'carry-out' },
            { key: '/home/daily/discipline', title: '学员违纪', icon: 'alert' }

        ]
    }
]

export default class SiderNav extends React.Component {
    render() {

        return (
            <div style={{ height: '100vh', overflowY: 'scroll' }}>
                <div style={styles.logo}></div>
                <CustomMenu menus={menus} />
            </div>
        )
    }
}

const styles = {
    logo: {
        height: '32px',
        background: 'rgba(255, 255, 255, .2)',
        margin: '16px'
    }
}

