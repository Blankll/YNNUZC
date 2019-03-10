/*==数据源===此项为必须定义==*/
var data = new justep.yn.Data();
data.setDbkey("oa");//指定使用数据库连接
data.setTable("ynnu_faculties");//指定grid对应的表
		
/*====*/
var currentgrid;
function getData() {
	var d = document.getElementById("main-grid-view");
	var labelid = "No,fname,fenglish,facultyid,fdesc,fdesc_en";//设置字段
	var labels = "No.,学院名称,学院英文名称,学院代码,学院描述,学院英文描述";//设置标题
	var labelwidth = "40,200,200,80,200,200";//设置宽度
	var datatype = "ro,string,string,string,textarea,textarea";//设置字段类型
	var dataAction = {
		"queryAction" : "getGridAction",//查询动作
		"savAction" : "saveAction",//保存动作
		"deleteAction" : "deleteAction"//删除动作
	};
	var maingrid = new justep.yn.createGrid(d, labelid, labels, labelwidth,
		dataAction, "100%", "100%", data, 20, "", "", "", datatype,
		"false", "true");
	//设置按钮显示{新增、保存、刷新、删除}
	maingrid.grid.settoolbar(false, false, true, false);
	//设置是否可编辑
	maingrid.grid.seteditModel(false);
	currentgrid = maingrid.grid;
	currentgrid.refreshData();//刷新数据
}

function griddbclick(event){
	var rowid = currentgrid.getCurrentRowId();
	justep.yn.portal.openWindow('学院详细', '/JBIZ/ynnuzc/BaseInfo/facultyinfoDetail.html?rowid='+rowid);
}