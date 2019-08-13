<template>
  <div class="fundamentalForm">
    <form @submit.prevent="onSubmit">
      <div class="row">
        <div class="col-md-12">
          <h3 class="text-center display-4 my-4">新增投注单</h3>
          <h6 class="text-center my-4">基本面详情</h6>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <LabelItem textName="联盟："/>
        </div>
        <div class="col-md-10">
          <InputItem inputType="text" textName="league" placeholder="如：英超、世界杯" :error="errors.league" v-model="league"/>
          <div class="invalid-feedback d-block">{{errors.league}}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <LabelItem textName="轮次："/>
        </div>
        <div class="col-md-10">
          <InputItem inputType="text" textName="rounds" placeholder="如：第20轮、小组赛第6轮" :error="errors.rounds"
                     v-model="rounds"/>
          <div class="invalid-feedback d-block">{{errors.rounds}}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <LabelItem textName="比赛场次："/>
        </div>
        <div class="col-md-4">
          <InputItem inputType="text" textName="host" placeholder="如：阿森纳" :error="errors.host" v-model="host"/>
          <div class="invalid-feedback d-block">{{errors.host}}</div>
        </div>
        <span class="lead text-center pt-2">vs</span>
        <div class="col-md-4">
          <InputItem inputType="text" textName="away" placeholder="如：托特纳姆热刺" :error="errors.away" v-model="away"/>
          <div class="invalid-feedback d-block">{{errors.away}}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <LabelItem textName="比赛时间："/>
        </div>
        <div class="col-md-10">
          <InputItem inputType="text" textName="matchTime" placeholder="如：2019-07-17 02:45:00" :error="errors.matchTime"
                     v-model="matchTime"/>
          <div class="invalid-feedback d-block">{{errors.matchTime}}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <LabelItem textName="是否竞彩单关："/>
        </div>
        <div class="col-md-2 my-3">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="isSingleMatch" id="isSingleMatch1"
                   v-model="isSingleMatch" value="1">
            <label class="form-check-label" for="isSingleMatch1">
              是
            </label>
          </div>
        </div>
        <div class="col-md-2 my-3">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="isSingleMatch" id="isSingleMatch2"
                   v-model="isSingleMatch" value="0">
            <label class="form-check-label" for="isSingleMatch2" >
              否
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <LabelItem textName="战意分析："/>
        </div>
        <div class="col-md-10">
          <textAreaItem rows="6" cols="30" name="analysis" :error="errors.analysis" v-model="analysis"/>
          <div class="invalid-feedback d-block">{{errors.analysis}}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <LabelItem textName="主队伤停信息："/>
        </div>
        <div class="col-md-10">
          <InputItem inputType="text" textName="hostInjury" placeholder="如：奥巴梅杨,拉卡泽特" :error="errors.hostInjury"
                     v-model="hostInjury"/>
          <div class="invalid-feedback d-block">{{errors.hostInjury}}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <LabelItem textName="客队伤停信息："/>
        </div>
        <div class="col-md-10">
          <InputItem inputType="text" textName="awayInjury" placeholder="如：哈里凯恩,埃里克森" :error="errors.awayInjury"
                     v-model="awayInjury"/>
          <div class="invalid-feedback d-block">{{errors.awayInjury}}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <LabelItem textName="主队预测首发："/>
        </div>
        <div class="col-md-10">
          <textAreaItem rows="3" cols="30" name="hostExpectLineup" :error="errors.hostExpectLineup"
                        placeholder="如：莱诺/穆斯塔菲，帕帕斯塔索普洛斯，蒙雷亚尔/科拉希纳茨，扎卡，托雷拉，奈尔斯/厄齐尔，奥巴梅杨，拉卡泽特"
                        v-model="hostExpectLineup"/>
          <div class="invalid-feedback d-block">{{errors.hostExpectLineup}}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <LabelItem textName="主队预测替补："/>
        </div>
        <div class="col-md-10">
          <textAreaItem rows="3" cols="30" name="hostExpectLBench" :error="errors.hostExpectBench"
                        placeholder="如：莱诺，穆斯塔菲，帕帕斯塔索普洛斯，科拉希纳茨，扎卡，奥巴梅杨，拉卡泽特"
                        v-model="hostExpectBench"/>
          <div class="invalid-feedback d-block">{{errors.hostExpectBench}}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <LabelItem textName="客队预测首发："/>
        </div>
        <div class="col-md-10">
          <textAreaItem rows="3" cols="30" name="awayExpectLineup" :error="errors.awayExpectLineup"
                        placeholder="如：莱诺/穆斯塔菲，帕帕斯塔索普洛斯，蒙雷亚尔/科拉希纳茨，扎卡，托雷拉，奈尔斯/厄齐尔，奥巴梅杨，拉卡泽特"
                        v-model="awayExpectLineup"/>
          <div class="invalid-feedback d-block">{{errors.awayExpectLineup}}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <LabelItem textName="客队预测替补："/>
        </div>
        <div class="col-md-10">
          <textAreaItem rows="3" cols="30" name="awayExpectBench" :error="errors.awayExpectBench"
                        placeholder="如：莱诺，穆斯塔菲，帕帕斯塔索普洛斯，科拉希纳茨，扎卡，奥巴梅杨，拉卡泽特"
                        v-model="awayExpectBench"/>
          <div class="invalid-feedback d-block">{{errors.awayExpectBench}}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <LabelItem textName="主队最近新闻："/>
        </div>
        <div class="col-md-10">
          <textAreaItem rows="6" cols="30" name="hostNews" :error="errors.hostNews" v-model="hostNews"/>
          <div class="invalid-feedback d-block">{{errors.hostNews}}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <LabelItem textName="客队最近新闻："/>
        </div>
        <div class="col-md-10">
          <textAreaItem rows="6" cols="30" name="awayNews" :error="errors.awayNews" v-model="awayNews"/>
          <div class="invalid-feedback d-block">{{errors.awayNews}}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 mb-5">
          <button type="submit" class="btn btn-info btn-block">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import InputItem from '../../common/InputItem'
import LabelItem from '../../common/LabelItem'
import TextAreaItem from '../../common/TextAreaItem'
export default {
  data () {
    return {
      league: '',
      rounds: '',
      host: '',
      away: '',
      matchTime: '',
      isSingleMatch: '0',
      analysis: '',
      hostInjury: '',
      awayInjury: '',
      hostExpectLineup: '',
      hostExpectBench: '',
      awayExpectLineup: '',
      awayExpectBench: '',
      hostNews: '',
      awayNews: '',
      errors: {}
    }
  },
  methods: {
    onSubmit () {
      const report = {
        league: this.league,
        rounds: this.rounds,
        host: this.host,
        away: this.away,
        matchTime: this.matchTime,
        isSingleMatch: this.isSingleMatch,
        analysis: this.analysis,
        hostInjury: this.hostInjury,
        awayInjury: this.awayInjury,
        hostExpectLineup: this.hostExpectLineup,
        hostExpectBench: this.hostExpectBench,
        awayExpectLineup: this.awayExpectLineup,
        awayExpectBench: this.awayExpectBench,
        hostNews: this.hostNews,
        awayNews: this.awayNews
      }
      this.$axios.post('/api/betForm/', report)
        .then(res => {
          console.log(res)
          this.$router.push({name: 'reportLink'})
        })
        .catch(err => {
          if (err.response.status === 400) {
            this.errors = err.response.data
          }
        })
    }
  },
  components: {
    InputItem,
    LabelItem,
    TextAreaItem
  }
}
</script>

<style scoped>
  @font-face {
    font-family: 'Glyphicons Halflings';
    src: url('../../../../static/fonts/glyphicons-halflings-regular.eot');
    src: url('../../../../static/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('../../../../static/fonts/glyphicons-halflings-regular.woff') format('woff'), url('../../../../static/fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('../../../../static/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
  }
  .checkbox-custom {
    position: relative;
    padding: 0 15px 0 25px;
    margin-bottom: 7px;
    margin-top: 0;
    display: inline-block;
  }
  .checkbox-custom input[type="checkbox"] {
    opacity: 0;/*将初始的checkbox隐藏起来*/
    position: absolute;
    cursor: pointer;
    z-index: 2;
    margin: -6px 0 0 0;
    top: 50%;
    left: 3px;
  }
  .checkbox-custom label:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -9px;
    width: 19px;
    height: 18px;
    display: inline-block;
    border-radius: 2px;
    border: 1px solid #bbb;
    background: #fff;
  }
  .checkbox-custom input[type="checkbox"]:checked +label:after {
    position: absolute;
    display: inline-block;
    font-family: 'Glyphicons Halflings';
    content: "\e013";
    top: 42%;
    left: 3px;
    margin-top: -5px;
    font-size: 11px;
    line-height: 1;
    width: 16px;
    height: 16px;
    color: #333;
  }
  .checkbox-custom label {
    cursor: pointer;
    line-height: 1.2;
    font-weight: normal;/*改变了rememberme的字体*/
    margin-bottom: 0;
    text-align: left;
  }

</style>
