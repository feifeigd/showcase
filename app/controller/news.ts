import {Controller }from 'egg';

export default class NewController extends Controller{
	/**
	 * list
	 */
	public async list() {
		const dataList = {
			list:[
				{id: 1, title: 'this is news 1', url: '/news/1'},
				{id: 2, title: 'this is news 2', url: '/news/2'}
			]
		};
		await this.ctx.render('news/list.tpl', dataList);
	}
};
