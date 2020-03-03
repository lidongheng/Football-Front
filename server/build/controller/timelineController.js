"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Timeline_1 = require("../models/Timeline");
class TimelineController {
    add(req, res) {
        const newTimeline = {
            order: req.body.order,
            date: req.body.date,
            event: req.body.event,
            desc: req.body.desc
        };
        // @ts-ignore
        const newTimelineModel = new Timeline_1.TimelineModel(newTimeline);
        newTimelineModel.save((err, timeline) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            else {
                return res.status(200).json({ success: true });
            }
        });
    }
    async get(req, res) {
        const timeline = await Timeline_1.TimelineModel.find({ "date": { $regex: eval(`/^(${this.threeMonths()}){1}/i`) } }).sort({ order: 1 });
        if (timeline) {
            return res.status(200).json({ success: true, timeline: timeline });
        }
        else {
            return res.status(400).json({ success: false });
        }
    }
    threeMonths() {
        let date = new Date();
        let fmt = 'MM|NN|OO';
        if (/(M+)/.test(fmt)) { // 月
            let month1 = date.getMonth() + 1;
            if (month1 < 10) {
                month1 = '0' + month1;
            }
            fmt = fmt.replace(RegExp.$1, month1);
        }
        if (/(N+)/.test(fmt)) { // 月
            let month2 = date.getMonth() + 2;
            if (month2 == 13) {
                month2 = '01';
            }
            else if (month2 < 10) {
                month2 = '0' + month2;
            }
            fmt = fmt.replace(RegExp.$1, month2);
        }
        if (/(O+)/.test(fmt)) { // 月
            let month3 = date.getMonth() + 3;
            if (month3 == 14) {
                month3 = '02';
            }
            else if (month3 == 13) {
                month3 = '01';
            }
            else if (month3 < 10) {
                month3 = '0' + month3;
            }
            fmt = fmt.replace(RegExp.$1, month3);
        }
        return fmt;
    }
}
exports.default = TimelineController;
