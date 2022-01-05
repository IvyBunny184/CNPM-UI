import { NbMenuItem } from '@nebular/theme';

export const MENU_MANAGER: NbMenuItem[] = [
    {
        title: ' Trang chủ',
        icon: { icon: 'home', pack: 'fas'},
        link: '/home'
    },
    {
        title: ' Đặt tiệc',
        icon: { icon: 'file-invoice-dollar', pack: 'fas'},
        children: [
            {
                title:'Danh sách đặt tiệc',
                link: '/home/booking'
            },
            {
                title: 'Đặt tiệc mới',
                link: '/home/booking/new'
            },
            {
                title:'Danh sách ca',
                link: '/home/booking/shift'
            },
            {
                title:'Phương thức thanh toán',
                link: '/home/booking/payment'
            },
            {
                title:'Danh sách hóa đơn',
                link: '/home/booking/bill'
            }
        ]
    },
    {
        title: ' Sảnh',
        icon: { icon: 'door-open', pack: 'fas' },
        children: [
            {
                title: 'Loại sảnh',
                link: '/home/hall/type'
            },
            {
                title: 'Danh sách sảnh',
                link: '/home/hall'
            },
            {
                title: 'Thêm sảnh',
                link: '/home/hall/add'
            }
        ]
    },
    {
        title: ' Nhân viên',
        icon: { icon: 'id-card', pack: 'far' },
        children: [
            {
                title: 'Danh sách nhân viên',
                link: '/home/staff'
            },
            {
                title: 'Thêm nhân viên',
                link: '/home/staff/add'
            }
        ]
    },
    {
        title: ' Dịch vụ',
        icon: {icon: 'concierge-bell', pack: 'fas'},
        children: [
            {
                title: 'Danh sách dịch vụ',
                link: '/home/service'
            },
            {
                title: 'Thêm dịch vụ',
                link: '/home/service/add'
            }
        ]
    },
    {
        title: ' Món ăn',
        icon: {icon: 'utensils', pack: 'fas'},
        children: [
            {
                title: 'Danh sách món ăn',
                link: '/home/food'
            },
            {
                title: 'Thêm món ăn',
                link: '/home/food/add'
            }
        ]
    },
    // {
    //     title: ' Vật tư',
    //     icon: { icon: 'tv', pack: 'fas'},
    //     children: [
    //         {
    //             title: 'Danh sách vật tư',
    //             link: '/home/supply'
    //         },
    //         {
    //             title: 'Thêm vật tư',
    //             link: '/home/supply/add'
    //         }
    //     ]
    // }
]

export const MENU_STAFF: NbMenuItem[] = [
    {
        title: ' Trang chủ',
        icon: { icon: 'home', pack: 'fas'},
        link: '/home'
    },
    {
        title: ' Hóa đơn',
        icon: { icon: 'file-invoice-dollar', pack: 'fas'},
        expanded: true,
        children: [
            {
                title:'Danh sách hóa đơn',
                link: '/home/booking'
            },
            {
                title: 'Đặt phòng',
                link: '/home/booking/new'
            }
        ]
    },
    {
        title: ' Danh sách khách hàng',
        icon: {icon: 'users', pack: 'fas'},
        link: '/home/user'
    },
    {
        title: ' Danh sách phòng',
        icon: { icon: 'door-open', pack: 'fas' },
        link: '/home/room'
    },
    {
        title: ' Danh sách voucher',
        icon: { icon: 'gift', pack: 'fas'},
        link: '/home/voucher'
    },
    {
        title: ' Danh sách dịch vụ',
        icon: {icon: 'concierge-bell', pack: 'fas'},
        link: '/home/service'
    },
]

export const MENU_WAREHOUSE: NbMenuItem[] = [
    {
        title: ' Trang chủ',
        icon: { icon: 'home', pack: 'fas'},
        link: '/home'
    },
    {
        title: ' Danh sách phòng',
        icon: { icon: 'door-open', pack: 'fas' },
        link: '/home/room'
    },
    {
        title: ' Vật tư',
        icon: { icon: 'tv', pack: 'fas'},
        children: [
            {
                title: 'Danh sách vật tư',
                link: '/home/supply'
            },
            {
                title: 'Thêm vật tư',
                link: '/home/supply/add'
            }
        ]
    },
]

export const MENU_ADMIN: NbMenuItem[] = [
    {
        title: ' Trang chủ',
        icon: { icon: 'home', pack: 'fas'},
        link: '/home'
    },
    {
        title: ' Nhân viên',
        icon: { icon: 'id-card', pack: 'far' },
        children: [
            {
                title: 'Danh sách nhân viên',
                link: '/home/staff'
            },
            {
                title: 'Thêm nhân viên',
                link: '/home/staff/add'
            }
        ]
    },
    {
        title: ' Khách hàng',
        icon: {icon: 'users', pack: 'fas'},
        children: [
            {
                title: 'Danh sách khách hàng',
                link: '/home/user'
            },
            {
                title: 'Thêm khách hàng',
                link: '/home/user/add'
            }
        ]
    },
]