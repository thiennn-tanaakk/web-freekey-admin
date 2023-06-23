import { INPUT_FORMAT } from "@/utils/inputFormats";
import { configure, defineRule } from "vee-validate";
import { localize } from "@vee-validate/i18n";
import ja from "@vee-validate/i18n/dist/locale/ja.json";
import {
  between,
  confirmed,
  email,
  max,
  max_value,
  min,
  min_value,
  numeric,
  required,
} from "@vee-validate/rules";

defineRule("between", between);
defineRule("confirmed", confirmed);
defineRule("max", max);
defineRule("min", min);
defineRule("required", required);
defineRule("password", (value: any) => {
  return INPUT_FORMAT.PASSWORD.test(value);
});
defineRule("max_value", max_value);
defineRule("min_value", min_value);
defineRule("numeric", numeric);
defineRule("email", email);
defineRule("max_selection", (values: any, params: number[]) => {
  const [max] = params;
  return values.length <= max;
});
defineRule("maxLength", (values: String, params: number[]) => {
  const [max] = params;
  return values.length <= max;
});
defineRule("decimal", (values: any) => {
  const regex = /^[0-9]{1,3}(\.[0-9]{1,2})?$/;
  if (!values) {
    return true;
  }
  return regex.test(values);
});
defineRule("numeric_with_dot", (values: any) => {
  const regex = /^[0-9]+(?:\.[0-9]+)?$/;
  if (!values) {
    return true;
  }
  return regex.test(values);
});

defineRule(
  "decimalWithLimitedFractionDigits",
  (values: string, params: number[]) => {
    const [max] = params;
    const regex = new RegExp(`^\\d*(\\.\\d{1,${max}})?$`);
    return regex.test(values);
  }
);

defineRule("oneByteNumber", (values: string) => {
  if (isNaN(+values)) {
    return false;
  }

  return !INPUT_FORMAT.TWO_BYTE_NUMBER.test(values);
});

defineRule("maxLengthEachItem", (values: string, params: any) => {
  const items = values.split(",").filter((item) => item);
  const [maxLength] = params;

  return items.every((item) => item.length <= maxLength);
});

defineRule("boolean", (values: boolean, params: any[]) => {
  const [option] = params;
  return values.toString() === option.toString();
});

defineRule("checkDot", (values: any) => {
  return !String(values).includes(".");
});

defineRule("exist", (_values: any, params: any) => {
  const [exist] = params;
  return exist === "false";
});

defineRule("duplicateUser", (_values: string, params: any[]) => {
  const [duplicateUser] = params;
  return duplicateUser === "false";
});

defineRule("timeFormattedIsRange", (values: string) => {
  const time = values.split(" ~ ");

  if (time.length !== 2) {
    return false;
  }

  if (!time[1].length) {
    return false;
  }

  return true;
});

defineRule("requiredWithOption", (values: any, params: any) => {
  const [option] = params;
  if (option.length) {
    const found = option.find((element: any) => element?.value === values);
    return !!found;
  } else {
    return values === option?.value;
  }
});

defineRule("requireWithSpace", (values: any) => {
  if (typeof values === "string") {
    return values.length !== 0;
  }
  return false;
});

const customMessage = {
  maxLength: "{_field_}は{max}桁以下にしてください",
  decimal: "{_field_}は小数第{max}以下にしてください",
  max_selection: "指定可能な数は{max}までです",
  password: "有効なパスワードではありません",
  numeric_with_dot: "{_field_}は半角数字のみ使用できます",
  exist: "{_field_}は存在しません",
  oneByteNumber: "{_field_}は半角数字のみ使用できます",
  maxLengthEachItem: "{_field_}のアイテムは{maxLength}桁以下にしてください",
  boolean: "{_field_}は必須項目です",
  decimalWithLimitedFractionDigits:
    "{_field_}は小数点第{max}位まで記入できます",
  requiredWithOption: "{_field_}は必須項目です",
  timeFormattedIsRange: "{_field_}は必須項目です",
  numeric: "{_field_}は半角数字のみ使用できます",
  checkDot: "{_field_}は整数のみ使用できます",
  requireWithSpace: "{_field_}は必須項目です",
};

const names = {
  ja: {
    loginId: "ログインID",
    password: "パスワード",
    firstLoginPassword: "パスワード",
    firstLoginPasswordConfirm: "パスワード（確認）",
    vehicleTypeName: "車両名",
    vehicleTitle: "車両番号",
    status: "ステータス",
    ridingCapacity: "乗車定員",
    cargoCapacity: "最大積載量",
    freekeyType: "デジタルキー",
    physicalLockId: "個体識別コード",
    ownershipClassification: "所有区分",
    memo: "メモ",
    departmentName: "拠点/部門",
    locationName: "所在地",
    userName: "氏名",
    authority: "権限",
    mailAddress: "メールアドレス",
    department: "拠点/部門",
    verificationCode: "確認コード",
    driverName: "氏名",
    customerUserId: "社員番号",
    customerVehicleId: "お客様車両ID",
    vehicleRuleName: "車両利用者ルール名",
    vehicleRule: "車両利利用者ルール",
    parkingArea: "parkingArea",
    driver: "管理者",
    vehicleTag: "車両分類",
    parking: "駐車場",
    parkingName: "駐車場名",
    telephoneNumber: "電話番号",
    customerId: "社員番号",
    tagName: "車両分類名",
    destination: "行き先",
    note: "備考",
    freekeyMountingPosition: "搭載場所",
    parkingLotLocation: "駐車位置",
    reservationAcceptDays: "予約受付日数",
    reservationPossibleDays: "1度に予約可能な日数",
    reservationSettingType: "予約可能日",
    beforeUseAlcoholChecked: "検知器使用 有",
    beforeUseAlcoholValue: "アルコール数値",
    beforeUseAlcoholPerson: "確認者名",
    beforeUseAlcoholPersonId: "確認者名",
    beforeDriverConfirmId: "確認者名",
    beforeUseAlcoholTimeHours: "確認時刻",
    beforeUseAlcoholTimeMinutes: "確認時刻",
    beforeUseDrunkDriving: "酒気帯びの有無",
    beforeUseAlcoholDate: "確認日",
    beforeUseInstructions: "指示事項の有無",
    beforeUseConfirmationMethod: "確認方法",
    beforeUseConfirmationMethodInput: "それ以外の方法",
    beforeUseInstructionsMemo: "指示事項",
    afterUseAlcoholChecked: "検知器使用 有",
    afterUseAlcoholValue: "アルコール数値",
    afterUseAlcoholPerson: "確認者名",
    afterUseAlcoholPersonId: "確認者名",
    afterDriverConfirmId: "確認者名",
    afterUseAlcoholTimeHouse: "確認時刻",
    afterUseAlcoholTimeMinutes: "確認時刻",
    afterUseDrunkDriving: "酒気帯びの有無",
    afterUseAlcoholDate: "確認日",
    afterUseInstructions: "指示事項の有無",
    afterUseConfirmationMethod: "確認方法",
    afterUseConfirmationMethodInput: "それ以外の方法",
    afterUseInstructionsMemo: "指示事項",
    alcoholCheckMemo: "備考欄",
    datetimeDepartureHours: "開始時刻",
    datetimeDepartureMinutes: "開始時刻",
    datetimeReturnHours: "終了時刻",
    datetimeReturnMinutes: "終了時刻",
    materDistanceAtStart: "運転開始時メーター距離",
    materDistanceAtEnd: "運転終了時メーター距離",
    refuelingAmount: "給油量",
    highwayPeriod: "高速道路利用区間",
    goStraightNotification: "直行",
    bounceNotification: "直帰",
    holidayWorkNotification: "休日出勤",
    vehicleUseNotification: "使用届提出",
    keyChecked: "カギ",
    refuelingCardChecked: "給油カード",
    etcCardChecked: "ETCカード",
    parkingCardChecked: "駐車場カード",
    confirmVehicleUse: "車両の運行無し",

    // alcohol check history fields
    drivingStatus: "運行区分",
    alcoholValue: "アルコール数値",
    measurementDate: "測定日",
    measurementHours: "測定時刻",
    measurementMinutes: "測定時刻",
    driverConfirmId: "確認者名",
    confirmationPerson: "確認者名",
    confirmationDate: "確認日",
    confirmationHours: "確認時刻",
    confirmationMinutes: "確認時刻",
    confirmationMethod: "確認方法",
    drunkDriving: "酒気帯びの有無",
    instructions: "指示事項の有無",
    instructionsMemo: "指示事項",
    driverApproveId: "承認者",
  },
};

const messages = Object.assign({}, ja.messages, customMessage);
const dictionary = Object.assign({}, ja, { messages }, { names: names.ja });

configure({
  generateMessage: localize("ja", dictionary),
});
