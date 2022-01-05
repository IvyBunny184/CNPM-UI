export const settingService = {
  add: {
    addButtonContent: '<i class="nb-plus"></i>',
    createButtonContent: '<i class="nb-checkmark"></i>',
    cancelButtonContent: '<i class="nb-close"></i>',
    confirmCreate:true,
  },
  edit: {
    editButtonContent: '<i class="nb-edit"></i>',
    saveButtonContent: '<i class="nb-checkmark"></i>',
    cancelButtonContent: '<i class="nb-close"></i>',
    confirmSave:true
  },
  delete: {
    deleteButtonContent: '<i class="nb-trash"></i>',
    confirmDelete: true,
  },
  mode: 'external',
    columns: {
      serviceId: {
        title: 'Dịch vụ',
        type: 'string',
        filter: true
      },
      amount: {
        title: 'Số lượng',
        type: 'number'
      },
      price: {
          title: 'Giá',
          type: 'number'
      }
    }
  }