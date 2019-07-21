<template>
  <div>
	  <el-button @click="exportExcel">导出</el-button>
	  <div class="table-wrap">
		  <el-table
			  :data="tableData"
			  style="width: 100%">
			  <el-table-column
				  prop="date"
				  label="日期"
				  width="180">
			  </el-table-column>
			  <el-table-column
				  prop="name"
				  label="姓名"
				  width="180">
			  </el-table-column>
			  <el-table-column
				  prop="address"
				  label="地址">
			  </el-table-column>
		  </el-table>
	  </div>
  </div>
</template>

<script>
	import FileSaver from "file-saver";
	import XLSX from "xlsx";
    export default {
        name: "skill",
        data() {
        return {
          tableData: [
			{
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			},
			{
				date: '2016-05-04',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1517 弄'
			},
			{
				date: '2016-05-01',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1519 弄'
			},
			{
				date: '2016-05-03',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1516 弄'
			}
			],
			xlsxName: 'table.xlsx'
		  }
        },
        methods: {
			exportExcel () {

				const params = { raw: true };

				const wb = XLSX.utils.table_to_book(document.querySelector('.table-wrap'), params);

				const wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' });

				try {

					FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), this.xlsxName)

				} catch (e) {
					(typeof console !== 'undefined') && console.log(e, wbout);
				}

				return wbout
			},
        }
    }
</script>

<style scoped>

</style>
