export const settingsMenu = {
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
  mode: 'external',
  delete: {
    deleteButtonContent: '<i class="nb-trash"></i>',
    confirmDelete: true,
  },
  columns: {
    foodId: {
      title: 'Món ăn',
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