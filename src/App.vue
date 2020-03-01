<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>員工檔案建立</h1>
          <hr />
          <!-- v-model - TEXT -->
          <div class="form-group">
            <label for="nametc">姓名</label>
            <input type="text" id="nametc" class="form-control" v-model="employee.nametc" />
          </div>
          <!-- v-model - behind the scense -->
          <div class="form-group">
            <label for="mail">信箱</label>
            <input
              type="text"
              id="mail"
              class="form-control"
              :value="employee.mail"
              @input="employee.mail = $event.target.value"
            />
          </div>
          <div class="form-group">
            <label for="age">年齡</label>
            <input type="number" id="age" class="form-control" />
          </div>
        </div>
      </div>
      <!-- v-model - TEXT AREA -->
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="intro">自我介紹</label>
          <br />
          <textarea id="intro" rows="5" class="form-control" v-model="employee.intro"></textarea>
        </div>
      </div>
      <!-- v-model - CHECKBOX -->
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <!-- Police Criminal Record Certificate -->
            <label for="pcrc">
              <input type="checkbox" id="pcrc" value="良民證" v-model="attachment" /> 已繳交良民證
            </label>
            <label for="bank">
              <input type="checkbox" id="bank" value="銀行帳戶" v-model="attachment" /> 已開戶
            </label>
          </div>
        </div>
      </div>
      <!-- v-model - RADIO BUTTON -->
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="male">
            <input type="radio" id="male" value="男" v-model="employee.gender" /> 男
          </label>
          <label for="female">
            <input type="radio" id="female" value="女" v-model="employee.gender" /> 女
          </label>
        </div>
      </div>
      <!-- v-model - DROPDOWN -->
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="department">事業處</label>
          <select id="department" class="form-control">
            <option></option>
          </select>
          <!-- <select-department :options="department" v-model="departmentIdx"></select-department> -->
        </div>

        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="division">部門別</label>
          <select id="division" class="form-control">
            <option></option>
          </select>
          <!-- <select-division :options="division" v-model="divisionIdx"></select-division> -->
        </div>

        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="group">組別</label>
          <select id="group" class="form-control">
            <option></option>
          </select>
          <!-- <select-group :options="group" v-model="groupIdx"></select-group> -->
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button class="btn btn-primary" @click.prevent="submit">送出</button>
        </div>
      </div>
    </form>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>員工資訊</h4>
          </div>
          <div class="panel-body">
            <p>姓名: {{ employee.nametc }}</p>
            <p>信箱: {{ employee.mail }}</p>
            <p>年齡:</p>
            <p>自我介紹: {{ employee.intro }}</p>
            <p>
              <strong>報到資料</strong>
            </p>
            <ul>
              <li v-for="item in attachment" :key="item">{{ item }}</li>
            </ul>
            <p>性別: {{ employee.gender }}</p>
            <p>隸屬單位: {{ department[departmentIdx].name}}, {{ division[divisionIdx].name}}, {{ group[groupIdx].name}}</p>
            <ul>
              <li>departmentIdx: {{ departmentIdx }}</li>
              <li>divisionIdx: {{ divisionIdx }}</li>
              <li>groupIdx: {{ groupIdx }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SelectDepartment from "./components/SelectDepartment.vue";
import SelectDivision from "./components/SelectDivision.vue";
import SelectGroup from "./components/SelectGroup.vue";

export default {
  data() {
    return {
      employee: {
        nametc: "",
        mail: "",
        age: 0,
        intro: "",
        gender: "男"
      },
      attachment: [],
      departmentIdx: 0,
      divisionIdx: 0,
      groupIdx: 0,
      isSubmitted: false
    };
  },
  methods: {
    submit() {
      this.isSubmitted = true;
    }
  },
  computed: {
    department() {
      return organization;
    },
    division() {
      return organization[this.departmentIdx].divisions;
    },
    group() {
      return organization[this.departmentIdx].divisions[this.divisionIdx]
        .groups;
    }
  },
  watch: {
    departmentIdx() {
      this.divisionIdx = 0;
      this.groupIdx = 0;
    },
    divisionIdx() {
      this.groupIdx = 0;
    }
  },
  components: {
    SelectDepartment,
    SelectDivision,
    SelectGroup
  }
};

const organization = [
  {
    name: "開發機構",
    divisions: [
      {
        name: "前端部門",
        groups: [
          { name: "UI/UX小組" },
          { name: "Angular小組" },
          { name: "React小組" },
          { name: "Vue小組" }
        ]
      },
      {
        name: "後端部門",
        groups: [{ name: "Java小組" }, { name: "C#小組" }, { name: ".Net小組" }]
      },
      {
        name: "大數據部門",
        groups: [{ name: "ML小組" }, { name: "Python小組" }]
      }
    ]
  },
  {
    name: "行銷機構",
    divisions: [
      {
        name: "企劃部門",
        groups: [{ name: "文案小組" }, { name: "視覺設計小組" }]
      },
      {
        name: "社群部門",
        groups: [{ name: "媒體小組" }, { name: "平台管理小組" }]
      }
    ]
  }
];
</script>

<style lang="scss">
</style>
