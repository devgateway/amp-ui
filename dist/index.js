'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var reactBootstrap = require('react-bootstrap');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".ActivityPreview_preview_container__3tai0 {\n  font-family: 'open_sansregular', sans-serif;\n  margin-left: 30px;\n  margin-right: 50px;\n}\n\n.ActivityPreview_preview_title__1GDjY {\n  margin-left: 10px;\n  background-color: #FFFFFF;\n  color: #000000;\n  font-size: 1.5em;\n  font-weight: bold;\n  padding: 5px;\n  height: auto;\n  display: inline-block;\n}\n\n.ActivityPreview_preview_icons__3i4Vs {\n  display: inline-block;\n}\n\n.ActivityPreview_preview_icons__3i4Vs img {\n  height: 20px;\n  width: 20px;\n}\n\n.ActivityPreview_preview_icons__3i4Vs object {\n  height: 20px;\n  width: 20px;\n}\n\n.ActivityPreview_preview_icons__3i4Vs ul {\n  margin-left: 30px;\n  columns: 5;\n  column-rule: 1px solid #ebebeb;\n}\n\n.ActivityPreview_preview_icons__3i4Vs ul li {\n  list-style-type: none;\n  margin-left: 10px;\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.ActivityPreview_preview_status_container__2Thby {\n  margin-left: 10px;\n  margin-top: 20px;\n  padding: 10px;\n  background-color: #f5faff;\n}\n\n.ActivityPreview_inline_flex__1pvo5 {\n  display: inline-flex;\n}\n\n.ActivityPreview_preview_status_title__27GZY {\n  margin-left: 10px;\n  margin-right: 5px;\n}\n\n.ActivityPreview_preview_status_detail__D9NiA {\n  font-family: 'open_sansextrabold', sans-serif;\n  margin-right: 20px;\n}\n\n.ActivityPreview_status_title_class__1Bw1H {\n\n}\n\n.ActivityPreview_status_group_class__213C2 {\n\n}\n\n.ActivityPreview_preview_categories__1YrSS {\n  margin-top: 20px;\n  margin-left: 15px;\n  border-bottom: 1px solid #ebebeb;\n}\n\n.ActivityPreview_preview_categories__1YrSS ul {\n  columns: 5;\n  column-rule: 1px solid #ebebeb;\n  line-height: 150%;\n}\n\n.ActivityPreview_preview_categories__1YrSS ul li {\n  list-style-type: none;\n  font-size: 0.9em;\n  font-weight: bold;\n  color: #778293;\n  margin-left: 20px;\n  padding-left: 4px;\n  cursor: pointer;\n}\n\n.ActivityPreview_preview_categories__1YrSS ul li:hover {\n  color: #1d2531;\n  background-color: #f8f8f8;\n  position: relative;\n}\n\n.ActivityPreview_preview_categories__1YrSS ul li:hover:after {\n  /* content: url('../../../assets/images/arrow.svg'); */\n  height: 14px;\n  width: 14px;\n  display: block;\n  position: absolute;\n  left: -13px;\n  top: 2px;\n}\n\n.ActivityPreview_preview_category_selected__2gHPF {\n  color: #1d2531;\n  /* background-color: #f8f8f8; */\n  position: relative;\n}\n\n.ActivityPreview_preview_category_selected__2gHPF:after {\n  /* content: url('../../../assets/images/arrow.svg'); */\n  height: 14px;\n  width: 14px;\n  display: block;\n  position: absolute;\n  left: -13px;\n  top: 2px;\n}\n\n.ActivityPreview_preview_content__3ndG2 {\n  vertical-align: top;\n}\n\n.ActivityPreview_preview_summary__2M11Q {\n  width: 300px;\n}\n\n.ActivityPreview_summary_container__3c2Lt {\n  margin-top: 30px;\n  padding-right: 20px;\n}\n\n.ActivityPreview_summary_section_title__2yAmt {\n  background-color: #3a84b3;\n  color: #FFFFFF;\n  font-size: 1.3em;\n  margin-bottom: 15px;\n  margin-top: 30px;\n  padding-top: 15px;\n  padding-bottom: 10px;\n  padding-left: 20px;\n  padding-right: 20px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  display: block;\n}\n\n.ActivityPreview_summary_section_group__1prJe {\n  background-color: #f5faff;\n  margin-top: 15px;\n  padding-bottom: 10px;\n}\n\n.ActivityPreview_summary_field_name__2ii3f {\n  padding-left: 15px;\n}\n\n.ActivityPreview_summary_field_value__16N-w {\n  padding-left: 15px;\n  font-family: 'open_sansextrabold', sans-serif;\n  margin-bottom: 15px;\n}\n\n.ActivityPreview_main_group_container__4QVQf {\n  margin-top: 30px;\n}\n\n.ActivityPreview_section_title_class__1t12o {\n  font-size: 1.3em;\n  font-weight: bold;\n  margin-bottom: 15px;\n  margin-top: 30px;\n}\n\n.ActivityPreview_section_group_class__3WIHL {\n  margin-right: 10px;\n  margin-bottom: 20px;\n}\n\n.ActivityPreview_section_subtitle_class__1RBXN {\n  font-size: 1.1em;\n  font-weight: bold;\n  padding-bottom: 15px;\n  padding-top: 15px;\n  width: 100%;\n}\n\n.ActivityPreview_section_field_name__2mQY7 {\n  font-size: 0.85em;\n  color: #767676;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n\n.ActivityPreview_section_field_value__3h0kd {\n  font-weight: bold;\n  border-bottom: 1px solid #ebebeb;\n  margin-bottom: 10px;\n  padding-bottom: 10px;\n}\n\n.ActivityPreview_box_container__Xe8ey {\n  border: 1px solid #ebebeb;\n}\n\n.ActivityPreview_box_table__1zo_q {\n  border-top: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.ActivityPreview_box_table__1zo_q td {\n  width: 33%;\n  padding-left: 20px;\n  border-bottom: 1px solid #ebebeb;\n}\n\n.ActivityPreview_box_table__1zo_q tr td:nth-child(2) {\n  border: 1px solid #ebebeb;\n}\n\n.ActivityPreview_two_box_table__2w-_w {\n  border-top: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n  width: 100%;\n}\n\n.ActivityPreview_two_box_table__2w-_w td {\n  width: 50%;\n  padding-left: 20px;\n}\n\n.ActivityPreview_two_box_table__2w-_w tr td:first-child {\n  border-right: 1px solid #ebebeb;\n}\n\n.ActivityPreview_box_field_name__1rDaU {\n  font-size: 0.85em;\n  color: #767676;\n  font-weight: bold;\n  padding-top: 10px;\n  padding-bottom: 5px;\n}\n\n.ActivityPreview_box_field_value__1j3If {\n  font-weight: bold;\n  padding-bottom: 10px;\n}\n\n.ActivityPreview_box_field_value_tight__1D_p0 {\n  font-weight: bold;\n}\n\n.ActivityPreview_percent_field_name__2pqpU {\n  display: inline-block;\n  font-weight: bold;\n  padding-top: 10px;\n  padding-bottom: 5px;\n  margin-left: 10px;\n  width: 70%;\n}\n\n.ActivityPreview_percent_field_value__2FOrM {\n  display: inline-block;\n  color: #3a84b3;\n  font-weight: bold;\n  width: 15%;\n  padding-left: 5%;\n  padding-top: 10px;\n  vertical-align: top;\n}\n\n.ActivityPreview_project_cost_left__eDeh4 {\n  display: inline-block;\n  width: 55%;\n  background-color: #f8fff5;\n  margin-left: 10px;\n  padding-left: 20px;\n  padding-top: 10px;\n  border-top: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n  border-right: 1px solid #ebebeb;\n}\n\n.ActivityPreview_project_cost_right__Y_NyF {\n  display: inline-block;\n  width: 43%;\n  padding-left: 20px;\n  padding-top: 10px;\n  border-top: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n}\n\n.ActivityPreview_project_cost_title__1FhPK {\n  display: block;\n  font-size: 0.85em;\n  color: #767676;\n  font-weight: bold;\n  margin-bottom: 5px\n}\n\n.ActivityPreview_project_cost_currency__3Kqw4 {\n  display: block;\n  width: 100%;\n  font-size: 2em;\n  text-align: right;\n  padding-bottom: 10px;\n  padding-right: 10px;\n}\n\n.ActivityPreview_project_cost_date__1FQIr {\n  display: block;\n  width: 100%;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  font-weight: bold;\n  line-height: 30px;\n}\n\n.ActivityPreview_sector_title__2C01I {\n  background-color: #f4f4f4;\n  color: #9d9d9d;\n  border-top: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n  padding: 8px;\n  margin-bottom: 15px;\n  font-size: 0.85em;\n  font-weight: bold;\n}\n\n.ActivityPreview_inline__24u9t {\n  display: inline;\n}\n\n.ActivityPreview_block__1Thcz {\n  display: block;\n}\n\n.ActivityPreview_flex__cqbOH {\n  display: flex;\n}\n\n.ActivityPreview_hidden__2fpOd {\n  display: none;\n}\n\n.ActivityPreview_table_raw__30FeG {\n  display: table-row;\n}\n\n\n.ActivityPreview_alignRight__3vSRs {\n  text-align: right;\n}\n\n.ActivityPreview_tableCell__ePAEq {\n  padding-left: 10px;\n}\n\n.ActivityPreview_tableValue__2rOMc {\n  width: 100%;\n  float: left;\n  font-weight: bold;\n}\n\n.ActivityPreview_paddingBottom__xqyvT {\n  padding-bottom: 10px;\n}\n\n.ActivityPreview_paddingBottomLarge__3uVPO {\n  padding-bottom: 20px;\n}\n\n.ActivityPreview_box_table2__11qOl {\n  width: 100%;\n}\n\n.ActivityPreview_box_table2__11qOl td {\n  width: 33%;\n  padding-left: 20px;\n}\n\n.ActivityPreview_box_table2__11qOl tr td:nth-child(2) {\n  border-left: 1px solid #ebebeb;\n  border-right: 1px solid #ebebeb;\n}\n\n.ActivityPreview_tablify_inner_cell__2bfUh {\n  display: inline-block;\n  padding-bottom: 5px;\n  border-left: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n}\n\n.ActivityPreview_tablify_outer_cell__F_Nuk {\n  display: inline-block;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #ebebeb;\n}\n\n.ActivityPreview_nodata__I-8qU {\n  padding-left: 10px;\n  padding-bottom: 10px;\n  vertical-align: top;\n  font-weight: bold;\n}\n\n.ActivityPreview_noborder__1sM6U {\n  border: 0;\n}\n\n.ActivityPreview_top_warning_text__360ag {\n  color: red;\n  margin-left: 10px;\n  padding: 5px;\n  display: inline-block;\n  width: 100%;\n}\n\n.ActivityPreview_structure_title__3pAlL {\n  background-color: #f4f4f4;\n  color: #3a84b3;\n  border: 1px solid #ebebeb;\n  padding: 8px;\n  margin-bottom: 15px;\n  font-size: 1.2em;\n  font-weight: bold;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n\n.ActivityPreview_structures_coordinates_table__kBTDh {\n  width: 50%;\n}\n\n.ActivityPreview_structures_coordinates_value__3cFsq {\n  border: none;\n  font-weight: bold;\n}\n";
var styles = { "preview_container": "ActivityPreview_preview_container__3tai0", "preview_title": "ActivityPreview_preview_title__1GDjY", "preview_icons": "ActivityPreview_preview_icons__3i4Vs", "preview_status_container": "ActivityPreview_preview_status_container__2Thby", "inline_flex": "ActivityPreview_inline_flex__1pvo5", "preview_status_title": "ActivityPreview_preview_status_title__27GZY", "preview_status_detail": "ActivityPreview_preview_status_detail__D9NiA", "status_title_class": "ActivityPreview_status_title_class__1Bw1H", "status_group_class": "ActivityPreview_status_group_class__213C2", "preview_categories": "ActivityPreview_preview_categories__1YrSS", "preview_category_selected": "ActivityPreview_preview_category_selected__2gHPF", "preview_content": "ActivityPreview_preview_content__3ndG2", "preview_summary": "ActivityPreview_preview_summary__2M11Q", "summary_container": "ActivityPreview_summary_container__3c2Lt", "summary_section_title": "ActivityPreview_summary_section_title__2yAmt", "summary_section_group": "ActivityPreview_summary_section_group__1prJe", "summary_field_name": "ActivityPreview_summary_field_name__2ii3f", "summary_field_value": "ActivityPreview_summary_field_value__16N-w", "main_group_container": "ActivityPreview_main_group_container__4QVQf", "section_title_class": "ActivityPreview_section_title_class__1t12o", "section_group_class": "ActivityPreview_section_group_class__3WIHL", "section_subtitle_class": "ActivityPreview_section_subtitle_class__1RBXN", "section_field_name": "ActivityPreview_section_field_name__2mQY7", "section_field_value": "ActivityPreview_section_field_value__3h0kd", "box_container": "ActivityPreview_box_container__Xe8ey", "box_table": "ActivityPreview_box_table__1zo_q", "two_box_table": "ActivityPreview_two_box_table__2w-_w", "box_field_name": "ActivityPreview_box_field_name__1rDaU", "box_field_value": "ActivityPreview_box_field_value__1j3If", "box_field_value_tight": "ActivityPreview_box_field_value_tight__1D_p0", "percent_field_name": "ActivityPreview_percent_field_name__2pqpU", "percent_field_value": "ActivityPreview_percent_field_value__2FOrM", "project_cost_left": "ActivityPreview_project_cost_left__eDeh4", "project_cost_right": "ActivityPreview_project_cost_right__Y_NyF", "project_cost_title": "ActivityPreview_project_cost_title__1FhPK", "project_cost_currency": "ActivityPreview_project_cost_currency__3Kqw4", "project_cost_date": "ActivityPreview_project_cost_date__1FQIr", "sector_title": "ActivityPreview_sector_title__2C01I", "inline": "ActivityPreview_inline__24u9t", "block": "ActivityPreview_block__1Thcz", "flex": "ActivityPreview_flex__cqbOH", "hidden": "ActivityPreview_hidden__2fpOd", "table_raw": "ActivityPreview_table_raw__30FeG", "alignRight": "ActivityPreview_alignRight__3vSRs", "tableCell": "ActivityPreview_tableCell__ePAEq", "tableValue": "ActivityPreview_tableValue__2rOMc", "paddingBottom": "ActivityPreview_paddingBottom__xqyvT", "paddingBottomLarge": "ActivityPreview_paddingBottomLarge__3uVPO", "box_table2": "ActivityPreview_box_table2__11qOl", "tablify_inner_cell": "ActivityPreview_tablify_inner_cell__2bfUh", "tablify_outer_cell": "ActivityPreview_tablify_outer_cell__F_Nuk", "nodata": "ActivityPreview_nodata__I-8qU", "noborder": "ActivityPreview_noborder__1sM6U", "top_warning_text": "ActivityPreview_top_warning_text__360ag", "structure_title": "ActivityPreview_structure_title__3pAlL", "structures_coordinates_table": "ActivityPreview_structures_coordinates_table__kBTDh", "structures_coordinates_value": "ActivityPreview_structures_coordinates_value__3cFsq" };
styleInject(css);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/**
 * Simple Field component that consists of a field title and field value
 * @author Nadejda Mandrescu
 */

var TestAPField = function (_Component) {
  inherits(TestAPField, _Component);
  createClass(TestAPField, null, [{
    key: 'instance',

    /**
     * Gets an instance of Simple Field
     * @param trnLabel the label to translate and use as a title. This label is also used as the component key.
     * @param value the field value
     * @param inline show title and value in the same row.
     * @param separator add or not an <hr> tag.
     * @param nameClass css class for the field label
     * @param valueClass css class for the field value
     * @return {SimpleField}
     */
    value: function instance(trnLabel, value) {
      var inline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var separator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var nameClass = arguments[4];
      var valueClass = arguments[5];

      return React__default.createElement(TestAPField, {
        key: trnLabel, title: this.props.translate(trnLabel), value: value, inline: inline, separator: separator,
        fieldNameClass: nameClass, fieldValueClass: valueClass });
    }
  }]);

  function TestAPField(props) {
    classCallCheck(this, TestAPField);

    var _this = possibleConstructorReturn(this, (TestAPField.__proto__ || Object.getPrototypeOf(TestAPField)).call(this, props));

    _this.props.ampLogger.log('constructore');
    _this.useSeparator = _this.props.separator !== false;
    _this.displayClass = _this.props.fieldClass || (_this.props.inline === true ? styles.inline : styles.block);
    return _this;
  }

  createClass(TestAPField, [{
    key: '_getValue',
    value: function _getValue() {
      var classNames = this.props.fieldValueClass + ' ' + this.displayClass;
      // To handle boolean fields we dont want to show 'false' as 'No Data'.
      var value = this.props.value || this.props.value === false ? this.props.value : this.props.translate('No Data');
      var displayValue = void 0;
      if (Array.isArray(value)) {
        if (value[0] instanceof Object) {
          displayValue = [];
          value.forEach(function (v) {
            return displayValue.push(v);
          });
        } else {
          displayValue = value.sort().join(', ');
        }
      } else if (typeof value === 'boolean') {
        displayValue = value === true ? this.props.translate('Yes') : this.props.translate('No');
      } else {
        displayValue = this.props.inline && this.props.value instanceof String ? value + ' ' : value;
      }
      if (this.props.useInnerHTML) {
        return React__default.createElement('div', { className: classNames, dangerouslySetInnerHTML: { __html: displayValue } });
      } else {
        return React__default.createElement(
          'div',
          { className: classNames },
          displayValue
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var classNames = this.props.fieldNameClass + ' ' + this.displayClass;
      return React__default.createElement(
        'div',
        { className: this.displayClass },
        React__default.createElement(
          'div',
          { className: classNames },
          this.props.title
        ),
        this._getValue(),
        this.useSeparator ? React__default.createElement('hr', null) : ''
      );
    }
  }]);
  return TestAPField;
}(React.Component);


TestAPField.propTypes = {
  title: PropTypes.string,
  value: PropTypes.any,
  inline: PropTypes.bool,
  useInnerHTML: PropTypes.bool,
  fieldClass: PropTypes.string,
  fieldNameClass: PropTypes.string,
  fieldValueClass: PropTypes.string,
  separator: PropTypes.bool,
  ampLogger: PropTypes.object.isRequired,
  translate: PropTypes.func.isRequired
};

var TestingSection = function (_Component) {
  inherits(TestingSection, _Component);

  function TestingSection() {
    classCallCheck(this, TestingSection);
    return possibleConstructorReturn(this, (TestingSection.__proto__ || Object.getPrototypeOf(TestingSection)).apply(this, arguments));
  }

  createClass(TestingSection, [{
    key: 'render',
    value: function render() {
      return React__default.createElement(
        'div',
        null,
        React__default.createElement(
          'h2',
          null,
          'testing component'
        ),
        React__default.createElement(
          'div',
          null,
          'test translation: `DESKTOP = ',
          this.props.translate('DESKTOP'),
          '`'
        ),
        React__default.createElement(
          'div',
          null,
          'test APField:',
          React__default.createElement(TestAPField, { ampLogger: this.props.ampLogger, translate: this.props.translate })
        )
      );
    }
  }]);
  return TestingSection;
}(React.Component);

TestingSection.propTypes = {
  ampLogger: PropTypes.object.isRequired,
  translate: PropTypes.func.isRequired
};

var BASE_REST_URL = '/rest';

var CONNECTION_TIMEOUT = 25000;
var CONNECTION_FORCED_TIMEOUT = CONNECTION_TIMEOUT + 5000;
var TIMEOUT_CHECK_INTERVAL = 5000;
var MAX_RETRY_ATEMPTS = 5;
var ERRORS_TO_RETRY = ['ESOCKETTIMEDOUT', 'ETIMEDOUT', 'ECONNRESET', 'EAI_AGAIN'];
var ERRORS_NO_AMP_SERVER = ['ECONNREFUSED', 'ENETUNREACH', 'ENOENT', 'ENOTFOUND', 'ENETDOWN', 'EHOSTDOWN', 'EHOSTUNREACH', 'ENONET'];
var CONNECTIVITY_CHECK_INTERVAL = '60000'; // 1 minutes

var WORKSPACE_URL = '/workspace';
var LOGIN_URL = '/';
var DESKTOP_URL = '/desktop';
var DESKTOP_CURRENT_URL = '/desktop/current';
var SYNCUP_REDIRECT_URL = '/syncUp/sync';
var SYNCUP_HISTORY_TARGET = 'history';
var SYNCUP_SUMMARY_URL = '/syncUpSummary';
var ACTIVITY_PREVIEW_URL = '/activity/preview';
var ACTIVITY_EDIT_URL = '/activity/edit';
var UPDATE_URL = '/update';
var SETUP_URL = '/setup';
var SETTINGS_URL = '/settings';

var COLLECTION_USERS = 'users';
var COLLECTION_WORKPACES = 'workspaces';
var COLLECTION_TEAMMEMBERS = 'teammembers';
var COLLECTION_CLIENT_SETTINGS = 'client-settings';
var COLLECTION_GLOBAL_SETTINGS = 'global-settings';
var COLLECTION_ACTIVITIES = 'activities';
var COLLECTION_FIELDS = 'fields';
var COLLECTION_POSSIBLE_VALUES = 'possible-values';
var COLLECTION_SYNCUP_LOG = 'syncup-log';
var COLLECTION_LANGS = 'languages';
var COLLECTION_WS_SETTINGS = 'workspace-settings';
var COLLECTION_CURRENCY_RATES = 'currency-rates';
var COLLECTION_FEATURE_MANAGER = 'feature-manager';
var COLLECTION_CONTACTS = 'contacts';
var COLLECTION_RESOURCES = 'resources';
var COLLECTION_REPOSITORY = 'repository';
var COLLECTION_GAZETTEER = 'gazetteer';
var COLLECTION_CALENDARS = 'calendars';
var COLLECTION_CHANGESETS = 'changesets';

var GAZETTEER_DISTANCE_DIVIDE = 3;

var DB_FILE_PREFIX = 'database';
var DB_FILE_EXTENSION = '.db';
var DB_COMMON_DATASTORE_OPTIONS = { autoload: false, corruptAlertThreshold: 0 };
var DB_AUTOCOMPACT_INTERVAL_MILISECONDS = 60000;
var DB_DEFAULT_QUERY_LIMIT = 999999999;

var LANGUAGE_ENGLISH = 'en';
var FS_LOCALES_DIRECTORY = 'lang';
var LANGUAGE_MASTER_TRANSLATIONS_FILE = 'master-translations';
var LANGUAGE_TRANSLATIONS_FILE = 'translations';
var LANGUAGE_NEW_TRANSLATIONS_MUST_SYNC = 'must_sync_translation.json';

var ASAR_DIR = 'app.asar';
var APP_DIRECTORY = 'app';
var TEST_DIRECTORY = 'test';
var STATIC_DIR = 'static';
var IMAGES_DIR = 'images';
var DOC_ICONS = 'doc-icons';
var DB_STATIC_DIR = 'db';
var MIGRATIONS_DIR = 'changelog';

var HASH_ITERATIONS = 100;
var DIGEST_ALGORITHM_SHA1 = 'SHA-1';
var DIGEST_ALGORITHM_SHA256 = 'SHA-256';

var ACTIVITY_EDIT = 'ACTIVITY_EDIT';
var ACTIVITY_VIEW = 'ACTIVITY_VIEW';

var SYNCUP_FORCE_DAYS = 14;
var SYNCUP_BEST_BEFORE_DAYS = 7;
var SYNCUP_NO_DATE = '1900-01-01T00:00:00.000+0000';
var SYNCUP_TYPE_TRANSLATIONS = 'translations';
var SYNCUP_TYPE_USERS = 'users';
var SYNCUP_TYPE_ASSETS = 'assets';
var SYNCUP_TYPE_WORKSPACES = 'workspaces';
var SYNCUP_TYPE_GS = 'global-settings';
var SYNCUP_TYPE_EXCHANGE_RATES = 'exchange-rates';
var SYNCUP_TYPE_FEATURE_MANAGER = 'feature-manager';
var SYNCUP_TYPE_WORKSPACE_MEMBERS = 'workspace-members';
var SYNCUP_TYPE_ALL_FIELDS = 'fields';
var SYNCUP_TYPE_ACTIVITIES_PULL = 'activities';
var SYNCUP_TYPE_ACTIVITIES_PUSH = 'activities-push';
var SYNCUP_TYPE_ACTIVITY_FIELDS = 'activity-fields';
var SYNCUP_TYPE_ACTIVITY_FIELDS_STRUCTURAL_CHANGES = 'activity-fields-structural-changes';
var SYNCUP_TYPE_CONTACTS_PULL = 'contacts';
var SYNCUP_TYPE_CONTACTS_PUSH = 'contacts-push';
var SYNCUP_TYPE_ACTIVITY_POSSIBLE_VALUES = 'activity-possible-values-fields';
var SYNCUP_TYPE_CONTACT_FIELDS = 'contact-fields';
var SYNCUP_TYPE_CONTACT_FIELDS_STRUCTURAL_CHANGES = 'contact-fields-structural-changes';
var SYNCUP_TYPE_CONTACT_POSSIBLE_VALUES = 'contact-possible-values-fields';
var SYNCUP_TYPE_RESOURCES_PULL = 'resources';
var SYNCUP_TYPE_RESOURCES_PUSH = 'resources-push';
var SYNCUP_TYPE_RESOURCE_FIELDS = 'resource-fields';
var SYNCUP_TYPE_RESOURCE_FIELDS_STRUCTURAL_CHANGES = 'resource-fields-structural-changes';
var SYNCUP_TYPE_RESOURCE_POSSIBLE_VALUES = 'resource-possible-values-fields';
var SYNCUP_TYPE_COMMON_POSSIBLE_VALUES = 'common-possible-values-fields';
var SYNCUP_TYPE_WORKSPACE_SETTINGS = 'workspace-settings';
var SYNCUP_TYPE_MAP_TILES = 'map-tiles';
var SYNCUP_TYPE_GAZETTEER = 'locators';
var SYNCUP_TYPE_CALENDARS = 'calendars';

var SYNCUP_STATUS_SUCCESS = 'SUCCESS';
var SYNCUP_STATUS_FAIL = 'FAIL';
var SYNCUP_STATUS_PARTIAL = 'PARTIAL';
var SYNCUP_STATUS_CANCELED = 'CANCELED';
var SYNCUP_SYNC_REQUESTED_AT = 'sync-date';
var SYNCUP_SYNC_REQUESTED_BY = 'requested-by';
var SYNCUP_DATETIME_FIELD = 'timestamp';
var SYNCUP_DIFF_LEFTOVER = 'syncup-diff-leftover';
var SYNCUP_DEPENDENCY_CHECK_INTERVAL = 10;
var SYNCUP_DETAILS_SYNCED = 'synced';
var SYNCUP_DETAILS_UNSYNCED = 'unsynced';
var SYNCUP_RESOURCE_PULL_BATCH_SIZE = 100;
var SYNCUP_ACTIVITIES_PULL_BATCH_SIZE = 100;
var SYNCUP_CONTACTS_PULL_BATCH_SIZE = 100;

var ACTIVITY_STATUS_DRAFT = 'ACTIVITY_STATUS_DRAFT';
var ACTIVITY_STATUS_UNVALIDATED = 'ACTIVITY_STATUS_UNVALIDATED';
var ACTIVITY_STATUS_VALIDATED = 'ACTIVITY_STATUS_VALIDATED';

var CURRENCY_HOUR = '00:00';
var DEFAULT_CURRENCY = 'USD';
var RATE_SAME_CURRENCY = 1;
var RATE_CURRENCY_NOT_FOUND = 1;
var CURRENCY_PAIR = 'currency-pair';
var VERSION_PATTERN = /(\d+)\.(\d+)(\.(\d+))?(-\w+)?/;
var VERSION_PATTERN_GROUPS_TO_EXTRACT = [1, 2, 4, 5];
var AMP_COUNTRY_LOGO = 'ampCountryFlag.png';
var ASSETS_DIRECTORY = 'assets';
var BASE_64_PNG_PREFIX = 'data:image/png;base64,';
// Holds the BASE64 representation of a a transparent image 1x1 in case we don't yet have the country flag
var TRANSPARENT_FLAG = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=';
var HELP_PDF_FILENAME = 'amp-help';
var HELP_DIR = 'help';
var ENDS_WITH_PUNCTUATION_REGEX = /[.!?,;:]$/;

var MAP_TILES_DIR = 'map-tiles';
var TILES_ZIP_FILE = 'map-tiles.zip';

/* eslint-disable max-len */
var MAP_MARKER_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=';
var MAP_MARKER_SHADOW = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC';
var MAP_MARKER_CIRCLE_RED = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4gcbFwogeohhEAAAA1lJREFUOMullc1rHGUcxz+/Z2Z20zGE7luyQbyIdiExre6aNvSySEBBKB71VAI5mGJA9g8QpR48aVGK6K160ptYD7Wxh4CUkJrFGpKyKWgQmnXfaZt9yWaeeTzsTExj1YO/0/DMzGd+b9/vCEH8cu51jsQQkAEmgFRwVgM2gRLQO/zwyatfAyCPgUWAV4A5YAZIAnZwzwPqwApwBfge6B+GyhFYGngXOA+4ABjzaN4i4VUH+BJ4D6iEh/YR2GfAawcgY1BPuFjDwwDo3V38dmcAFXGBBWAceDOEhsBIkNkA5vs4yQSx2Twjp3PY8dig3maL+6trtG4s49UboBTBO2XgbaBvXcg8B/Aq8D7g4PsMPfM0TxXews0+zx937vD78o9UNzbRjk3qpTwjL5yk++s2XqMZtmAC+BnYsoNpzgEuxuAkEzx5YZ6+Y1N85yK19Q2M5w3aZ9ukpibJFhYZX5jntw8+hGYrLH8OWFLBasyEfYvN5rHGRileukyleBuMQSwLsSwwhkrxNsVLl7HTo0TzZ+l6HsGYZoCMCtJNhgMYOZ2jvPoTtfUNlG0d3U2UbVFb36Bya434mWlqCjoDaBKYUMHS2gDW8DB2PEZr6+5BmY8L43k0S1u4yQS+e4ydTpuO1rZAyub/hgg97VHutjkeiaIYyMkL98xrtohlnkXsf/6W2DbxzAm69Qb9Bw8REXpa71d73apioM06IvjtDvdX1xiffpHU1CS+p/8G8z1NamqS9HSOezdX2G+3QQSBusCmYiD0lTD91o1ldKVKtrDIWPYUiGC0xmgNIoxlT5ErLLK7U2b72tJhKa44SpVCLZ8DvgLccLHHF+ax06NUbq3RLG0BEM+cID2dY3enzNpHn9As3UUGamlbIm/4xnwXAiPAx4E2wfchESeaP0v8zDRuMgFAt97g3s0Vtq8t0anWQhgCn0Ytq+Ab0z/sNmPA54fNoet51BT47jEQof/g4V89C0oV+MYStWAwFYU84jYVBq5RBs4j4rqOQ8rz2Kk16GkPETnICmgLfGGJuuhjKr4xxIei/22wAsmu1vZOt01P630JDFaJXHGUur7v+31tDPFIlJd/uMrBiP7tFyCQavT3qPa6VYFNR6nSntZ7jlIY4Hgkwuz1bwH4E5mCXIBLQ5HnAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA3LTI3VDIxOjEwOjMyKzAyOjAw7q6GnwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNy0yN1QyMToxMDozMiswMjowMJ/zPiMAAAAASUVORK5CYII=';
var MAP_MARKER_CIRCLE_GREEN = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gcbFBg6/VhW4AAAA5VJREFUOMullUFoHFUYx3/vzexku8VkdzPrpgpWNJom4Jo0NaSnIkHrJRb1UFAsXmq3KlivJqCHhJ4qsQdtmksVFKQgYkTa0ErxUCMhad1CQrQ0DbaJ291kd91kJrs7M89DZpo0BBT8z2V47/F73/fe9/+ewFem9zCb1T8YDQMtQBuQ8IdzwDQwO9BXXNu8PjX6DQBiK6x/MGoAB4G3gG7ABHR/2gHywDhwDrg40FesboaKLbAm4CPgCBAB8PAeiFwig18L+BL4eKCvmN2YfxB2BkgDEY/1LyJ3kAyZJEMmEbmDYNzfMA0M9w9GkwFHZHoPB2l+6i/Aw6MxFKMntp+u+hRxvQGAZafEROkGlwtXyTuFzdGeAd4f6CtWg7M56KeJh0dzeDfHH32dpNbIxGKGS4WfAWiJNdO763m66lN8fvdrbq7NB9AjwI/AqHg5cywMfAW8GkT24WNp9KrG0NQImfwMjucAoEudlNnKib1HqeoVTs6dZZlSAP0WeEP6pdEdxN4T209Sa2RoaoTJ7HWUUmhCQxMaSikms9cZmhqhSX+YA3X7cG0HJRQ+o0X6dWYGF9BVn+LXxWtk8jPo0mCrdGmQyc8wkf2N7ngHIufiWDWUUCbQJv2i1QEe0nYS1xv4ozB3P83t5HgOvy/fwozEiXhhrIUynuXqSqiE5H9KInArDtZfZWpLFXTfTg5glN1Vlp0SLbFmdKmjlNoWokudp+NPkLOXKNXKCCFwbadmV1fuSd+beYnE8mwmSjd4bleKlNmK41W3SbdKymylq6mdX+5OslqzEEqAJA9MS2DW9yYAlwtXybpLnNh7lM5k+/ruysVVLkIIOpPtfND5NgsrWS7cvrIOW9e4NLRZ7fydZuennrANHBKI0Kpnc8v+k46GPfTufoEno4/zyM4kz5h7eOWpl3iz7TUKayVOTQ4zX76DFBJgVUjRf3zo75nAKRd9o6clkptr85ycO8uBun10xzt4NtG23rvsJc7P/sCF21fI2rkN60m+kIY2FpJyo9v4Bh8GDgUWdG0HkXOJeGEkglKtfP/MhBAB7DuhqfR7p62sRGy4229Bx3yjWxKJHgmhEho5d5kFK4vl2EhkAFtF8pnQVPrd01bWVYponfHvDVYJZbq2o9uLK7i2U/Nvc1wIcU4a2tg7n5SqrlLEjTpevDSK+C9PgBIqUVuqYOdW7gHT0tBm06eKlZCUKCBqGPSMfQ/APy1Xg2v6KIsFAAAAAElFTkSuQmCC';
/* eslint-enable max-len */
var POLYGON_BASE_COLOR = '#3388ff';

var DG_COMPANY_NAME = 'Development Gateway';
var DG_ADDRESS_1 = '1110 Vermont Ave, NW, Suite 500';
var DG_ADDRESS_2 = 'Washington, DC 20005 USA';
var DG_CONTACT_INFO = 'info@developmentgateway.org, Tel: +1.202.572.9200, Fax: +1 202.572.9290';

var LOG_DIR = 'logs';
var LOG_FILE_NAME = 'ampoffline';
var LOG_FILE_EXTENSION = 'log';

// Message constants
// total amount of time the message stays visible
var MESSAGE_TIMEOUT = 10 * 1000;
// when it's this amount of time left, we nofity the user that the message is about to disappear
var MESSAGE_DISAPPEAR_TIMEOUT = MESSAGE_TIMEOUT / 5;
var MESSAGE_CHECK_INTERVAL = 100;
// how long should the enter/leave animation run(ms)
// (if you change this you'll wanna change it in style.css, too)
var MESSAGE_ANIMATION_DURATION = 500;

// this is the internal date format used to store and sync up dates
var INTERNAL_DATE_FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
// currently supported max & min years in AMP, i.e. from 1970-01-01 till 2050-12-31
var MIN_SUPPORTED_YEAR = 1970;
var MAX_SUPPORTED_YEAR = 2050;

var UPDATES_DIR = 'updates';
var CONTENT_DISPOSITION_HEADER = 'Content-Disposition';
var UPDATE_TMP_FILE = 'amp-offline-installer.tmp';

var OTHER_ID = 999999999;
var NR_SYNC_HISTORY_ENTRIES = 20;
var NR_LOG_FILES = 100;
// https://en.wikipedia.org/wiki/ISO_8601#Durations, example: "P1Y2M10DT2H30M"
var OLD_SYNC_LOGS_DURATION_ISO_8601 = 'P6M';
var NR_OLD_SYNC_LOGS_TO_KEEP_MINIMUM = NR_SYNC_HISTORY_ENTRIES;

var MASTER_BRANCH = 'master';
var DEVELOP_BRANCH = 'develop';
var RELEASE_BRANCH_REGEX = /release\//;
var RELEASE_BRANCHES = [MASTER_BRANCH, RELEASE_BRANCH_REGEX];

var DISABLE_CHANGELOGS = 'DISABLE_CHANGELOGS';

var Constants = Object.freeze({
  BASE_REST_URL: BASE_REST_URL,
  CONNECTION_TIMEOUT: CONNECTION_TIMEOUT,
  CONNECTION_FORCED_TIMEOUT: CONNECTION_FORCED_TIMEOUT,
  TIMEOUT_CHECK_INTERVAL: TIMEOUT_CHECK_INTERVAL,
  MAX_RETRY_ATEMPTS: MAX_RETRY_ATEMPTS,
  ERRORS_TO_RETRY: ERRORS_TO_RETRY,
  ERRORS_NO_AMP_SERVER: ERRORS_NO_AMP_SERVER,
  CONNECTIVITY_CHECK_INTERVAL: CONNECTIVITY_CHECK_INTERVAL,
  WORKSPACE_URL: WORKSPACE_URL,
  LOGIN_URL: LOGIN_URL,
  DESKTOP_URL: DESKTOP_URL,
  DESKTOP_CURRENT_URL: DESKTOP_CURRENT_URL,
  SYNCUP_REDIRECT_URL: SYNCUP_REDIRECT_URL,
  SYNCUP_HISTORY_TARGET: SYNCUP_HISTORY_TARGET,
  SYNCUP_SUMMARY_URL: SYNCUP_SUMMARY_URL,
  ACTIVITY_PREVIEW_URL: ACTIVITY_PREVIEW_URL,
  ACTIVITY_EDIT_URL: ACTIVITY_EDIT_URL,
  UPDATE_URL: UPDATE_URL,
  SETUP_URL: SETUP_URL,
  SETTINGS_URL: SETTINGS_URL,
  COLLECTION_USERS: COLLECTION_USERS,
  COLLECTION_WORKPACES: COLLECTION_WORKPACES,
  COLLECTION_TEAMMEMBERS: COLLECTION_TEAMMEMBERS,
  COLLECTION_CLIENT_SETTINGS: COLLECTION_CLIENT_SETTINGS,
  COLLECTION_GLOBAL_SETTINGS: COLLECTION_GLOBAL_SETTINGS,
  COLLECTION_ACTIVITIES: COLLECTION_ACTIVITIES,
  COLLECTION_FIELDS: COLLECTION_FIELDS,
  COLLECTION_POSSIBLE_VALUES: COLLECTION_POSSIBLE_VALUES,
  COLLECTION_SYNCUP_LOG: COLLECTION_SYNCUP_LOG,
  COLLECTION_LANGS: COLLECTION_LANGS,
  COLLECTION_WS_SETTINGS: COLLECTION_WS_SETTINGS,
  COLLECTION_CURRENCY_RATES: COLLECTION_CURRENCY_RATES,
  COLLECTION_FEATURE_MANAGER: COLLECTION_FEATURE_MANAGER,
  COLLECTION_CONTACTS: COLLECTION_CONTACTS,
  COLLECTION_RESOURCES: COLLECTION_RESOURCES,
  COLLECTION_REPOSITORY: COLLECTION_REPOSITORY,
  COLLECTION_GAZETTEER: COLLECTION_GAZETTEER,
  COLLECTION_CALENDARS: COLLECTION_CALENDARS,
  COLLECTION_CHANGESETS: COLLECTION_CHANGESETS,
  GAZETTEER_DISTANCE_DIVIDE: GAZETTEER_DISTANCE_DIVIDE,
  DB_FILE_PREFIX: DB_FILE_PREFIX,
  DB_FILE_EXTENSION: DB_FILE_EXTENSION,
  DB_COMMON_DATASTORE_OPTIONS: DB_COMMON_DATASTORE_OPTIONS,
  DB_AUTOCOMPACT_INTERVAL_MILISECONDS: DB_AUTOCOMPACT_INTERVAL_MILISECONDS,
  DB_DEFAULT_QUERY_LIMIT: DB_DEFAULT_QUERY_LIMIT,
  LANGUAGE_ENGLISH: LANGUAGE_ENGLISH,
  FS_LOCALES_DIRECTORY: FS_LOCALES_DIRECTORY,
  LANGUAGE_MASTER_TRANSLATIONS_FILE: LANGUAGE_MASTER_TRANSLATIONS_FILE,
  LANGUAGE_TRANSLATIONS_FILE: LANGUAGE_TRANSLATIONS_FILE,
  LANGUAGE_NEW_TRANSLATIONS_MUST_SYNC: LANGUAGE_NEW_TRANSLATIONS_MUST_SYNC,
  ASAR_DIR: ASAR_DIR,
  APP_DIRECTORY: APP_DIRECTORY,
  TEST_DIRECTORY: TEST_DIRECTORY,
  STATIC_DIR: STATIC_DIR,
  IMAGES_DIR: IMAGES_DIR,
  DOC_ICONS: DOC_ICONS,
  DB_STATIC_DIR: DB_STATIC_DIR,
  MIGRATIONS_DIR: MIGRATIONS_DIR,
  HASH_ITERATIONS: HASH_ITERATIONS,
  DIGEST_ALGORITHM_SHA1: DIGEST_ALGORITHM_SHA1,
  DIGEST_ALGORITHM_SHA256: DIGEST_ALGORITHM_SHA256,
  ACTIVITY_EDIT: ACTIVITY_EDIT,
  ACTIVITY_VIEW: ACTIVITY_VIEW,
  SYNCUP_FORCE_DAYS: SYNCUP_FORCE_DAYS,
  SYNCUP_BEST_BEFORE_DAYS: SYNCUP_BEST_BEFORE_DAYS,
  SYNCUP_NO_DATE: SYNCUP_NO_DATE,
  SYNCUP_TYPE_TRANSLATIONS: SYNCUP_TYPE_TRANSLATIONS,
  SYNCUP_TYPE_USERS: SYNCUP_TYPE_USERS,
  SYNCUP_TYPE_ASSETS: SYNCUP_TYPE_ASSETS,
  SYNCUP_TYPE_WORKSPACES: SYNCUP_TYPE_WORKSPACES,
  SYNCUP_TYPE_GS: SYNCUP_TYPE_GS,
  SYNCUP_TYPE_EXCHANGE_RATES: SYNCUP_TYPE_EXCHANGE_RATES,
  SYNCUP_TYPE_FEATURE_MANAGER: SYNCUP_TYPE_FEATURE_MANAGER,
  SYNCUP_TYPE_WORKSPACE_MEMBERS: SYNCUP_TYPE_WORKSPACE_MEMBERS,
  SYNCUP_TYPE_ALL_FIELDS: SYNCUP_TYPE_ALL_FIELDS,
  SYNCUP_TYPE_ACTIVITIES_PULL: SYNCUP_TYPE_ACTIVITIES_PULL,
  SYNCUP_TYPE_ACTIVITIES_PUSH: SYNCUP_TYPE_ACTIVITIES_PUSH,
  SYNCUP_TYPE_ACTIVITY_FIELDS: SYNCUP_TYPE_ACTIVITY_FIELDS,
  SYNCUP_TYPE_ACTIVITY_FIELDS_STRUCTURAL_CHANGES: SYNCUP_TYPE_ACTIVITY_FIELDS_STRUCTURAL_CHANGES,
  SYNCUP_TYPE_CONTACTS_PULL: SYNCUP_TYPE_CONTACTS_PULL,
  SYNCUP_TYPE_CONTACTS_PUSH: SYNCUP_TYPE_CONTACTS_PUSH,
  SYNCUP_TYPE_ACTIVITY_POSSIBLE_VALUES: SYNCUP_TYPE_ACTIVITY_POSSIBLE_VALUES,
  SYNCUP_TYPE_CONTACT_FIELDS: SYNCUP_TYPE_CONTACT_FIELDS,
  SYNCUP_TYPE_CONTACT_FIELDS_STRUCTURAL_CHANGES: SYNCUP_TYPE_CONTACT_FIELDS_STRUCTURAL_CHANGES,
  SYNCUP_TYPE_CONTACT_POSSIBLE_VALUES: SYNCUP_TYPE_CONTACT_POSSIBLE_VALUES,
  SYNCUP_TYPE_RESOURCES_PULL: SYNCUP_TYPE_RESOURCES_PULL,
  SYNCUP_TYPE_RESOURCES_PUSH: SYNCUP_TYPE_RESOURCES_PUSH,
  SYNCUP_TYPE_RESOURCE_FIELDS: SYNCUP_TYPE_RESOURCE_FIELDS,
  SYNCUP_TYPE_RESOURCE_FIELDS_STRUCTURAL_CHANGES: SYNCUP_TYPE_RESOURCE_FIELDS_STRUCTURAL_CHANGES,
  SYNCUP_TYPE_RESOURCE_POSSIBLE_VALUES: SYNCUP_TYPE_RESOURCE_POSSIBLE_VALUES,
  SYNCUP_TYPE_COMMON_POSSIBLE_VALUES: SYNCUP_TYPE_COMMON_POSSIBLE_VALUES,
  SYNCUP_TYPE_WORKSPACE_SETTINGS: SYNCUP_TYPE_WORKSPACE_SETTINGS,
  SYNCUP_TYPE_MAP_TILES: SYNCUP_TYPE_MAP_TILES,
  SYNCUP_TYPE_GAZETTEER: SYNCUP_TYPE_GAZETTEER,
  SYNCUP_TYPE_CALENDARS: SYNCUP_TYPE_CALENDARS,
  SYNCUP_STATUS_SUCCESS: SYNCUP_STATUS_SUCCESS,
  SYNCUP_STATUS_FAIL: SYNCUP_STATUS_FAIL,
  SYNCUP_STATUS_PARTIAL: SYNCUP_STATUS_PARTIAL,
  SYNCUP_STATUS_CANCELED: SYNCUP_STATUS_CANCELED,
  SYNCUP_SYNC_REQUESTED_AT: SYNCUP_SYNC_REQUESTED_AT,
  SYNCUP_SYNC_REQUESTED_BY: SYNCUP_SYNC_REQUESTED_BY,
  SYNCUP_DATETIME_FIELD: SYNCUP_DATETIME_FIELD,
  SYNCUP_DIFF_LEFTOVER: SYNCUP_DIFF_LEFTOVER,
  SYNCUP_DEPENDENCY_CHECK_INTERVAL: SYNCUP_DEPENDENCY_CHECK_INTERVAL,
  SYNCUP_DETAILS_SYNCED: SYNCUP_DETAILS_SYNCED,
  SYNCUP_DETAILS_UNSYNCED: SYNCUP_DETAILS_UNSYNCED,
  SYNCUP_RESOURCE_PULL_BATCH_SIZE: SYNCUP_RESOURCE_PULL_BATCH_SIZE,
  SYNCUP_ACTIVITIES_PULL_BATCH_SIZE: SYNCUP_ACTIVITIES_PULL_BATCH_SIZE,
  SYNCUP_CONTACTS_PULL_BATCH_SIZE: SYNCUP_CONTACTS_PULL_BATCH_SIZE,
  ACTIVITY_STATUS_DRAFT: ACTIVITY_STATUS_DRAFT,
  ACTIVITY_STATUS_UNVALIDATED: ACTIVITY_STATUS_UNVALIDATED,
  ACTIVITY_STATUS_VALIDATED: ACTIVITY_STATUS_VALIDATED,
  CURRENCY_HOUR: CURRENCY_HOUR,
  DEFAULT_CURRENCY: DEFAULT_CURRENCY,
  RATE_SAME_CURRENCY: RATE_SAME_CURRENCY,
  RATE_CURRENCY_NOT_FOUND: RATE_CURRENCY_NOT_FOUND,
  CURRENCY_PAIR: CURRENCY_PAIR,
  VERSION_PATTERN: VERSION_PATTERN,
  VERSION_PATTERN_GROUPS_TO_EXTRACT: VERSION_PATTERN_GROUPS_TO_EXTRACT,
  AMP_COUNTRY_LOGO: AMP_COUNTRY_LOGO,
  ASSETS_DIRECTORY: ASSETS_DIRECTORY,
  BASE_64_PNG_PREFIX: BASE_64_PNG_PREFIX,
  TRANSPARENT_FLAG: TRANSPARENT_FLAG,
  HELP_PDF_FILENAME: HELP_PDF_FILENAME,
  HELP_DIR: HELP_DIR,
  ENDS_WITH_PUNCTUATION_REGEX: ENDS_WITH_PUNCTUATION_REGEX,
  MAP_TILES_DIR: MAP_TILES_DIR,
  TILES_ZIP_FILE: TILES_ZIP_FILE,
  MAP_MARKER_IMAGE: MAP_MARKER_IMAGE,
  MAP_MARKER_SHADOW: MAP_MARKER_SHADOW,
  MAP_MARKER_CIRCLE_RED: MAP_MARKER_CIRCLE_RED,
  MAP_MARKER_CIRCLE_GREEN: MAP_MARKER_CIRCLE_GREEN,
  POLYGON_BASE_COLOR: POLYGON_BASE_COLOR,
  DG_COMPANY_NAME: DG_COMPANY_NAME,
  DG_ADDRESS_1: DG_ADDRESS_1,
  DG_ADDRESS_2: DG_ADDRESS_2,
  DG_CONTACT_INFO: DG_CONTACT_INFO,
  LOG_DIR: LOG_DIR,
  LOG_FILE_NAME: LOG_FILE_NAME,
  LOG_FILE_EXTENSION: LOG_FILE_EXTENSION,
  MESSAGE_TIMEOUT: MESSAGE_TIMEOUT,
  MESSAGE_DISAPPEAR_TIMEOUT: MESSAGE_DISAPPEAR_TIMEOUT,
  MESSAGE_CHECK_INTERVAL: MESSAGE_CHECK_INTERVAL,
  MESSAGE_ANIMATION_DURATION: MESSAGE_ANIMATION_DURATION,
  INTERNAL_DATE_FORMAT: INTERNAL_DATE_FORMAT,
  MIN_SUPPORTED_YEAR: MIN_SUPPORTED_YEAR,
  MAX_SUPPORTED_YEAR: MAX_SUPPORTED_YEAR,
  UPDATES_DIR: UPDATES_DIR,
  CONTENT_DISPOSITION_HEADER: CONTENT_DISPOSITION_HEADER,
  UPDATE_TMP_FILE: UPDATE_TMP_FILE,
  OTHER_ID: OTHER_ID,
  NR_SYNC_HISTORY_ENTRIES: NR_SYNC_HISTORY_ENTRIES,
  NR_LOG_FILES: NR_LOG_FILES,
  OLD_SYNC_LOGS_DURATION_ISO_8601: OLD_SYNC_LOGS_DURATION_ISO_8601,
  NR_OLD_SYNC_LOGS_TO_KEEP_MINIMUM: NR_OLD_SYNC_LOGS_TO_KEEP_MINIMUM,
  MASTER_BRANCH: MASTER_BRANCH,
  DEVELOP_BRANCH: DEVELOP_BRANCH,
  RELEASE_BRANCH_REGEX: RELEASE_BRANCH_REGEX,
  RELEASE_BRANCHES: RELEASE_BRANCHES,
  DISABLE_CHANGELOGS: DISABLE_CHANGELOGS
});

/* eslint-disable max-len */

/**
 * @author Nadejda Mandrescu
 */

var PUBLIC_VIEW_CHANGE_PASSWORD = '/PUBLIC VIEW/Login - User Management/Change Password';
var PUBLIC_VIEW_TROUBLE_SIGN_IN = '/PUBLIC VIEW/Login - User Management/Trouble signing in';
var ACTIVITY_DELIVERY_RATE = '/PROJECT MANAGEMENT/Funding/Funding Information/Delivery rate';
var ACTIVITY_PROJECT_ID_AND_PLANNING = '/PROJECT MANAGEMENT/Project ID and Planning';
var ACTIVITY_DURATION_OF_PROJECT = '/PROJECT MANAGEMENT/Project ID and Planning/Planning/Duration of Project';
var ACTIVITY_TEAM_LEADER = '/PROJECT MANAGEMENT/Project ID and Planning/Identification/Data Team Leader';
var ACTIVITY_SAME_AS_PROPOSED_START_DATE = '/Activity Form/Planning/Actual Start Date/Same As Proposed Start Date';
var ACTIVITY_SAME_AS_PROPOSED_APPROVAL_DATE = '/Activity Form/Planning/Actual Approval Date/Same As Proposed Approval Date';
var ACTIVITY_IDENTIFICATION = '/Activity Form/Identification';
var ACTIVITY_LAST_UPDATED_BY = '/Activity Form/Identification/Activity Last Updated by';
var ACTIVITY_LAST_UPDATED_ON = '/Activity Form/Identification/Activity Updated On';
var ACTIVITY_FUNDING = '/Activity Form/Funding';
var AF_FUNDING_FUNDINGGROUP_FUNDINGITEM = ACTIVITY_FUNDING + '/Funding Group/Funding Item';
var ACTIVITY_SECTORS = '/Activity Form/Sectors';
var ACTIVITY_PRIMARY_SECTORS = '/Activity Form/Sectors/Primary Sectors';
var ACTIVITY_SECONDARY_SECTORS = '/Activity Form/Sectors/Secondary Sectors';

var ACTIVITY_STRUCTURES = '/Activity Form/Structures';
var ACTIVITY_STRUCTURES_ADD_STRUCTURE = ACTIVITY_STRUCTURES + '/Add Structure';

var ACTIVITY_ORGANIZATIONS = '/Activity Form/Organizations';
var ACTIVITY_ORGANIZATIONS_DONOR_ORGANIZATION = ACTIVITY_ORGANIZATIONS + '/Donor Organization';
var ACTIVITY_ORGANIZATIONS_BENEFICIARY_AGENCY = ACTIVITY_ORGANIZATIONS + '/Beneficiary Agency';
var ACTIVITY_ORGANIZATIONS_CONTRACTING_AGENCY = ACTIVITY_ORGANIZATIONS + '/Contracting Agency';
var ACTIVITY_ORGANIZATIONS_EXECUTING_AGENCY = ACTIVITY_ORGANIZATIONS + '/Executing Agency';
var ACTIVITY_ORGANIZATIONS_IMPLEMENTING_AGENCY = ACTIVITY_ORGANIZATIONS + '/Implementing Agency';
var ACTIVITY_ORGANIZATIONS_REGIONAL_GROUP = ACTIVITY_ORGANIZATIONS + '/Regional Group';
var ACTIVITY_ORGANIZATIONS_RELATED_GOVERNMENT_ORGANIZATION = ACTIVITY_ORGANIZATIONS + '/Related Government Organization';
var ACTIVITY_ORGANIZATIONS_SECTOR_GROUP = ACTIVITY_ORGANIZATIONS + '/Sector Group';

var ADD_FUNDING_AUTO = 'Add Funding Item Automatically';
var ACTIVITY_ORGANIZATIONS_BENEFICIARY_AGENCY_ADD_FUNDING_AUTO = ACTIVITY_ORGANIZATIONS_BENEFICIARY_AGENCY + '/' + ADD_FUNDING_AUTO;
var ACTIVITY_ORGANIZATIONS_CONTRACTING_AGENCY_ADD_FUNDING_AUTO = ACTIVITY_ORGANIZATIONS_CONTRACTING_AGENCY + '/' + ADD_FUNDING_AUTO;
var ACTIVITY_ORGANIZATIONS_DONOR_ORGANIZATION_ADD_FUNDING_AUTO = ACTIVITY_ORGANIZATIONS_DONOR_ORGANIZATION + '/' + ADD_FUNDING_AUTO;
var ACTIVITY_ORGANIZATIONS_EXECUTING_AGENCY_ADD_FUNDING_AUTO = ACTIVITY_ORGANIZATIONS_EXECUTING_AGENCY + '/' + ADD_FUNDING_AUTO;
var ACTIVITY_ORGANIZATIONS_IMPLEMENTING_AGENCY_ADD_FUNDING_AUTO = ACTIVITY_ORGANIZATIONS_IMPLEMENTING_AGENCY + '/' + ADD_FUNDING_AUTO;
var ACTIVITY_ORGANIZATIONS_REGIONAL_GROUP_ADD_FUNDING_AUTO = ACTIVITY_ORGANIZATIONS_REGIONAL_GROUP + '/' + ADD_FUNDING_AUTO;
var ACTIVITY_ORGANIZATIONS_RESPONSIBLE_ORGANIZATION_ADD_FUNDING_AUTO = ACTIVITY_ORGANIZATIONS_RELATED_GOVERNMENT_ORGANIZATION + '/' + ADD_FUNDING_AUTO;
var ACTIVITY_ORGANIZATIONS_SECTOR_GROUP_ADD_FUNDING_AUTO = ACTIVITY_ORGANIZATIONS_SECTOR_GROUP + '/' + ADD_FUNDING_AUTO;

var ACTIVITY_FUNDING_SEARCH = ACTIVITY_FUNDING + '/Search Funding Organizations';
var ACTIVITY_FUNDING_SEARCH_ORGANIZATION = ACTIVITY_FUNDING_SEARCH + '/Search Organizations';
var ACTIVITY_FUNDING_SELECT_ORG_TYPE = ACTIVITY_FUNDING_SEARCH + '/Select Organization Type';

var ACTIVITY_PROGRAM = '/Activity Form/Program';
var ACTIVITY_PLANNING = '/Activity Form/Planning';

var ACTIVITY_CONTACT = '/Activity Form/Contacts';
var ACTIVITY_DOCUMENTS_ADD_DOCUMENT = '/Activity Form/Related Documents/Add New Document';
var ACTIVITY_DOCUMENTS_ADD_WEBLINK = '/Activity Form/Related Documents/Add New Web Link';

var ACTIVITY_ISSUES_ADD_ISSUE = '/Activity Form/Issues Section/Add Issue';
var ACTIVITY_ISSUES_DELETE_ISSUE = '/Activity Form/Issues Section/Issue/Delete Item';
var ACTIVITY_ISSUES_ADD_MEASURE = '/Activity Form/Issues Section/Issue/Add Item';
var ACTIVITY_ISSUES_DELETE_MEASURE = '/Activity Form/Issues Section/Issue/Measure/Delete Item';
var ACTIVITY_ISSUES_ADD_ACTOR = '/Activity Form/Issues Section/Issue/Measure/Add Item';
var ACTIVITY_ISSUES_DELETE_ACTOR = '/Activity Form/Issues Section/Issue/Measure/Actor/Delete Item';

var ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Implementing Agency';
var ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Contracting Agency';
var ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Beneficiary Agency';
var ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Donor Organization';
var ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Executing Agency';
var ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Regional Group';
var ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Responsible Organization';
var ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Sector Group';

var ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Implementing Agency';
var ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Contracting Agency';
var ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Beneficiary Agency';
var ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Donor Organization';
var ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Executing Agency';
var ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Regional Group';
var ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Responsible Organization';
var ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Sector Group';

var ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Implementing Agency';
var ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Contracting Agency';
var ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Beneficiary Agency';
var ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Donor Organization';
var ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Executing Agency';
var ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Regional Group';
var ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Responsible Organization';
var ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Sector Group';

var MTEF_PROJECTIONS = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/MTEF Projections';
var MTEF_PROJECTIONS_AMOUNT = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/MTEF Projections/MTEF Projections Table/Amount';
var MTEF_PROJECTIONS_CURRENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/MTEF Projections/MTEF Projections Table/Currency';
var MTEF_PROJECTIONS_PROJECTION = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/MTEF Projections/MTEF Projections Table/MTEF Projection';
var MTEF_PROJECTIONS_DATE = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/MTEF Projections/MTEF Projections Table/Projection Date';

var FeatureManagerConstants = Object.freeze({
  PUBLIC_VIEW_CHANGE_PASSWORD: PUBLIC_VIEW_CHANGE_PASSWORD,
  PUBLIC_VIEW_TROUBLE_SIGN_IN: PUBLIC_VIEW_TROUBLE_SIGN_IN,
  ACTIVITY_DELIVERY_RATE: ACTIVITY_DELIVERY_RATE,
  ACTIVITY_PROJECT_ID_AND_PLANNING: ACTIVITY_PROJECT_ID_AND_PLANNING,
  ACTIVITY_DURATION_OF_PROJECT: ACTIVITY_DURATION_OF_PROJECT,
  ACTIVITY_TEAM_LEADER: ACTIVITY_TEAM_LEADER,
  ACTIVITY_SAME_AS_PROPOSED_START_DATE: ACTIVITY_SAME_AS_PROPOSED_START_DATE,
  ACTIVITY_SAME_AS_PROPOSED_APPROVAL_DATE: ACTIVITY_SAME_AS_PROPOSED_APPROVAL_DATE,
  ACTIVITY_IDENTIFICATION: ACTIVITY_IDENTIFICATION,
  ACTIVITY_LAST_UPDATED_BY: ACTIVITY_LAST_UPDATED_BY,
  ACTIVITY_LAST_UPDATED_ON: ACTIVITY_LAST_UPDATED_ON,
  ACTIVITY_SECTORS: ACTIVITY_SECTORS,
  ACTIVITY_PRIMARY_SECTORS: ACTIVITY_PRIMARY_SECTORS,
  ACTIVITY_SECONDARY_SECTORS: ACTIVITY_SECONDARY_SECTORS,
  ACTIVITY_STRUCTURES: ACTIVITY_STRUCTURES,
  ACTIVITY_STRUCTURES_ADD_STRUCTURE: ACTIVITY_STRUCTURES_ADD_STRUCTURE,
  ACTIVITY_ORGANIZATIONS: ACTIVITY_ORGANIZATIONS,
  ACTIVITY_ORGANIZATIONS_DONOR_ORGANIZATION: ACTIVITY_ORGANIZATIONS_DONOR_ORGANIZATION,
  ACTIVITY_ORGANIZATIONS_BENEFICIARY_AGENCY: ACTIVITY_ORGANIZATIONS_BENEFICIARY_AGENCY,
  ACTIVITY_ORGANIZATIONS_CONTRACTING_AGENCY: ACTIVITY_ORGANIZATIONS_CONTRACTING_AGENCY,
  ACTIVITY_ORGANIZATIONS_EXECUTING_AGENCY: ACTIVITY_ORGANIZATIONS_EXECUTING_AGENCY,
  ACTIVITY_ORGANIZATIONS_IMPLEMENTING_AGENCY: ACTIVITY_ORGANIZATIONS_IMPLEMENTING_AGENCY,
  ACTIVITY_ORGANIZATIONS_REGIONAL_GROUP: ACTIVITY_ORGANIZATIONS_REGIONAL_GROUP,
  ACTIVITY_ORGANIZATIONS_RELATED_GOVERNMENT_ORGANIZATION: ACTIVITY_ORGANIZATIONS_RELATED_GOVERNMENT_ORGANIZATION,
  ACTIVITY_ORGANIZATIONS_SECTOR_GROUP: ACTIVITY_ORGANIZATIONS_SECTOR_GROUP,
  ACTIVITY_ORGANIZATIONS_BENEFICIARY_AGENCY_ADD_FUNDING_AUTO: ACTIVITY_ORGANIZATIONS_BENEFICIARY_AGENCY_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_CONTRACTING_AGENCY_ADD_FUNDING_AUTO: ACTIVITY_ORGANIZATIONS_CONTRACTING_AGENCY_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_DONOR_ORGANIZATION_ADD_FUNDING_AUTO: ACTIVITY_ORGANIZATIONS_DONOR_ORGANIZATION_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_EXECUTING_AGENCY_ADD_FUNDING_AUTO: ACTIVITY_ORGANIZATIONS_EXECUTING_AGENCY_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_IMPLEMENTING_AGENCY_ADD_FUNDING_AUTO: ACTIVITY_ORGANIZATIONS_IMPLEMENTING_AGENCY_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_REGIONAL_GROUP_ADD_FUNDING_AUTO: ACTIVITY_ORGANIZATIONS_REGIONAL_GROUP_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_RESPONSIBLE_ORGANIZATION_ADD_FUNDING_AUTO: ACTIVITY_ORGANIZATIONS_RESPONSIBLE_ORGANIZATION_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_SECTOR_GROUP_ADD_FUNDING_AUTO: ACTIVITY_ORGANIZATIONS_SECTOR_GROUP_ADD_FUNDING_AUTO,
  ACTIVITY_FUNDING_SEARCH: ACTIVITY_FUNDING_SEARCH,
  ACTIVITY_FUNDING_SEARCH_ORGANIZATION: ACTIVITY_FUNDING_SEARCH_ORGANIZATION,
  ACTIVITY_FUNDING_SELECT_ORG_TYPE: ACTIVITY_FUNDING_SELECT_ORG_TYPE,
  ACTIVITY_PROGRAM: ACTIVITY_PROGRAM,
  ACTIVITY_PLANNING: ACTIVITY_PLANNING,
  ACTIVITY_CONTACT: ACTIVITY_CONTACT,
  ACTIVITY_DOCUMENTS_ADD_DOCUMENT: ACTIVITY_DOCUMENTS_ADD_DOCUMENT,
  ACTIVITY_DOCUMENTS_ADD_WEBLINK: ACTIVITY_DOCUMENTS_ADD_WEBLINK,
  ACTIVITY_ISSUES_ADD_ISSUE: ACTIVITY_ISSUES_ADD_ISSUE,
  ACTIVITY_ISSUES_DELETE_ISSUE: ACTIVITY_ISSUES_DELETE_ISSUE,
  ACTIVITY_ISSUES_ADD_MEASURE: ACTIVITY_ISSUES_ADD_MEASURE,
  ACTIVITY_ISSUES_DELETE_MEASURE: ACTIVITY_ISSUES_DELETE_MEASURE,
  ACTIVITY_ISSUES_ADD_ACTOR: ACTIVITY_ISSUES_ADD_ACTOR,
  ACTIVITY_ISSUES_DELETE_ACTOR: ACTIVITY_ISSUES_DELETE_ACTOR,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY: ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY: ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY: ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION: ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY: ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP: ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION: ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP: ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY: ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY: ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY: ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION: ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY: ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP: ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION: ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP: ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY: ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY: ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY: ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION: ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY: ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP: ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION: ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP: ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP,
  MTEF_PROJECTIONS: MTEF_PROJECTIONS,
  MTEF_PROJECTIONS_AMOUNT: MTEF_PROJECTIONS_AMOUNT,
  MTEF_PROJECTIONS_CURRENCY: MTEF_PROJECTIONS_CURRENCY,
  MTEF_PROJECTIONS_PROJECTION: MTEF_PROJECTIONS_PROJECTION,
  MTEF_PROJECTIONS_DATE: MTEF_PROJECTIONS_DATE
});

var UIUtils = function () {
  function UIUtils() {
    classCallCheck(this, UIUtils);
  }

  createClass(UIUtils, null, [{
    key: 'stringToId',
    value: function stringToId(string) {
      string = string || '';
      var hash = 5381;
      for (var i = string.length - 1; i >= 0; i--) {
        /* eslint-disable no-bitwise */
        hash = hash * 33 ^ string.charCodeAt(i);
      }
      return hash >>> 0;
      /* eslint-enable no-bitwise */
    }

    /**
     * Generates a unique id for each call, over the same string
     * @param string
     * @return {string}
     */

  }, {
    key: 'stringToUniqueId',
    value: function stringToUniqueId(string) {
      return this.stringToId(string) + '-' + Date.now() + '-' + Math.random().toString().substring(2);
    }
  }, {
    key: 'numberRandom',
    value: function numberRandom() {
      return Math.trunc(Math.random() * 1000000);
    }
  }, {
    key: 'capitalize',
    value: function capitalize(text) {
      return text.replace(/(?:^|\s)\S/g, function (char) {
        return char.toUpperCase();
      });
    }
  }, {
    key: 'cloneDeep',
    value: function cloneDeep(obj) {
      return JSON.parse(JSON.stringify(obj));
    }
  }]);
  return UIUtils;
}();

/**
 * @author Nadejda Mandrescu
 */

// Activity fields
var ACTIVITY_BUDGET = 'activity_budget';
var ACTIVITY_STATUS = 'activity_status';
var STATUS_REASON = 'status_reason';
var FINANCIAL_INSTRUMENT = 'financial_instrument';
var TYPE_OF_IMPLEMENTATION = 'type_of_implementation';
var OBJECTIVE = 'objective';
var RESULTS = 'results';
var BUDGET_CODE_PROJECT_ID = 'budget_code_project_id';
var ACTUAL_APPROVAL_DATE = 'actual_approval_date';
var FUNDINGS = 'fundings';
var FUNDING_DONOR_ORG_ID = 'donor_organization_id';
var IS_DRAFT = 'is_draft';
var ORG_ROLE_ORG_ID = 'organization';
var ADDITIONAL_INFO = 'additional_info';
var PRIMARY_SECTORS = 'primary_sectors';
var SECONDARY_SECTORS = 'secondary_sectors';
var TERTIARY_SECTORS = 'tertiary_sectors';
var TAG_SECTORS = 'tag_sectors';
var SECTOR = 'sector';
var SECTOR_PERCENTAGE = 'sector_percentage';
var FINANCING_INSTRUMENT = 'financing_instrument';
var MODALITIES = 'modalities';
var LINE_MINISTRY_RANK = 'line_ministry_rank';
var GOVERNMENT_AGREEMENT_NUMBER = 'government_agreement_number';
var FUNDING_STATUS = 'funding_status';
var LOCATIONS = 'locations';
var LOCATION = 'location';
var LOCATION_PERCENTAGE = 'location_percentage';
var IMPLEMENTATION_LOCATION = 'implementation_location';
var IMPLEMENTATION_LEVEL = 'implementation_level';
var APPROVAL_STATUS = 'approval_status';
var APPROVED_BY = 'approved_by';
var APPROVAL_DATE = 'approval_date';
var TYPE_OF_ASSISTANCE = 'type_of_assistance';
var EXPENDITURE_CLASS = 'expenditure_class';
var FUNDING_DETAILS = 'funding_details';
var MODE_OF_PAYMENT = 'mode_of_payment';
var FUNDING_CLASSIFICATION_DATE = 'funding_classification_date';
var AGREEMENT = 'agreement';
var DONOR_OBJECTIVE = 'donor_objective';
var CONDITIONS = 'conditions';
var AGREEMENT_CODE = 'code';
var AGREEMENT_TITLE = 'title';
var PROJECT_CATEGORY = 'project_category';
var PROJECT_IMPLEMENTING_UNIT = 'project_implementing_unit';
var ORGANIZATION = 'organization';
var PERCENTAGE = 'percentage';
var AMP_ORGANIZATION_ROLE_ID = 'amp_organization_role_id';
var ROLE = 'role';
var EXECUTING_AGENCY = 'executing_agency';
var CONTRACTING_AGENCY = 'contracting_agency';
var BENEFICIARY_AGENCY = 'beneficiary_agency';
var IMPLEMENTING_AGENCY = 'implementing_agency';
var RESPONSIBLE_ORGANIZATION = 'responsible_organization';
var DONOR_ORGANIZATION = 'donor_organization';
var REGIONAL_GROUP = 'regional_group';
var SECTOR_GROUP = 'sector_group';
var BUDGETS = 'budgets';
var BUDGET_CODE = 'budget_code';
var BUDGET_ORGANIZATION_CODE = 'budget_organization_code';
var ARCHIVED = 'archived';
var TRANSACTION_DATE = 'transaction_date';
var TRANSACTION_TYPE = 'transaction_type';
var COMMITMENTS = 'commitments';
var DISBURSEMENTS = 'disbursements';
var EXPENDITURES = 'expenditures';
var ESTIMATED_DISBURSEMENTS = 'estimated_disbursements';
var TRANSACTION_AMOUNT = 'transaction_amount';
var ADJUSTMENT_TYPE = 'adjustment_type';
var ACTUAL_START_DATE = 'actual_start_date';
var PROPOSED_START_DATE = 'proposed_start_date';
var ACTUAL_COMPLETION_DATE = 'actual_completion_date';
var CONTRACTING_DATE = 'contracting_date';
var DISBURSEMENT_DATE = 'disbursement_date';
var PROPOSED_APPROVAL_DATE = 'proposed_approval_date';
var ORIGINAL_COMPLETION_DATE = 'original_completion_date';
var PROPOSED_COMPLETION_DATE = 'proposed_completion_date';
var FINAL_DATE_FOR_DISBURSEMENTS = 'final_date_for_disbursements';
var FINAL_DATE_FOR_CONTRACTING = 'final_date_for_contracting';
var EFFECTIVE_FUNDING_DATE = 'effective_funding_date';
var FUNDING_CLOSING_DATE = 'funding_closing_date';
var RATIFICATION_DATE = 'ratification_date';
var MATURITY = 'maturity';
var LAST_AUDIT_DATE = 'last_audit_date';
var SIGNATURE_DATE = 'signature_date';
var HUMANITARIAN_AID = 'humanitarian_aid';
var DISASTER_RESPONSE = 'disaster_response';
var PROGRAM = 'program';
var PROGRAM_PERCENTAGE = 'program_percentage';
var PROGRAM_SETTINGS = 'program_settings';
var NATIONAL_PLAN_OBJECTIVE = 'national_plan_objective';
var PRIMARY_PROGRAMS = 'primary_programs';
var SECONDARY_PROGRAMS = 'secondary_programs';
var TERTIAR_PROGRAMS = 'tertiary_programs';
var GOVERNMENT_APPROVAL_PROCEDURES = 'government_approval_procedures';
var JOINT_CRITERIA = 'joint_criteria';
var TEAM = 'team';
var REJECTED_ID = 'rejectedId';
var INTERNAL_ID = 'internal_id';
var AMP_ID = 'amp_id';
var PROJECT_TITLE = 'project_title';
var DESCRIPTION = 'description';
var MODIFIED_BY = 'modified_by';
var MODIFIED_ON = 'update_date';
var CREATED_BY = 'created_by';
var CREATED_ON = 'creation_date';
var LAST_IMPORTED_BY = 'last_imported_by';
var CLIENT_CHANGE_ID = 'client-change-id';
var CLIENT_CREATED_ON = 'client-created-on';
var CLIENT_UPDATED_ON = 'client-updated-on';
var IS_PUSHED = 'is-pushed';
var ACTIVITY_GROUP = 'activity_group';
var VERSION = 'version';
var PROJECT_COMMENTS = 'project_comments';
var LESSONS_LEARNED = 'lessons_learned';
var PROJECT_IMPACT = 'project_impact';
var ACTIVITY_SUMMARY = 'activity_summary';
var CONDITIONALITIES = 'conditionalities';
var PROJECT_MANAGEMENT = 'project_management';
var A_C_CHAPTER = 'a_c_chapter';
var CRIS_NUMBER = 'cris_number';
var IATI_IDENTIFIER = 'iati_identifier';
var ACTIVITY_INTERNAL_IDS = 'activity_internal_ids';
var HIERARCHICAL_VALUE = 'hierarchical_value';
var HIERARCHICAL_VALUE_PARTS = 'hierarchical_value_parts';
var HIERARCHICAL_VALUE_DEPTH = 'hierarchical_value_depth';
var PPC_AMOUNT = 'ppc_amount';
var RPC_AMOUNT = 'rpc_amount';
var PPC_ANNUAL_BUDGETS = 'ppc_annual_budgets';
var AMOUNT = 'amount';
var CURRENCY = 'currency';
var FUNDING_DATE = 'funding_date';
var COMPONENTS = 'components';
var TOTAL_NUMBER_OF_FUNDING_SOURCES = 'total_number_of_funding_sources';
var SOURCE_ROLE = 'source_role';
var AMP_FUNDING_ID = 'funding_id';
var ISSUES = 'issues';
var ISSUE_DATE = 'issue_date';
var ISSUE_NAME = 'name';
var MEASURES = 'measures';
var MEASURE_NAME = 'name';
var MEASURE_DATE = 'measure_date';
var ACTORS = 'actors';
var ACTOR_NAME = 'name';
var STRUCTURES = 'structures';
var STRUCTURES_TITLE = 'title';
var STRUCTURES_DESCRIPTION = 'description';
var STRUCTURES_LATITUDE = 'latitude';
var STRUCTURES_LONGITUDE = 'longitude';
var STRUCTURES_COLOR = 'structure_color';
var STRUCTURES_LAT = 'lat';
var STRUCTURES_LNG = 'lng';
var STRUCTURES_SHAPE = 'shape';
var STRUCTURES_POINT = 'Point';
var STRUCTURES_POLYGON = 'Polygon';
var STRUCTURES_POLYLINE = 'Polyline';
var STRUCTURES_COORDINATES = 'coordinates';
var COMPONENT_TYPE = 'component_type';
var COMPONENT_TITLE = 'component_title';
var COMPONENT_FUNDING = 'funding';
var COMPONENT_DESCRIPTION = 'description';
var COMPONENT_ORGANIZATION = 'component_organization';
var FUNDING_AMOUNT_ID = 'amp_funding_amount_id';
var EXTRA_INFO = 'extra_info';
var VALUE = 'value';
var ACRONYM = 'acronym';
var TYPE_OF_COOPERATION = 'type_of_cooperation';
var ANNUAL_PROJECT_BUDGET_ID = 'annual_project_budget_id';
var TYPE = 'type';
var YEAR = 'year';
var GROUP_VERSIONED_FUNDING = 'group_versioned_funding';
var ACTIVE_LIST = 'active_list';
var ACTIVE = 'active';
var DELEGATED_COOPERATION = 'delegated_cooperation';
var DELEGATED_PARTNER = 'delegated_partner';
var FINANCING_ID = 'financing_id';
var DISBURSEMENT_ORDER_ID = 'disbursement_order_id';
var PLEDGE = 'pledge';
var CAPITAL_SPENDING_PERCENTAGE = 'capital_spending_percentage';
var REPORTING_DATE = 'reporting_date';
var RECIPIENT_ROLE = 'recipient_role';
var RECIPIENT_ORGANIZATION = 'recipient_organization';
var TEMPORAL_ID = '_temporal_id';
var MINISTRY_CODE = 'ministry_code';
var PROJECT_CODE = 'project_code';
var FY = 'fy';
var INDIRECT_ON_BUDGET = 'indirect_on_budget';
var IMPLEMENTATION_LEVELS_EXTRA_INFO = 'implementation-levels';
var IMPLEMENTATION_LOCATION_EXTRA_INFO = 'implementation_location_name';
var DONOR_CONTACT = 'donor_contact_information';
var PROJECT_COORDINATOR_CONTACT = 'project_coordinator_contact_information';
var SECTOR_MINISTRY_CONTACT = 'sector_ministry_contact_information';
var MOFED_CONTACT = 'mofed_contact_information';
var IMPLEMENTING_EXECUTING_AGENCY_CONTACT = 'implementing/executing_agency_contact_information';
var CONTACT = 'contact';
var ORGANIZATION_GROUP = 'organization_group';
var FIXED_EXCHANGE_RATE = 'fixed_exchange_rate';
var PRIMARY_CONTACT = 'mark_as_primary';
var ACTIVITY_DOCUMENTS = 'activity_documents';
var DOCUMENT_TYPE = 'document_type';
var ISO2 = 'iso2';
var MTEF_PROJECTIONS$1 = 'mtef_projections';
var PROJECTION = 'projection';
var PIPELINE = 'pipeline';
var PROJECTION_DATE = 'projection_date';

// Activity labels (usually those that don't come as part of Fields Def EP)
var SAME_AS_PROPOSED_START_DATE_LABEL = 'Same as Proposed Start Date';
var SAME_AS_PROPOSED_APPROVAL_DATE_LABEL = 'Same as Proposed Approval Date';

// Activity validation rules
var DEPENDENCY_IMPLEMENTATION_LEVEL_PRESENT = 'implementation_level_present';
var DEPENDENCY_IMPLEMENTATION_LEVEL_VALID = 'implementation_level_valid';
var DEPENDENCY_IMPLEMENTATION_LOCATION_PRESENT = 'implementation_location_present';
var DEPENDENCY_IMPLEMENTATION_LOCATION_VALID = 'implementation_location_valid';
var DEPENDENCY_PROJECT_CODE_ON_BUDGET = 'project_code_on_budget';
var DEPENDENCY_ON_BUDGET = 'on_budget';
var DEPENDENCY_TRANSACTION_PRESENT = 'transaction_present';
var DEPENDENCY_COMPONENT_FUNDING_ORG_VALID = 'organization_present';

/** IDs for AP sections **/
var AP_SECTION_IDS = [{ key: 'APIdentification', hash: '#APIdentification', value: 'Identification', fmPath: FeatureManagerConstants.ACTIVITY_IDENTIFICATION }, { key: 'APInternalIds', hash: '#APInternalIds', value: 'Agency Internal IDs', sectionPath: ACTIVITY_INTERNAL_IDS }, { key: 'APPlanning', hash: '#APPlanning', value: 'Planning', fmPath: FeatureManagerConstants.ACTIVITY_PLANNING }, { key: 'APLocation', hash: '#APLocation', value: 'Location', sectionPath: LOCATIONS }, { key: 'APProgram', hash: '#APProgram', value: 'Program', fmPath: FeatureManagerConstants.ACTIVITY_PROGRAM }, { key: 'APSector', hash: '#APSector', value: 'Sectors', fmPath: FeatureManagerConstants.ACTIVITY_SECTORS }, {
  key: 'APFundingSources',
  hash: '#APFundingSources',
  value: 'Funding Sources',
  sectionPath: TOTAL_NUMBER_OF_FUNDING_SOURCES
}, { key: 'APFunding', hash: '#APFunding', value: 'Funding', sectionPath: FUNDINGS }, {
  key: 'APRelatedOrganizations',
  hash: '#APRelatedOrganizations',
  value: 'Related Organizations',
  fmPath: FeatureManagerConstants.ACTIVITY_ORGANIZATIONS
}, { key: 'APIssues', hash: '#APIssues', value: 'Issues', sectionPath: ISSUES }, { key: 'APContact', hash: '#APContact', value: 'Contact Information', fmPath: FeatureManagerConstants.ACTIVITY_CONTACT }, { key: 'APStructures', hash: '#APStructures', value: 'Structures', sectionPath: STRUCTURES }, { key: 'APDocument', hash: '#APDocument', value: 'Related Documents', sectionPath: ACTIVITY_DOCUMENTS }];

/** Column counts for each section **/
var ACTIVITY_INTERNAL_IDS_COLS = 3;
var ACTIVITY_PLANNING_COLS = 2;
var ACTIVITY_LOCATION_COLS = 3;
var ACTIVITY_FUNDING_COLS = 2;
var ACTIVITY_CONTACT_COLS = 2;
var AP_FUNDINGS_TABLE_COLS = 4;

var MULTI_SELECT_MIN_SIZE = 8;
var MULTI_SELECT_MAX_SIZE = 8;

// TODO: move these functions to an Utils class.
var toFieldNames = function toFieldNames(listOfNames) {
  return listOfNames.map(function (name) {
    return toFieldName(name);
  });
};

/**
 * Converts the original non-translated label to internal field name
 * @param name
 * @return {string}
 */
var toFieldName = function toFieldName(name) {
  return name.toLowerCase().replace(' ', '_');
};

/**
 * Converts the internal field name to the Original non-translated label
 * @param fieldName
 * @return {string}
 */
var toOriginalLabel = function toOriginalLabel(fieldName) {
  return UIUtils.capitalize(fieldName.replace('_', ' '));
};

var ActivityConstants = Object.freeze({
  ACTIVITY_BUDGET: ACTIVITY_BUDGET,
  ACTIVITY_STATUS: ACTIVITY_STATUS,
  STATUS_REASON: STATUS_REASON,
  FINANCIAL_INSTRUMENT: FINANCIAL_INSTRUMENT,
  TYPE_OF_IMPLEMENTATION: TYPE_OF_IMPLEMENTATION,
  OBJECTIVE: OBJECTIVE,
  RESULTS: RESULTS,
  BUDGET_CODE_PROJECT_ID: BUDGET_CODE_PROJECT_ID,
  ACTUAL_APPROVAL_DATE: ACTUAL_APPROVAL_DATE,
  FUNDINGS: FUNDINGS,
  FUNDING_DONOR_ORG_ID: FUNDING_DONOR_ORG_ID,
  IS_DRAFT: IS_DRAFT,
  ORG_ROLE_ORG_ID: ORG_ROLE_ORG_ID,
  ADDITIONAL_INFO: ADDITIONAL_INFO,
  PRIMARY_SECTORS: PRIMARY_SECTORS,
  SECONDARY_SECTORS: SECONDARY_SECTORS,
  TERTIARY_SECTORS: TERTIARY_SECTORS,
  TAG_SECTORS: TAG_SECTORS,
  SECTOR: SECTOR,
  SECTOR_PERCENTAGE: SECTOR_PERCENTAGE,
  FINANCING_INSTRUMENT: FINANCING_INSTRUMENT,
  MODALITIES: MODALITIES,
  LINE_MINISTRY_RANK: LINE_MINISTRY_RANK,
  GOVERNMENT_AGREEMENT_NUMBER: GOVERNMENT_AGREEMENT_NUMBER,
  FUNDING_STATUS: FUNDING_STATUS,
  LOCATIONS: LOCATIONS,
  LOCATION: LOCATION,
  LOCATION_PERCENTAGE: LOCATION_PERCENTAGE,
  IMPLEMENTATION_LOCATION: IMPLEMENTATION_LOCATION,
  IMPLEMENTATION_LEVEL: IMPLEMENTATION_LEVEL,
  APPROVAL_STATUS: APPROVAL_STATUS,
  APPROVED_BY: APPROVED_BY,
  APPROVAL_DATE: APPROVAL_DATE,
  TYPE_OF_ASSISTANCE: TYPE_OF_ASSISTANCE,
  EXPENDITURE_CLASS: EXPENDITURE_CLASS,
  FUNDING_DETAILS: FUNDING_DETAILS,
  MODE_OF_PAYMENT: MODE_OF_PAYMENT,
  FUNDING_CLASSIFICATION_DATE: FUNDING_CLASSIFICATION_DATE,
  AGREEMENT: AGREEMENT,
  DONOR_OBJECTIVE: DONOR_OBJECTIVE,
  CONDITIONS: CONDITIONS,
  AGREEMENT_CODE: AGREEMENT_CODE,
  AGREEMENT_TITLE: AGREEMENT_TITLE,
  PROJECT_CATEGORY: PROJECT_CATEGORY,
  PROJECT_IMPLEMENTING_UNIT: PROJECT_IMPLEMENTING_UNIT,
  ORGANIZATION: ORGANIZATION,
  PERCENTAGE: PERCENTAGE,
  AMP_ORGANIZATION_ROLE_ID: AMP_ORGANIZATION_ROLE_ID,
  ROLE: ROLE,
  EXECUTING_AGENCY: EXECUTING_AGENCY,
  CONTRACTING_AGENCY: CONTRACTING_AGENCY,
  BENEFICIARY_AGENCY: BENEFICIARY_AGENCY,
  IMPLEMENTING_AGENCY: IMPLEMENTING_AGENCY,
  RESPONSIBLE_ORGANIZATION: RESPONSIBLE_ORGANIZATION,
  DONOR_ORGANIZATION: DONOR_ORGANIZATION,
  REGIONAL_GROUP: REGIONAL_GROUP,
  SECTOR_GROUP: SECTOR_GROUP,
  BUDGETS: BUDGETS,
  BUDGET_CODE: BUDGET_CODE,
  BUDGET_ORGANIZATION_CODE: BUDGET_ORGANIZATION_CODE,
  ARCHIVED: ARCHIVED,
  TRANSACTION_DATE: TRANSACTION_DATE,
  TRANSACTION_TYPE: TRANSACTION_TYPE,
  COMMITMENTS: COMMITMENTS,
  DISBURSEMENTS: DISBURSEMENTS,
  EXPENDITURES: EXPENDITURES,
  ESTIMATED_DISBURSEMENTS: ESTIMATED_DISBURSEMENTS,
  TRANSACTION_AMOUNT: TRANSACTION_AMOUNT,
  ADJUSTMENT_TYPE: ADJUSTMENT_TYPE,
  ACTUAL_START_DATE: ACTUAL_START_DATE,
  PROPOSED_START_DATE: PROPOSED_START_DATE,
  ACTUAL_COMPLETION_DATE: ACTUAL_COMPLETION_DATE,
  CONTRACTING_DATE: CONTRACTING_DATE,
  DISBURSEMENT_DATE: DISBURSEMENT_DATE,
  PROPOSED_APPROVAL_DATE: PROPOSED_APPROVAL_DATE,
  ORIGINAL_COMPLETION_DATE: ORIGINAL_COMPLETION_DATE,
  PROPOSED_COMPLETION_DATE: PROPOSED_COMPLETION_DATE,
  FINAL_DATE_FOR_DISBURSEMENTS: FINAL_DATE_FOR_DISBURSEMENTS,
  FINAL_DATE_FOR_CONTRACTING: FINAL_DATE_FOR_CONTRACTING,
  EFFECTIVE_FUNDING_DATE: EFFECTIVE_FUNDING_DATE,
  FUNDING_CLOSING_DATE: FUNDING_CLOSING_DATE,
  RATIFICATION_DATE: RATIFICATION_DATE,
  MATURITY: MATURITY,
  LAST_AUDIT_DATE: LAST_AUDIT_DATE,
  SIGNATURE_DATE: SIGNATURE_DATE,
  HUMANITARIAN_AID: HUMANITARIAN_AID,
  DISASTER_RESPONSE: DISASTER_RESPONSE,
  PROGRAM: PROGRAM,
  PROGRAM_PERCENTAGE: PROGRAM_PERCENTAGE,
  PROGRAM_SETTINGS: PROGRAM_SETTINGS,
  NATIONAL_PLAN_OBJECTIVE: NATIONAL_PLAN_OBJECTIVE,
  PRIMARY_PROGRAMS: PRIMARY_PROGRAMS,
  SECONDARY_PROGRAMS: SECONDARY_PROGRAMS,
  TERTIAR_PROGRAMS: TERTIAR_PROGRAMS,
  GOVERNMENT_APPROVAL_PROCEDURES: GOVERNMENT_APPROVAL_PROCEDURES,
  JOINT_CRITERIA: JOINT_CRITERIA,
  TEAM: TEAM,
  REJECTED_ID: REJECTED_ID,
  INTERNAL_ID: INTERNAL_ID,
  AMP_ID: AMP_ID,
  PROJECT_TITLE: PROJECT_TITLE,
  DESCRIPTION: DESCRIPTION,
  MODIFIED_BY: MODIFIED_BY,
  MODIFIED_ON: MODIFIED_ON,
  CREATED_BY: CREATED_BY,
  CREATED_ON: CREATED_ON,
  LAST_IMPORTED_BY: LAST_IMPORTED_BY,
  CLIENT_CHANGE_ID: CLIENT_CHANGE_ID,
  CLIENT_CREATED_ON: CLIENT_CREATED_ON,
  CLIENT_UPDATED_ON: CLIENT_UPDATED_ON,
  IS_PUSHED: IS_PUSHED,
  ACTIVITY_GROUP: ACTIVITY_GROUP,
  VERSION: VERSION,
  PROJECT_COMMENTS: PROJECT_COMMENTS,
  LESSONS_LEARNED: LESSONS_LEARNED,
  PROJECT_IMPACT: PROJECT_IMPACT,
  ACTIVITY_SUMMARY: ACTIVITY_SUMMARY,
  CONDITIONALITIES: CONDITIONALITIES,
  PROJECT_MANAGEMENT: PROJECT_MANAGEMENT,
  A_C_CHAPTER: A_C_CHAPTER,
  CRIS_NUMBER: CRIS_NUMBER,
  IATI_IDENTIFIER: IATI_IDENTIFIER,
  ACTIVITY_INTERNAL_IDS: ACTIVITY_INTERNAL_IDS,
  HIERARCHICAL_VALUE: HIERARCHICAL_VALUE,
  HIERARCHICAL_VALUE_PARTS: HIERARCHICAL_VALUE_PARTS,
  HIERARCHICAL_VALUE_DEPTH: HIERARCHICAL_VALUE_DEPTH,
  PPC_AMOUNT: PPC_AMOUNT,
  RPC_AMOUNT: RPC_AMOUNT,
  PPC_ANNUAL_BUDGETS: PPC_ANNUAL_BUDGETS,
  AMOUNT: AMOUNT,
  CURRENCY: CURRENCY,
  FUNDING_DATE: FUNDING_DATE,
  COMPONENTS: COMPONENTS,
  TOTAL_NUMBER_OF_FUNDING_SOURCES: TOTAL_NUMBER_OF_FUNDING_SOURCES,
  SOURCE_ROLE: SOURCE_ROLE,
  AMP_FUNDING_ID: AMP_FUNDING_ID,
  ISSUES: ISSUES,
  ISSUE_DATE: ISSUE_DATE,
  ISSUE_NAME: ISSUE_NAME,
  MEASURES: MEASURES,
  MEASURE_NAME: MEASURE_NAME,
  MEASURE_DATE: MEASURE_DATE,
  ACTORS: ACTORS,
  ACTOR_NAME: ACTOR_NAME,
  STRUCTURES: STRUCTURES,
  STRUCTURES_TITLE: STRUCTURES_TITLE,
  STRUCTURES_DESCRIPTION: STRUCTURES_DESCRIPTION,
  STRUCTURES_LATITUDE: STRUCTURES_LATITUDE,
  STRUCTURES_LONGITUDE: STRUCTURES_LONGITUDE,
  STRUCTURES_COLOR: STRUCTURES_COLOR,
  STRUCTURES_LAT: STRUCTURES_LAT,
  STRUCTURES_LNG: STRUCTURES_LNG,
  STRUCTURES_SHAPE: STRUCTURES_SHAPE,
  STRUCTURES_POINT: STRUCTURES_POINT,
  STRUCTURES_POLYGON: STRUCTURES_POLYGON,
  STRUCTURES_POLYLINE: STRUCTURES_POLYLINE,
  STRUCTURES_COORDINATES: STRUCTURES_COORDINATES,
  COMPONENT_TYPE: COMPONENT_TYPE,
  COMPONENT_TITLE: COMPONENT_TITLE,
  COMPONENT_FUNDING: COMPONENT_FUNDING,
  COMPONENT_DESCRIPTION: COMPONENT_DESCRIPTION,
  COMPONENT_ORGANIZATION: COMPONENT_ORGANIZATION,
  FUNDING_AMOUNT_ID: FUNDING_AMOUNT_ID,
  EXTRA_INFO: EXTRA_INFO,
  VALUE: VALUE,
  ACRONYM: ACRONYM,
  TYPE_OF_COOPERATION: TYPE_OF_COOPERATION,
  ANNUAL_PROJECT_BUDGET_ID: ANNUAL_PROJECT_BUDGET_ID,
  TYPE: TYPE,
  YEAR: YEAR,
  GROUP_VERSIONED_FUNDING: GROUP_VERSIONED_FUNDING,
  ACTIVE_LIST: ACTIVE_LIST,
  ACTIVE: ACTIVE,
  DELEGATED_COOPERATION: DELEGATED_COOPERATION,
  DELEGATED_PARTNER: DELEGATED_PARTNER,
  FINANCING_ID: FINANCING_ID,
  DISBURSEMENT_ORDER_ID: DISBURSEMENT_ORDER_ID,
  PLEDGE: PLEDGE,
  CAPITAL_SPENDING_PERCENTAGE: CAPITAL_SPENDING_PERCENTAGE,
  REPORTING_DATE: REPORTING_DATE,
  RECIPIENT_ROLE: RECIPIENT_ROLE,
  RECIPIENT_ORGANIZATION: RECIPIENT_ORGANIZATION,
  TEMPORAL_ID: TEMPORAL_ID,
  MINISTRY_CODE: MINISTRY_CODE,
  PROJECT_CODE: PROJECT_CODE,
  FY: FY,
  INDIRECT_ON_BUDGET: INDIRECT_ON_BUDGET,
  IMPLEMENTATION_LEVELS_EXTRA_INFO: IMPLEMENTATION_LEVELS_EXTRA_INFO,
  IMPLEMENTATION_LOCATION_EXTRA_INFO: IMPLEMENTATION_LOCATION_EXTRA_INFO,
  DONOR_CONTACT: DONOR_CONTACT,
  PROJECT_COORDINATOR_CONTACT: PROJECT_COORDINATOR_CONTACT,
  SECTOR_MINISTRY_CONTACT: SECTOR_MINISTRY_CONTACT,
  MOFED_CONTACT: MOFED_CONTACT,
  IMPLEMENTING_EXECUTING_AGENCY_CONTACT: IMPLEMENTING_EXECUTING_AGENCY_CONTACT,
  CONTACT: CONTACT,
  ORGANIZATION_GROUP: ORGANIZATION_GROUP,
  FIXED_EXCHANGE_RATE: FIXED_EXCHANGE_RATE,
  PRIMARY_CONTACT: PRIMARY_CONTACT,
  ACTIVITY_DOCUMENTS: ACTIVITY_DOCUMENTS,
  DOCUMENT_TYPE: DOCUMENT_TYPE,
  ISO2: ISO2,
  MTEF_PROJECTIONS: MTEF_PROJECTIONS$1,
  PROJECTION: PROJECTION,
  PIPELINE: PIPELINE,
  PROJECTION_DATE: PROJECTION_DATE,
  SAME_AS_PROPOSED_START_DATE_LABEL: SAME_AS_PROPOSED_START_DATE_LABEL,
  SAME_AS_PROPOSED_APPROVAL_DATE_LABEL: SAME_AS_PROPOSED_APPROVAL_DATE_LABEL,
  DEPENDENCY_IMPLEMENTATION_LEVEL_PRESENT: DEPENDENCY_IMPLEMENTATION_LEVEL_PRESENT,
  DEPENDENCY_IMPLEMENTATION_LEVEL_VALID: DEPENDENCY_IMPLEMENTATION_LEVEL_VALID,
  DEPENDENCY_IMPLEMENTATION_LOCATION_PRESENT: DEPENDENCY_IMPLEMENTATION_LOCATION_PRESENT,
  DEPENDENCY_IMPLEMENTATION_LOCATION_VALID: DEPENDENCY_IMPLEMENTATION_LOCATION_VALID,
  DEPENDENCY_PROJECT_CODE_ON_BUDGET: DEPENDENCY_PROJECT_CODE_ON_BUDGET,
  DEPENDENCY_ON_BUDGET: DEPENDENCY_ON_BUDGET,
  DEPENDENCY_TRANSACTION_PRESENT: DEPENDENCY_TRANSACTION_PRESENT,
  DEPENDENCY_COMPONENT_FUNDING_ORG_VALID: DEPENDENCY_COMPONENT_FUNDING_ORG_VALID,
  AP_SECTION_IDS: AP_SECTION_IDS,
  ACTIVITY_INTERNAL_IDS_COLS: ACTIVITY_INTERNAL_IDS_COLS,
  ACTIVITY_PLANNING_COLS: ACTIVITY_PLANNING_COLS,
  ACTIVITY_LOCATION_COLS: ACTIVITY_LOCATION_COLS,
  ACTIVITY_FUNDING_COLS: ACTIVITY_FUNDING_COLS,
  ACTIVITY_CONTACT_COLS: ACTIVITY_CONTACT_COLS,
  AP_FUNDINGS_TABLE_COLS: AP_FUNDINGS_TABLE_COLS,
  MULTI_SELECT_MIN_SIZE: MULTI_SELECT_MIN_SIZE,
  MULTI_SELECT_MAX_SIZE: MULTI_SELECT_MAX_SIZE,
  toFieldNames: toFieldNames,
  toFieldName: toFieldName,
  toOriginalLabel: toOriginalLabel
});

var NOTIFICATION_ORIGIN_API_SECURITY = 'NOTIFICATION_ORIGIN_API_SECURITY';
var NOTIFICATION_ORIGIN_API_NETWORK = 'NOTIFICATION_ORIGIN_API_NETWORK';
var NOTIFICATION_ORIGIN_API_SYNCUP = 'NOTIFICATION_ORIGIN_API_SYNCUP';
var NOTIFICATION_ORIGIN_API_GENERAL = 'NOTIFICATION_ORIGIN_API_GENERAL';
var NOTIFICATION_ORIGIN_DATABASE = 'NOTIFICATION_ORIGIN_DATABASE';
var NOTIFICATION_ORIGIN_AUTHENTICATION = 'NOTIFICATION_ORIGIN_AUTHENTICATION';
var NOTIFICATION_ORIGIN_WORKSPACE_FILTER = 'NOTIFICATION_ORIGIN_WORKSPACE_FILTER';
var NOTIFICATION_ORIGIN_WORKSPACE = 'NOTIFICATION_ORIGIN_WORKSPACE';
var NOTIFICATION_ORIGIN_SYNCUP_PROCESS = 'NOTIFICATION_ORIGIN_SYNCUP_PROCESS';
var NOTIFICATION_ORIGIN_CURRENCY_MANAGER = 'NOTIFICATION_ORIGIN_CURRENCY_MANAGER';
var NOTIFICATION_ORIGIN_DATES = 'NOTIFICATION_ORIGIN_DATES';
var NOTIFICATION_ORIGIN_ACTIVITY = 'NOTIFICATION_ORIGIN_ACTIVITY';
var NOTIFICATION_ORIGIN_RESOURCE = 'NOTIFICATION_ORIGIN_RESOURCE';
var NOTIFICATION_ORIGIN_I18NEXT = 'NOTIFICATION_ORIGIN_I18NEXT';
var NOTIFICATION_ORIGIN_UPDATE_CHECK = 'NOTIFICATION_ORIGIN_UPDATE_CHECK';
var NOTIFICATION_ORIGIN_UPDATE = 'NOTIFICATION_ORIGIN_UPDATE';
var NOTIFICATION_ORIGIN_SETUP = 'NOTIFICATION_ORIGIN_SETUP';
var NOTIFICATION_ORIGIN_SETTINGS = 'NOTIFICATION_ORIGIN_SETTINGS';

var NOTIFICATION_SEVERITY_WARNING = 'NOTIFICATION_SEVERITY_WARNING';
var NOTIFICATION_SEVERITY_INFO = 'NOTIFICATION_SEVERITY_INFO';
var NOTIFICATION_SEVERITY_ERROR = 'NOTIFICATION_SEVERITY_ERROR';

var NOTIFICATION_ERROR_LEVEL_MINOR = 'NOTIFICATION_ERROR_LEVEL_MINOR';
var NOTIFICATION_ERROR_LEVEL_BLOCKER = 'NOTIFICATION_ERROR_LEVEL_BLOCKER';

var NOTIFICATION_ORIGIN_WRONG_METHOD_USAGE = 'NOTIFICATION_ORIGIN_WRONG_METHOD_USAGE';

var ERROR_CODE_NO_CONNECTIVITY = 'NO_CONNECTIVITY';
var ERROR_CODE_ACCESS_DENIED = 'ACCESS_DENIED';

var MSG_INVALID_URL = 'invalidUrl';
var MSG_TIMEOUT = 'timeoutError';
var MSG_UNKNOWN_NETWORK_ERROR = 'unknownNetworkError';
var MSG_AMP_UNREACHABLE = 'AMPUnreachableError';
var GENERAL_CONNECTION_ERRORS = [MSG_INVALID_URL, MSG_TIMEOUT, MSG_UNKNOWN_NETWORK_ERROR, MSG_AMP_UNREACHABLE];

var ErrorConstants = Object.freeze({
  NOTIFICATION_ORIGIN_API_SECURITY: NOTIFICATION_ORIGIN_API_SECURITY,
  NOTIFICATION_ORIGIN_API_NETWORK: NOTIFICATION_ORIGIN_API_NETWORK,
  NOTIFICATION_ORIGIN_API_SYNCUP: NOTIFICATION_ORIGIN_API_SYNCUP,
  NOTIFICATION_ORIGIN_API_GENERAL: NOTIFICATION_ORIGIN_API_GENERAL,
  NOTIFICATION_ORIGIN_DATABASE: NOTIFICATION_ORIGIN_DATABASE,
  NOTIFICATION_ORIGIN_AUTHENTICATION: NOTIFICATION_ORIGIN_AUTHENTICATION,
  NOTIFICATION_ORIGIN_WORKSPACE_FILTER: NOTIFICATION_ORIGIN_WORKSPACE_FILTER,
  NOTIFICATION_ORIGIN_WORKSPACE: NOTIFICATION_ORIGIN_WORKSPACE,
  NOTIFICATION_ORIGIN_SYNCUP_PROCESS: NOTIFICATION_ORIGIN_SYNCUP_PROCESS,
  NOTIFICATION_ORIGIN_CURRENCY_MANAGER: NOTIFICATION_ORIGIN_CURRENCY_MANAGER,
  NOTIFICATION_ORIGIN_DATES: NOTIFICATION_ORIGIN_DATES,
  NOTIFICATION_ORIGIN_ACTIVITY: NOTIFICATION_ORIGIN_ACTIVITY,
  NOTIFICATION_ORIGIN_RESOURCE: NOTIFICATION_ORIGIN_RESOURCE,
  NOTIFICATION_ORIGIN_I18NEXT: NOTIFICATION_ORIGIN_I18NEXT,
  NOTIFICATION_ORIGIN_UPDATE_CHECK: NOTIFICATION_ORIGIN_UPDATE_CHECK,
  NOTIFICATION_ORIGIN_UPDATE: NOTIFICATION_ORIGIN_UPDATE,
  NOTIFICATION_ORIGIN_SETUP: NOTIFICATION_ORIGIN_SETUP,
  NOTIFICATION_ORIGIN_SETTINGS: NOTIFICATION_ORIGIN_SETTINGS,

  NOTIFICATION_SEVERITY_WARNING: NOTIFICATION_SEVERITY_WARNING,
  NOTIFICATION_SEVERITY_INFO: NOTIFICATION_SEVERITY_INFO,
  NOTIFICATION_SEVERITY_ERROR: NOTIFICATION_SEVERITY_ERROR,

  NOTIFICATION_ERROR_LEVEL_MINOR: NOTIFICATION_ERROR_LEVEL_MINOR,
  NOTIFICATION_ERROR_LEVEL_BLOCKER: NOTIFICATION_ERROR_LEVEL_BLOCKER,

  NOTIFICATION_ORIGIN_WRONG_METHOD_USAGE: NOTIFICATION_ORIGIN_WRONG_METHOD_USAGE,

  ERROR_CODE_NO_CONNECTIVITY: ERROR_CODE_NO_CONNECTIVITY,
  ERROR_CODE_ACCESS_DENIED: ERROR_CODE_ACCESS_DENIED,

  MSG_INVALID_URL: MSG_INVALID_URL,
  MSG_TIMEOUT: MSG_TIMEOUT,
  MSG_UNKNOWN_NETWORK_ERROR: MSG_UNKNOWN_NETWORK_ERROR,
  MSG_AMP_UNREACHABLE: MSG_AMP_UNREACHABLE,
  GENERAL_CONNECTION_ERRORS: GENERAL_CONNECTION_ERRORS
});

/**
 * @author Nadejda Mandrescu
 */

var DONOR_ORGANIZATION$1 = 'Donor Organization';
var RESPONSIBLE_ORGANIZATION$1 = 'Responsible Organization';
var EXECUTING_AGENCY$1 = 'Executing Agency';
var IMPLEMENTING_AGENCY$1 = 'Implementing Agency';
var BENEFICIARY_AGENCY$1 = 'Beneficiary Agency';
var CONTRACTING_AGENCY$1 = 'Contracting Agency';
var DONOR_AGENCY = 'Donor';
var REGIONAL_GROUP$1 = 'Regional Group';
var SECTOR_GROUP$1 = 'Sector Group';

var ORG_ROLE_NAMES = [DONOR_ORGANIZATION$1, RESPONSIBLE_ORGANIZATION$1, EXECUTING_AGENCY$1, IMPLEMENTING_AGENCY$1, BENEFICIARY_AGENCY$1, CONTRACTING_AGENCY$1, REGIONAL_GROUP$1, SECTOR_GROUP$1];

var ACTUAL = 'Actual';
var PLANNED = 'Planned';
var COMMITMENTS$1 = 'Commitments';
var DISBURSEMENTS$1 = 'Disbursements';
var EXPENDITURES$1 = 'Expenditures';
var ACTUAL_COMMITMENTS = ACTUAL + ' ' + ActivityConstants.COMMITMENTS;
var ACTUAL_DISBURSEMENTS = ACTUAL + ' ' + ActivityConstants.DISBURSEMENTS;
var ACTUAL_EXPENDITURES = ACTUAL + ' ' + ActivityConstants.EXPENDITURES;
var PLANNED_COMMITMENTS = PLANNED + ' ' + ActivityConstants.COMMITMENTS;
var PLANNED_DISBURSEMENTS = PLANNED + ' ' + ActivityConstants.DISBURSEMENTS;
var PLANNED_EXPENDITURES = PLANNED + ' ' + ActivityConstants.EXPENDITURES;
var UNALLOCATED_DISBURSEMENTS = 'Unallocated Disbursements';
var DELIVERY_RATE = 'Delivery rate';
var MTEF_PROJECTIONS$2 = 'MTEF Projections';

var ADJUSTMENT_TYPES = [ACTUAL, PLANNED];
var ADJUSTMENT_TYPES_AP_ORDER = [PLANNED, ACTUAL];

var NEW_ACTIVITY_ID = '0';

var PROPOSED_PROJECT_COST = 'ppc';
var REVISED_PROJECT_COST = 'rpc';

var ACRONYM_DONOR_ORGANIZATION = 'DN';
var ACRONYM_EXECUTING_AGENCY = 'EA';
var ACRONYM_IMPLEMENTING_AGENCY = 'IA';
var ACRONYM_BENEFICIARY_AGENCY = 'BA';
var ACRONYM_RESPONSIBLE_ORGANIZATION = 'RO';

/** Approval status untranslated values **/
var APPROVAL_STATUS_CREATED = 'created';
var APPROVAL_STATUS_APPROVED = 'approved';
var APPROVAL_STATUS_EDITED = 'edited';
var APPROVAL_STATUS_STARTED_APPROVED = 'startedapproved';
var APPROVAL_STATUS_STARTED = 'started';
var APPROVAL_STATUS_NOT_APPROVED = 'not_approved';
var APPROVAL_STATUS_REJECTED = 'rejected';

var ON_BUDGET = 'On Budget';

var INTERNATIONAL = 'International';
var COUNTRY = 'Country';

var RELATED_DOCUMENTS = 'Related Documents';

var TMP_ENTITY_VALIDATOR = 'entity-validator';

/** Required status */
var ALWAYS_REQUIRED = 'Y';

var ValueConstants = Object.freeze({
  DONOR_ORGANIZATION: DONOR_ORGANIZATION$1,
  RESPONSIBLE_ORGANIZATION: RESPONSIBLE_ORGANIZATION$1,
  EXECUTING_AGENCY: EXECUTING_AGENCY$1,
  IMPLEMENTING_AGENCY: IMPLEMENTING_AGENCY$1,
  BENEFICIARY_AGENCY: BENEFICIARY_AGENCY$1,
  CONTRACTING_AGENCY: CONTRACTING_AGENCY$1,
  DONOR_AGENCY: DONOR_AGENCY,
  REGIONAL_GROUP: REGIONAL_GROUP$1,
  SECTOR_GROUP: SECTOR_GROUP$1,
  ORG_ROLE_NAMES: ORG_ROLE_NAMES,
  ACTUAL: ACTUAL,
  PLANNED: PLANNED,
  COMMITMENTS: COMMITMENTS$1,
  DISBURSEMENTS: DISBURSEMENTS$1,
  EXPENDITURES: EXPENDITURES$1,
  ACTUAL_COMMITMENTS: ACTUAL_COMMITMENTS,
  ACTUAL_DISBURSEMENTS: ACTUAL_DISBURSEMENTS,
  ACTUAL_EXPENDITURES: ACTUAL_EXPENDITURES,
  PLANNED_COMMITMENTS: PLANNED_COMMITMENTS,
  PLANNED_DISBURSEMENTS: PLANNED_DISBURSEMENTS,
  PLANNED_EXPENDITURES: PLANNED_EXPENDITURES,
  UNALLOCATED_DISBURSEMENTS: UNALLOCATED_DISBURSEMENTS,
  DELIVERY_RATE: DELIVERY_RATE,
  MTEF_PROJECTIONS: MTEF_PROJECTIONS$2,
  ADJUSTMENT_TYPES: ADJUSTMENT_TYPES,
  ADJUSTMENT_TYPES_AP_ORDER: ADJUSTMENT_TYPES_AP_ORDER,
  NEW_ACTIVITY_ID: NEW_ACTIVITY_ID,
  PROPOSED_PROJECT_COST: PROPOSED_PROJECT_COST,
  REVISED_PROJECT_COST: REVISED_PROJECT_COST,
  ACRONYM_DONOR_ORGANIZATION: ACRONYM_DONOR_ORGANIZATION,
  ACRONYM_EXECUTING_AGENCY: ACRONYM_EXECUTING_AGENCY,
  ACRONYM_IMPLEMENTING_AGENCY: ACRONYM_IMPLEMENTING_AGENCY,
  ACRONYM_BENEFICIARY_AGENCY: ACRONYM_BENEFICIARY_AGENCY,
  ACRONYM_RESPONSIBLE_ORGANIZATION: ACRONYM_RESPONSIBLE_ORGANIZATION,
  APPROVAL_STATUS_CREATED: APPROVAL_STATUS_CREATED,
  APPROVAL_STATUS_APPROVED: APPROVAL_STATUS_APPROVED,
  APPROVAL_STATUS_EDITED: APPROVAL_STATUS_EDITED,
  APPROVAL_STATUS_STARTED_APPROVED: APPROVAL_STATUS_STARTED_APPROVED,
  APPROVAL_STATUS_STARTED: APPROVAL_STATUS_STARTED,
  APPROVAL_STATUS_NOT_APPROVED: APPROVAL_STATUS_NOT_APPROVED,
  APPROVAL_STATUS_REJECTED: APPROVAL_STATUS_REJECTED,
  ON_BUDGET: ON_BUDGET,
  INTERNATIONAL: INTERNATIONAL,
  COUNTRY: COUNTRY,
  RELATED_DOCUMENTS: RELATED_DOCUMENTS,
  TMP_ENTITY_VALIDATOR: TMP_ENTITY_VALIDATOR,
  ALWAYS_REQUIRED: ALWAYS_REQUIRED
});

/**
 * This is a set of field paths that are used for frequent needs
 * @author Nadejda Mandrescu
 */

var FUNDING_ACTIVE_LIST = 'fundings~active_list';
var FUNDING_TYPE_OF_ASSISTANCE = ActivityConstants.FUNDINGS + '~' + ActivityConstants.TYPE_OF_ASSISTANCE;
var FUNDING_DETAILS_PATH = ActivityConstants.FUNDINGS + '~' + ActivityConstants.FUNDING_DETAILS;
/**
 * Legacy funding currency path used for data migration
 * @deprecated since 1.4
 */
var FUNDING_CURRENCY_PATH = FUNDING_DETAILS_PATH + '~' + ActivityConstants.CURRENCY;
var MTEF_CURRENCY_PATH = ActivityConstants.FUNDINGS + '~' + ActivityConstants.MTEF_PROJECTIONS + '~' + ActivityConstants.CURRENCY;
var PPC_CURRENCY_PATH = ActivityConstants.PPC_AMOUNT + '~' + ActivityConstants.CURRENCY;
var RPC_CURRENCY_PATH = ActivityConstants.RPC_AMOUNT + '~' + ActivityConstants.CURRENCY;
var COMPONENT_CURRENCY_PATH = ActivityConstants.COMPONENTS + '~' + ActivityConstants.COMPONENT_FUNDING + '~' + ActivityConstants.CURRENCY;
var DISBURSEMENTS_PATH = ActivityConstants.FUNDINGS + '~' + ActivityConstants.DISBURSEMENTS;
var ACTIVITY_INTERNAL_IDS_INTERNAL_ID_PATH = 'activity_internal_ids~internal_id';
var ACTIVITY_INTERNAL_IDS_ORGANIZATION_PATH = 'activity_internal_ids~organization';
var LOCATION_PATH = 'locations~location';
var NATIONAL_PLAN_OBJECTIVE_PATH = 'national_plan_objective~program';
var PRIMARY_PROGRAM_PATH = 'primary_programs~program';
var SECONDARY_PROGRAM_PATH = 'secondary_programs~program';
var PRIMARY_SECTOR_PATH = 'primary_sectors~sector';
var SECONDARY_SECTOR_PATH = 'secondary_sectors~sector';
var TERTIARY_SECTOR_PATH = 'tertiary_sectors~sector';
var DONOR_ORGANIZATIONS_PATH = 'donor_organization~organization';
var RESPONSIBLE_ORGANIZATION_BUDGETS_PATH = ActivityConstants.RESPONSIBLE_ORGANIZATION + '~' + ActivityConstants.BUDGETS;

var RELATED_ORGS_PATHS = ValueConstants.ORG_ROLE_NAMES.map(function (orgRole) {
  return ActivityConstants.toFieldName(orgRole);
});
var RELATED_ORGS_ORGANIZATION_PATHS = ValueConstants.ORG_ROLE_NAMES.map(function (orgRole) {
  return ActivityConstants.toFieldName(orgRole) + '~' + ActivityConstants.ORGANIZATION;
});

var RICH_TEXT_FIELDS = new Set([ActivityConstants.STATUS_REASON, ActivityConstants.OBJECTIVE, ActivityConstants.DESCRIPTION, ActivityConstants.PROJECT_COMMENTS, ActivityConstants.LESSONS_LEARNED, ActivityConstants.PROJECT_IMPACT, ActivityConstants.ACTIVITY_SUMMARY, ActivityConstants.CONDITIONALITIES, ActivityConstants.PROJECT_MANAGEMENT, ActivityConstants.RESULTS]);

var PATHS_WITH_TREE_STRUCTURE = new Set([NATIONAL_PLAN_OBJECTIVE_PATH, PRIMARY_PROGRAM_PATH, SECONDARY_PROGRAM_PATH, PRIMARY_SECTOR_PATH, SECONDARY_SECTOR_PATH, TERTIARY_SECTOR_PATH]);

var PATHS_WITH_HIERARCHICAL_VALUES = new Set([NATIONAL_PLAN_OBJECTIVE_PATH, PRIMARY_PROGRAM_PATH, SECONDARY_PROGRAM_PATH, PRIMARY_SECTOR_PATH, SECONDARY_SECTOR_PATH, TERTIARY_SECTOR_PATH, LOCATION_PATH]);

var ACTIVITY_CONTACT_PATHS = [ActivityConstants.DONOR_CONTACT, ActivityConstants.PROJECT_COORDINATOR_CONTACT, ActivityConstants.SECTOR_MINISTRY_CONTACT, ActivityConstants.MOFED_CONTACT, ActivityConstants.IMPLEMENTING_EXECUTING_AGENCY_CONTACT];

var TRANSACTION_TYPES = [ActivityConstants.COMMITMENTS, ActivityConstants.DISBURSEMENTS, ActivityConstants.EXPENDITURES];
var TRANSACTION_TYPES_ORDERED = TRANSACTION_TYPES;
var FUNDING_TRANSACTION_TYPES = [].concat(TRANSACTION_TYPES, [ActivityConstants.ESTIMATED_DISBURSEMENTS]);
var ADJUSTMENT_TYPE_PATHS = FUNDING_TRANSACTION_TYPES.map(function (tt) {
  return ActivityConstants.FUNDINGS + '~' + tt + '~' + ActivityConstants.ADJUSTMENT_TYPE;
});
var FUNDING_CURRENCY_PATHS = TRANSACTION_TYPES.map(function (tt) {
  return ActivityConstants.FUNDINGS + '~' + tt + '~' + ActivityConstants.CURRENCY;
});

var PATHS_FOR_ACTIVITY_CURRENCY = [FUNDING_CURRENCY_PATH, MTEF_CURRENCY_PATH, COMPONENT_CURRENCY_PATH, PPC_CURRENCY_PATH, RPC_CURRENCY_PATH].concat(toConsumableArray(FUNDING_CURRENCY_PATHS));

var PATHS_FOR_CURRENCY = new Set([ActivityConstants.CURRENCY].concat(toConsumableArray(PATHS_FOR_ACTIVITY_CURRENCY)));

var DO_NOT_HYDRATE_FIELDS_LIST = [ActivityConstants.APPROVAL_STATUS];

/* Fields paths alternative values location */
var ALTERNATE_VALUE_PATH = {};
ALTERNATE_VALUE_PATH[ActivityConstants.CREATED_ON] = ActivityConstants.CLIENT_CREATED_ON;
ALTERNATE_VALUE_PATH[ActivityConstants.MODIFIED_ON] = ActivityConstants.CLIENT_UPDATED_ON;

/* FM paths for some activity fields that are always present in fields def, but may be hidden from display through FM */
var ACTIVITY_FIELDS_FM_PATH = {};
ACTIVITY_FIELDS_FM_PATH[ActivityConstants.MODIFIED_BY] = FeatureManagerConstants.ACTIVITY_LAST_UPDATED_BY;
ACTIVITY_FIELDS_FM_PATH[ActivityConstants.MODIFIED_ON] = FeatureManagerConstants.ACTIVITY_LAST_UPDATED_ON;

/* Possible Options fields path prefixes */
var PREFIX_ACTIVITY = null;
var PREFIX_CONTACT = 'contact';
var PREFIX_RESOURCE = 'resource';
var PREFIX_COMMON = 'common';
var PREFIX_LIST = [PREFIX_ACTIVITY, PREFIX_CONTACT, PREFIX_RESOURCE, PREFIX_COMMON];

var FIELD_PATH = 'field-path';
var FIELD_OPTIONS = 'possible-options';
var FIELD_OPTION_USABLE = 'option-usable';
var LIST_MAX_SIZE = 'size-limit';
var REGEX_PATTERN = 'regex-pattern';
var FIELD_NAME = 'field_name';
var FIELD_LABEL = 'field_label';
var FIELD_REQUIRED = 'required';
var FIELD_UNIQUE_CONSTRAINT = 'unique_constraint';
var FIELD_TYPE = 'field_type';
var FIELD_LENGTH = 'field_length';
var FIELD_PERCENTAGE = 'percentage';
var FIELD_PERCENTAGE_CONSTRAINT = 'percentage_constraint';
var FIELD_ITEM_TYPE = 'item-type';
var FIELD_IMPORTABLE = 'importable';
var FIELD_ID_ONLY = 'id_only';
var FIELD_MULTIPLE_VALUES_ALLOWED = 'multiple_values';
var FIELD_TREE_COLLECTION = 'tree_collection';
var FIELD_CHILDREN = 'children';
var FIELD_DEPENDENCIES = 'dependencies';

var FIELD_TYPE_LIST = 'list';
var FIELD_TYPE_OBJECT = 'object';
var FIELD_TYPE_STRING = 'string';
var FIELD_TYPE_LONG = 'long';
var FIELD_TYPE_FLOAT = 'float';
var FIELD_TYPE_BOOLEAN = 'boolean';
var FIELD_TYPE_DATE = 'date';
var FIELD_TYPE_TIMESTAMP = 'timestamp';

var FieldPathConstants = Object.freeze({
  FUNDING_ACTIVE_LIST: FUNDING_ACTIVE_LIST,
  FUNDING_DETAILS_PATH: FUNDING_DETAILS_PATH,
  FUNDING_CURRENCY_PATH: FUNDING_CURRENCY_PATH,
  MTEF_CURRENCY_PATH: MTEF_CURRENCY_PATH,
  PPC_CURRENCY_PATH: PPC_CURRENCY_PATH,
  RPC_CURRENCY_PATH: RPC_CURRENCY_PATH,
  COMPONENT_CURRENCY_PATH: COMPONENT_CURRENCY_PATH,
  DISBURSEMENTS_PATH: DISBURSEMENTS_PATH,
  ACTIVITY_INTERNAL_IDS_INTERNAL_ID_PATH: ACTIVITY_INTERNAL_IDS_INTERNAL_ID_PATH,
  ACTIVITY_INTERNAL_IDS_ORGANIZATION_PATH: ACTIVITY_INTERNAL_IDS_ORGANIZATION_PATH,
  LOCATION_PATH: LOCATION_PATH,
  NATIONAL_PLAN_OBJECTIVE_PATH: NATIONAL_PLAN_OBJECTIVE_PATH,
  PRIMARY_PROGRAM_PATH: PRIMARY_PROGRAM_PATH,
  SECONDARY_PROGRAM_PATH: SECONDARY_PROGRAM_PATH,
  PRIMARY_SECTOR_PATH: PRIMARY_SECTOR_PATH,
  SECONDARY_SECTOR_PATH: SECONDARY_SECTOR_PATH,
  TERTIARY_SECTOR_PATH: TERTIARY_SECTOR_PATH,
  DONOR_ORGANIZATIONS_PATH: DONOR_ORGANIZATIONS_PATH,
  RESPONSIBLE_ORGANIZATION_BUDGETS_PATH: RESPONSIBLE_ORGANIZATION_BUDGETS_PATH,
  RELATED_ORGS_PATHS: RELATED_ORGS_PATHS,
  RELATED_ORGS_ORGANIZATION_PATHS: RELATED_ORGS_ORGANIZATION_PATHS,
  RICH_TEXT_FIELDS: RICH_TEXT_FIELDS,
  PATHS_WITH_TREE_STRUCTURE: PATHS_WITH_TREE_STRUCTURE,
  PATHS_WITH_HIERARCHICAL_VALUES: PATHS_WITH_HIERARCHICAL_VALUES,
  ACTIVITY_CONTACT_PATHS: ACTIVITY_CONTACT_PATHS,
  TRANSACTION_TYPES: TRANSACTION_TYPES,
  TRANSACTION_TYPES_ORDERED: TRANSACTION_TYPES_ORDERED,
  FUNDING_TRANSACTION_TYPES: FUNDING_TRANSACTION_TYPES,
  ADJUSTMENT_TYPE_PATHS: ADJUSTMENT_TYPE_PATHS,
  FUNDING_CURRENCY_PATHS: FUNDING_CURRENCY_PATHS,
  PATHS_FOR_ACTIVITY_CURRENCY: PATHS_FOR_ACTIVITY_CURRENCY,
  PATHS_FOR_CURRENCY: PATHS_FOR_CURRENCY,
  DO_NOT_HYDRATE_FIELDS_LIST: DO_NOT_HYDRATE_FIELDS_LIST,
  ALTERNATE_VALUE_PATH: ALTERNATE_VALUE_PATH,
  ACTIVITY_FIELDS_FM_PATH: ACTIVITY_FIELDS_FM_PATH,
  PREFIX_ACTIVITY: PREFIX_ACTIVITY,
  PREFIX_CONTACT: PREFIX_CONTACT,
  PREFIX_RESOURCE: PREFIX_RESOURCE,
  PREFIX_COMMON: PREFIX_COMMON,
  PREFIX_LIST: PREFIX_LIST,
  FIELD_PATH: FIELD_PATH,
  FIELD_OPTIONS: FIELD_OPTIONS,
  FIELD_OPTION_USABLE: FIELD_OPTION_USABLE,
  LIST_MAX_SIZE: LIST_MAX_SIZE,
  REGEX_PATTERN: REGEX_PATTERN,
  FIELD_NAME: FIELD_NAME,
  FIELD_LABEL: FIELD_LABEL,
  FIELD_REQUIRED: FIELD_REQUIRED,
  FIELD_UNIQUE_CONSTRAINT: FIELD_UNIQUE_CONSTRAINT,
  FIELD_TYPE: FIELD_TYPE,
  FIELD_LENGTH: FIELD_LENGTH,
  FIELD_PERCENTAGE: FIELD_PERCENTAGE,
  FIELD_PERCENTAGE_CONSTRAINT: FIELD_PERCENTAGE_CONSTRAINT,
  FIELD_ITEM_TYPE: FIELD_ITEM_TYPE,
  FIELD_IMPORTABLE: FIELD_IMPORTABLE,
  FIELD_ID_ONLY: FIELD_ID_ONLY,
  FIELD_MULTIPLE_VALUES_ALLOWED: FIELD_MULTIPLE_VALUES_ALLOWED,
  FIELD_TREE_COLLECTION: FIELD_TREE_COLLECTION,
  FIELD_CHILDREN: FIELD_CHILDREN,
  FIELD_DEPENDENCIES: FIELD_DEPENDENCIES,
  FIELD_TYPE_LIST: FIELD_TYPE_LIST,
  FIELD_TYPE_OBJECT: FIELD_TYPE_OBJECT,
  FIELD_TYPE_STRING: FIELD_TYPE_STRING,
  FIELD_TYPE_LONG: FIELD_TYPE_LONG,
  FIELD_TYPE_FLOAT: FIELD_TYPE_FLOAT,
  FIELD_TYPE_BOOLEAN: FIELD_TYPE_BOOLEAN,
  FIELD_TYPE_DATE: FIELD_TYPE_DATE,
  FIELD_TYPE_TIMESTAMP: FIELD_TYPE_TIMESTAMP
});

/* eslint-disable class-methods-use-this */

var logger = null;

/**
 * This is a helper class for checking fields status, getting field options translations and the like.
 *
 * @author Nadejda Mandrescu
 */

var FieldsManager = function () {
  createClass(FieldsManager, null, [{
    key: 'clone',

    /**
     * Shallow clone of another newFieldsManager
     * @param fieldsManager
     * @return {FieldsManager}
     */
    value: function clone(fieldsManager, LoggerManager) {
      var newFieldsManager = new FieldsManager([], [], null, LoggerManager);
      Object.assign(newFieldsManager, fieldsManager);
      return newFieldsManager;
    }
  }]);

  function FieldsManager(fieldsDef, possibleValuesCollection, currentLanguage, LoggerManager) {
    var _this = this;

    classCallCheck(this, FieldsManager);

    // TODO remove cache
    logger = new LoggerManager('Fields manager');
    logger.debug('constructor');
    this._fieldsDef = fieldsDef;
    this._possibleValuesMap = {};
    possibleValuesCollection.forEach(function (pv) {
      _this._possibleValuesMap[pv.id] = pv[FIELD_OPTIONS];
    });
    this._fieldPathsEnabledStatusMap = {};
    this._lang = currentLanguage || Constants.LANGUAGE_ENGLISH;
    this._defaultLang = Constants.LANGUAGE_ENGLISH;
    this.cleanup(fieldsDef);
  }

  createClass(FieldsManager, [{
    key: 'cleanup',
    value: function cleanup(fieldsDef) {
      var _this2 = this;

      // TODO decide either to keep cleanup (here or anywhere else) or check if we need to standardize API
      fieldsDef.forEach(function (fd) {
        if (fd.children) {
          _this2.cleanup(fd.children);
        }
        if (fd.field_label) {
          Object.keys(fd.field_label).forEach(function (lang) {
            fd.field_label[lang.toLowerCase()] = fd.field_label[lang];
          });
        }
      });
    }
  }, {
    key: 'getPossibleValuesOptions',
    value: function getPossibleValuesOptions(fieldPath) {
      return Object.values(this._possibleValuesMap[fieldPath]);
    }
  }, {
    key: 'isFieldPathByPartsEnabled',
    value: function isFieldPathByPartsEnabled() {
      for (var _len = arguments.length, pathParts = Array(_len), _key = 0; _key < _len; _key++) {
        pathParts[_key] = arguments[_key];
      }

      return this.isFieldPathEnabled(pathParts.join('~'));
    }

    /**
     * Checks if the specified field path is enabled in AMP FM
     * @param fieldPath
     * @return {boolean}
     */

  }, {
    key: 'isFieldPathEnabled',
    value: function isFieldPathEnabled(fieldPath) {
      if (this._fieldPathsEnabledStatusMap[fieldPath] === undefined) {
        this._buildFieldPathStatus(fieldPath);
      }
      return this._fieldPathsEnabledStatusMap[fieldPath];
    }
  }, {
    key: '_buildFieldPathStatus',
    value: function _buildFieldPathStatus(fieldPath) {
      var pathParts = fieldPath.split('~');
      var currentTree = this._fieldsDef;
      var isDisabled = pathParts.some(function (part) {
        currentTree = currentTree.find(function (field) {
          return field.field_name === part;
        });
        if (currentTree && (currentTree[FIELD_TYPE] === FIELD_TYPE_LIST && currentTree[FIELD_ITEM_TYPE] === FIELD_TYPE_OBJECT || currentTree[FIELD_TYPE] === FIELD_TYPE_OBJECT)) {
          currentTree = currentTree.children;
        }
        return !currentTree;
      });
      this._fieldPathsEnabledStatusMap[fieldPath] = !isDisabled;
    }

    /**
     * Find the translation for the original value for the given field path, if found, otherwise returns null
     * @param fieldPath
     * @param origValue
     * @return {string|null}
     */

  }, {
    key: 'getValueTranslation',
    value: function getValueTranslation(fieldPath, origValue) {
      // fallback to original untranslated value
      var trnValue = origValue;
      var options = this._possibleValuesMap[fieldPath];
      if (options) {
        var option = Object.values(options).find(function (opt) {
          return opt.value === origValue;
        });
        if (option !== undefined) {
          var translations = option['translated-value'];
          if (translations) {
            trnValue = translations[this._lang] || translations[this._defaultLang] || trnValue;
          }
        }
      }
      return trnValue;
    }
  }, {
    key: 'getFieldLabelTranslation',
    value: function getFieldLabelTranslation(fieldPath) {
      var trnLabel = null;
      var fieldsDef = this.getFieldDef(fieldPath);
      if (fieldsDef !== undefined) {
        trnLabel = fieldsDef.field_label[this._lang] || fieldsDef.field_label[this._defaultLang] || null;
      }
      return trnLabel;
    }
  }, {
    key: 'getFieldDef',
    value: function getFieldDef(fieldPath) {
      var fieldsDef = this._fieldsDef;
      if (fieldPath) {
        fieldPath.split('~').some(function (part) {
          if (!(fieldsDef instanceof Array)) {
            fieldsDef = fieldsDef.children;
          }
          fieldsDef = fieldsDef.find(function (fd) {
            return fd.field_name === part;
          });
          return fieldsDef === undefined;
        });
      } else {
        fieldsDef = { children: fieldsDef };
      }
      return fieldsDef;
    }
  }, {
    key: 'getFieldPathsByDependencies',
    value: function getFieldPathsByDependencies(dependencies) {
      var fieldPaths = [];
      this._getFieldPathsByDependencies(dependencies, this._fieldsDef, '', fieldPaths);
      return fieldPaths;
    }
  }, {
    key: '_getFieldPathsByDependencies',
    value: function _getFieldPathsByDependencies(dependencies, fieldsDef, currentPath, fieldPaths) {
      var _this3 = this;

      if (!(fieldsDef instanceof Array)) {
        fieldsDef = fieldsDef.children;
      }
      fieldsDef.forEach(function (fd) {
        var hasDependency = fd.dependencies && fd.dependencies.some(function (dep) {
          return dependencies.includes(dep);
        });
        if (fd.children || hasDependency) {
          var fieldPath = '' + currentPath + fd.field_name;
          if (hasDependency) {
            fieldPaths.push(fieldPath);
          }
          if (fd.children) {
            _this3._getFieldPathsByDependencies(dependencies, fd.children, fieldPath + '~', fieldPaths);
          }
        }
      });
    }
  }, {
    key: 'getValue',
    value: function getValue(object, fieldPath, getOptionTranslation) {
      return FieldsManager.getValue(object, fieldPath, getOptionTranslation);
    }
  }, {
    key: 'currentLanguageCode',
    set: function set$$1(lang) {
      this._lang = lang;
    }
  }, {
    key: 'defaultLanguageCode',
    set: function set$$1(lang) {
      this._defaultLang = lang;
    }
  }, {
    key: 'fieldsDef',
    get: function get$$1() {
      return this._fieldsDef;
    }
  }, {
    key: 'possibleValuesMap',
    get: function get$$1() {
      return this._possibleValuesMap;
    }
  }], [{
    key: 'getValue',
    value: function getValue(object, fieldPath, getOptionTranslation) {
      var _this4 = this;

      var parts = fieldPath ? fieldPath.split('~') : [];
      var value = object;
      parts.some(function (part) {
        if (value instanceof Array) {
          var newList = [];
          value.forEach(function (current) {
            var newElement = current[part];
            if (newElement !== undefined && newElement !== null) {
              newList.push(newElement);
            }
          });
          value = newList;
        } else {
          value = value[part];
        }
        return value === undefined || value === null || value.length === 0;
      });
      if (value !== undefined && value !== null && value.length !== 0) {
        var values = [].concat(value);
        values = values.map(function (val) {
          if (val.value === undefined) {
            return val;
          }
          return getOptionTranslation(val, _this4._lang, _this4._defaultLang);
        });
        value = value instanceof Array ? values : values[0];
      }
      return value;
    }
  }]);
  return FieldsManager;
}();

var CLIENT_CHANGE_ID$1 = 'amp-offline-contact-change-id';
var CLIENT_CHANGE_ID_PREFIX = 'amp-offline-contact-id';
var NAME = 'name';
var LAST_NAME = 'last_name';
var TITLE = 'title';
var ORGANIZATION_NAME = 'organization_name';
var FUNCTION = 'function';
var OFFICE_ADDRESS = 'office_address';
var CREATOR = 'creator';
var ORGANISATION_CONTACTS = 'organisation_contacts';
var ORGANISATION = 'organisation';
var EMAIL = 'email';
var VALUE$1 = 'value';
var PHONE = 'phone';
var EXTENSION_VALUE = 'extension_value';
var TYPE$1 = 'type';
var FAX = 'fax';

var TMP_FORM_ID = 'form-id';
var TMP_UNIQUE_ID = 'uniqueId';
var TMP_HYDRATED = 'hydrated';
var TMP_ERRORS = 'errors';
var TMP_CONTACT_LOADED = 'isContactLoaded';
var TMP_CONTACT_LOADING = 'isContactLoading';
var TMP_ENTITY_VALIDATOR$1 = ValueConstants.TMP_ENTITY_VALIDATOR;
var TMP_FIELDS = [TMP_FORM_ID, TMP_UNIQUE_ID, TMP_HYDRATED, TMP_ERRORS, TMP_ENTITY_VALIDATOR$1, TMP_CONTACT_LOADED, TMP_CONTACT_LOADING];

var ContactConstants = Object.freeze({
  CLIENT_CHANGE_ID: CLIENT_CHANGE_ID$1,
  CLIENT_CHANGE_ID_PREFIX: CLIENT_CHANGE_ID_PREFIX,
  NAME: NAME,
  LAST_NAME: LAST_NAME,
  TITLE: TITLE,
  ORGANIZATION_NAME: ORGANIZATION_NAME,
  FUNCTION: FUNCTION,
  OFFICE_ADDRESS: OFFICE_ADDRESS,
  CREATOR: CREATOR,
  ORGANISATION_CONTACTS: ORGANISATION_CONTACTS,
  ORGANISATION: ORGANISATION,
  EMAIL: EMAIL,
  VALUE: VALUE$1,
  PHONE: PHONE,
  EXTENSION_VALUE: EXTENSION_VALUE,
  TYPE: TYPE$1,
  FAX: FAX,
  TMP_FORM_ID: TMP_FORM_ID,
  TMP_UNIQUE_ID: TMP_UNIQUE_ID,
  TMP_HYDRATED: TMP_HYDRATED,
  TMP_ERRORS: TMP_ERRORS,
  TMP_CONTACT_LOADED: TMP_CONTACT_LOADED,
  TMP_CONTACT_LOADING: TMP_CONTACT_LOADING,
  TMP_ENTITY_VALIDATOR: TMP_ENTITY_VALIDATOR$1,
  TMP_FIELDS: TMP_FIELDS
});

/* eslint-disable class-methods-use-this */

var CurrencyRatesManager = function () {
  function CurrencyRatesManager(currencyRates, baseCurrency, translate, dateUtils, errorNotificationHelper) {
    classCallCheck(this, CurrencyRatesManager);

    this._currencyRates = currencyRates;
    this._baseCurrency = baseCurrency;
    this._currnciesWithExchangeRates = this._getCurrenciesWithExchangeRates();
    this._translate = translate;
    this._dateUtils = dateUtils;
    this._errorNotificationHelper = errorNotificationHelper;
  }

  /**
   * Set of currencies that has at least one exchange rate
   * @return {Set<any> | *}
   */


  createClass(CurrencyRatesManager, [{
    key: 'convertCurrency',


    /**
     * Currency conversion utility. If we have the direct rate it will convert from currencyFrom to currencyTo in the
     * given date. If we don't have the said currency it will try to search the inverse rate and use 1/x. If the inverse
     * rate is also not Available an error will be thrown
     * @param currencyFrom currency code from the currency we are converting from
     * @param currencyTo currency code from the currency we are converting to
     * @param dateToFind date for which we are doing the conversion. It is expected in yyyy-mm-dd
     * @returns {*|Promise.<TResult>}
     */
    value: function convertCurrency(currencyFrom, currencyTo, dateToFind, fixedExchangeRate) {
      if (currencyFrom === currencyTo) {
        return Constants.RATE_SAME_CURRENCY;
      }
      if (fixedExchangeRate && fixedExchangeRate > 0) {
        return this.convertCurrency(this._baseCurrency, currencyTo, dateToFind, null) / fixedExchangeRate;
      }
      var timeDateToFind = new Date(dateToFind + ' ' + Constants.CURRENCY_HOUR).getTime();
      if (this._currencyRates) {
        var currenciesToSearchDirect = this._currencyRates.find(function (item) {
          return item[Constants.CURRENCY_PAIR].from === currencyFrom && item[Constants.CURRENCY_PAIR].to === currencyTo;
        });
        if (currenciesToSearchDirect) {
          return this.getExchangeRate(currenciesToSearchDirect, timeDateToFind);
        } else {
          // direct not found
          var currenciesToSearchInverse = this._currencyRates.find(function (item) {
            return item[Constants.CURRENCY_PAIR].from === currencyTo && item[Constants.CURRENCY_PAIR].to === currencyFrom;
          });
          if (currenciesToSearchInverse) {
            return 1 / this.getExchangeRate(currenciesToSearchInverse, timeDateToFind);
          } else {
            return this.convertViaBaseCurrency(currencyFrom, currencyTo, timeDateToFind);
          }
        }
      } else {
        throw this._getCurrencyError('CurrencyRatesNotInitialized');
      }
    }
  }, {
    key: 'convertFundingDetailsToCurrency',
    value: function convertFundingDetailsToCurrency(fundingDetails, currencyTo) {
      var _this = this;

      var total = 0;
      fundingDetails.forEach(function (fd) {
        total += _this.convertTransactionAmountToCurrency(fd, currencyTo);
      });

      return total;
    }
  }, {
    key: 'convertTransactionAmountToBaseCurrency',
    value: function convertTransactionAmountToBaseCurrency(fundingDetail) {
      return this.convertTransactionAmountToCurrency(fundingDetail, this._baseCurrency);
    }
  }, {
    key: 'convertAmountToCurrency',
    value: function convertAmountToCurrency(amount, currencyFrom, date, fixedExchangeRate, currencyTo) {
      var currencyRate = this.convertCurrency(currencyFrom, currencyTo, this._dateUtils.formatDateForAPI(date), fixedExchangeRate);
      return amount * currencyRate;
    }
  }, {
    key: 'convertTransactionAmountToCurrency',
    value: function convertTransactionAmountToCurrency(fundingDetail, currencyTo) {
      var fixedExchangeRate = fundingDetail[ActivityConstants.FIXED_EXCHANGE_RATE];
      var currencyFrom = fundingDetail[ActivityConstants.CURRENCY].value;
      var transactionDate = fundingDetail[ActivityConstants.TRANSACTION_DATE];
      var transactionAmount = fundingDetail[ActivityConstants.TRANSACTION_AMOUNT];
      return this.convertAmountToCurrency(transactionAmount, currencyFrom, transactionDate, fixedExchangeRate, currencyTo);
    }
  }, {
    key: 'getExchangeRate',
    value: function getExchangeRate(currenciesToSearch, timeDateToFind) {
      var lowerEnd = 0;
      var higherEnd = currenciesToSearch.rates.length - 1;
      while (lowerEnd < higherEnd) {
        var middle = Math.floor((lowerEnd + higherEnd) / 2);
        var difference = Math.abs(new Date(currenciesToSearch.rates[middle].date + '  ' + Constants.CURRENCY_HOUR) - timeDateToFind);
        var difference1 = Math.abs(new Date(currenciesToSearch.rates[middle + 1].date + '  ' + Constants.CURRENCY_HOUR) - timeDateToFind);
        if (difference1 <= difference) {
          lowerEnd = middle + 1;
        } else {
          higherEnd = middle;
        }
      }
      return currenciesToSearch.rates[higherEnd].rate;
    }
  }, {
    key: '_getCurrencyError',
    value: function _getCurrencyError(errorMesage) {
      var notifErrorCurrency = this._errorNotificationHelper.createNotification({
        message: this._translate(errorMesage),
        origin: ErrorConstants.NOTIFICATION_ORIGIN_CURRENCY_MANAGER
      });
      return notifErrorCurrency;
    }
  }, {
    key: 'convertViaBaseCurrency',
    value: function convertViaBaseCurrency(currencyFrom, currencyTo, timeDateToFind) {
      var _this2 = this;

      var rateFromToBase = this._currencyRates.find(function (item) {
        return item[Constants.CURRENCY_PAIR].from === currencyFrom && item[Constants.CURRENCY_PAIR].to === _this2._baseCurrency;
      });
      var rateBaseToTo = this._currencyRates.find(function (item) {
        return item[Constants.CURRENCY_PAIR].from === _this2._baseCurrency && item[Constants.CURRENCY_PAIR].to === currencyTo;
      });
      if (rateFromToBase && rateBaseToTo) {
        // if we have both currencies we just return the product of ech rate
        return this.getExchangeRate(rateFromToBase, timeDateToFind) * this.getExchangeRate(rateBaseToTo, timeDateToFind);
      } else if (rateFromToBase) {
        // if either of them is not found we try to find the inverse
        // we get the inverse of rateBaseToTo
        var rateToToBase = this._currencyRates.find(function (item) {
          return item[Constants.CURRENCY_PAIR].from === currencyTo && item[Constants.CURRENCY_PAIR].to === _this2._baseCurrency;
        });
        if (rateToToBase) {
          return this.getExchangeRate(rateFromToBase, timeDateToFind) * (1 / this.getExchangeRate(rateToToBase, timeDateToFind));
        } else {
          return ErrorConstants.RATE_CURRENCY_NOT_FOUND;
        }
      } else if (rateBaseToTo) {
        var rateBaseToFrom = this._currencyRates.find(function (item) {
          return item[Constants.CURRENCY_PAIR].from === _this2._baseCurrency && item[Constants.CURRENCY_PAIR].to === currencyFrom;
        });
        // we try to get the inverse of rateFromToBase
        if (rateBaseToFrom) {
          return 1 / this.getExchangeRate(rateBaseToFrom, timeDateToFind) * this.getExchangeRate(rateBaseToTo, timeDateToFind);
        } else {
          return ErrorConstants.RATE_CURRENCY_NOT_FOUND;
        }
      } else {
        return ErrorConstants.RATE_CURRENCY_NOT_FOUND;
      }
    }
  }, {
    key: '_getCurrenciesWithExchangeRates',
    value: function _getCurrenciesWithExchangeRates() {
      var cs = new Set();
      if (this._currencyRates) {
        this._currencyRates.forEach(function (exchangeRates) {
          cs.add(exchangeRates[Constants.CURRENCY_PAIR].from);
          cs.add(exchangeRates[Constants.CURRENCY_PAIR].to);
        });
      }
      return cs;
    }
  }, {
    key: 'currenciesWithExchangeRates',
    get: function get$$1() {
      return this._currnciesWithExchangeRates;
    }
  }]);
  return CurrencyRatesManager;
}();

/**
 * Possible Values manager that allows to fill in additional information and transformations
 * @author Nadejda Mandrescu
 */

var PossibleValuesManager = function () {
  function PossibleValuesManager() {
    classCallCheck(this, PossibleValuesManager);
  }

  createClass(PossibleValuesManager, null, [{
    key: 'setLangState',
    value: function setLangState(langState) {
      PossibleValuesManager._langState = langState;
    }
  }, {
    key: 'setLogger',
    value: function setLogger(Logger) {
      PossibleValuesManager._logger = new Logger('Possible values manager');
    }
  }, {
    key: 'buildFormattedHierarchicalValues',
    value: function buildFormattedHierarchicalValues(options) {
      // TODO optimize
      var hOptions = {};
      Object.values(options).forEach(function (option) {
        hOptions[option.id] = PossibleValuesManager.buildHierarchicalData(options, option.id);
      });
      return hOptions;
    }
  }, {
    key: 'buildHierarchicalData',
    value: function buildHierarchicalData(options, selectedId) {
      var option = Object.assign({}, options[selectedId]);
      var valueParts = PossibleValuesManager.getHierarchicalValue(options, selectedId);
      option[ActivityConstants.HIERARCHICAL_VALUE] = PossibleValuesManager.formatValueParts(valueParts);
      option[ActivityConstants.HIERARCHICAL_VALUE_DEPTH] = valueParts && valueParts instanceof Array ? valueParts.length : 0;
      return option;
    }
  }, {
    key: 'getHierarchicalValue',
    value: function getHierarchicalValue(options, selectedId) {
      var nameParts = [];
      var current = options[selectedId];
      while (current) {
        nameParts.push(PossibleValuesManager.getOptionTranslation(current));
        current = options[current.parentId];
      }
      return nameParts;
    }
  }, {
    key: 'formatValueParts',
    value: function formatValueParts(valueParts) {
      return valueParts && valueParts instanceof Array ? '[' + valueParts.reverse().join('][') + ']' : valueParts;
    }

    /**
     * Fills hierarchical depth of each option
     * @param options
     */

  }, {
    key: 'fillHierarchicalDepth',
    value: function fillHierarchicalDepth(options) {
      Object.values(options).forEach(function (option) {
        PossibleValuesManager._fillHierarchicalDepth(options, option);
      });
      return options;
    }
  }, {
    key: '_fillHierarchicalDepth',
    value: function _fillHierarchicalDepth(options, option) {
      if (!option) {
        PossibleValuesManager._logger.error('option is unspecified: ' + option);
        return 0;
      }
      var depth = option[ActivityConstants.HIERARCHICAL_VALUE_DEPTH];
      if (depth === undefined) {
        // So far it is based on the current locations extra info approach
        if (option.parentId) {
          var parent = options[option.parentId];
          depth = 1 + PossibleValuesManager._fillHierarchicalDepth(options, parent);
        } else {
          depth = 0;
        }
        option[ActivityConstants.HIERARCHICAL_VALUE_DEPTH] = depth;
      }
      return depth;
    }
  }, {
    key: 'findOption',
    value: function findOption(options, id) {
      return Object.values(options).find(function (o) {
        return o.id === id;
      });
    }
  }, {
    key: 'findOptionByValue',
    value: function findOptionByValue(options, value) {
      return Object.values(options).find(function (o) {
        return o.value === value;
      });
    }
  }, {
    key: 'getOptionTranslation',
    value: function getOptionTranslation(option) {
      var resVal = option.value;
      var translations = option['translated-value'];
      if (translations !== undefined) {
        var langState = PossibleValuesManager._langState;
        resVal = translations[langState.lang] || translations[langState.defaultLang] || resVal;
      }
      return resVal;
    }
  }, {
    key: 'setVisibility',
    value: function setVisibility(options, fieldPath, currencyRatesManager, filters) {
      var isORFilter = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var selectedId = arguments[5];

      var isLocations = LOCATION_PATH === fieldPath;
      var isCurrency = PATHS_FOR_CURRENCY.has(fieldPath);
      options = _extends({}, options);
      Object.values(options).forEach(function (option) {
        option.visible = !isORFilter;
        if (isLocations) {
          option.displayHierarchicalValue = true;
        } else if (isCurrency) {
          option[FIELD_OPTION_USABLE] = PossibleValuesManager.isCurrencyOptionUsable(option, currencyRatesManager);
          if (!option[FIELD_OPTION_USABLE]) {
            option.visible = option.id === selectedId;
          }
        }
      });
      if (filters) {
        filters.forEach(function (filter) {
          var filterBy = filter.value;
          Object.values(options).forEach(function (option) {
            var optionDataToCheck = FieldsManager.getValue(option, filter.path);
            if ((isORFilter || option.visible) && optionDataToCheck && (optionDataToCheck instanceof Array && optionDataToCheck.includes(filterBy) || optionDataToCheck === filterBy)) {
              option.visible = true;
            } else if (isORFilter) ; else {
              option.visible = false;
            }
          });
        });
      }
      return options;
    }
  }, {
    key: 'isCurrencyOptionUsable',
    value: function isCurrencyOptionUsable(option, currencyRatesManager) {
      var hasExchangeRates = currencyRatesManager.currenciesWithExchangeRates.has(option.value);
      var isActive = option.extra_info && option.extra_info.active;
      return isActive && hasExchangeRates;
    }
  }, {
    key: 'getTreeSortedOptionsList',
    value: function getTreeSortedOptionsList(optionsObj, reverseSortOptions) {
      var added = new Set();
      var optionsList = [];
      var idsStack = Object.values(optionsObj).filter(function (o) {
        return !o.parentId;
      }).sort(reverseSortOptions).map(function (o) {
        return o.id;
      });
      while (idsStack.length) {
        var id = idsStack.pop();
        if (!added.has(id)) {
          var option = optionsObj[id];
          if (option.reverseSortedChildren) {
            idsStack.push.apply(idsStack, toConsumableArray(option.reverseSortedChildren));
          }
          added.add(id);
          optionsList.push(option);
        }
      }
      return optionsList;
    }
  }]);
  return PossibleValuesManager;
}();

PossibleValuesManager._langState = {
  lang: Constants.LANGUAGE_ENGLISH,
  defaultLang: Constants.LANGUAGE_ENGLISH
};

/* eslint-disable class-methods-use-this */
var FEATURE_MANAGER = 'Feature manager';

/**
 * Feature Manager
 * @author Nadejda Mandrescu
 */

var FeatureManager = function () {
  function FeatureManager(fmTree, LoggerManager) {
    classCallCheck(this, FeatureManager);

    this._fmTree = fmTree;
    if (LoggerManager) {
      this.loggerManager = LoggerManager;
    }
  }
  // eslint-disable-next-line no-undef


  createClass(FeatureManager, [{
    key: 'isFMSettingEnabled',
    value: function isFMSettingEnabled(fmPath, onlyLastSegment) {
      this._loggerManager.debug('isFMSettingEnabled');
      if (this._fmTree) {
        var lastFMSubTree = this._fmTree;
        var segments = this._getPathSegments(fmPath);
        var foundLastFMSubTree = segments.every(function (segment) {
          lastFMSubTree = lastFMSubTree[segment];
          return lastFMSubTree !== undefined && (lastFMSubTree.__enabled || onlyLastSegment);
        });
        return foundLastFMSubTree && lastFMSubTree.__enabled;
      }
      return false;
    }
  }, {
    key: 'hasFMSetting',
    value: function hasFMSetting(fmPath) {
      var fmSetting = this.findFMSetting(fmPath);
      return fmSetting && fmSetting.__enabled !== undefined;
    }
  }, {
    key: 'findFMSetting',
    value: function findFMSetting(fmPath) {
      var segments = this._getPathSegments(fmPath);
      return segments.reduce(function (currentFMSetting, segment) {
        return currentFMSetting && currentFMSetting[segment];
      }, this._fmTree || {});
    }
  }, {
    key: 'setFMSetting',
    value: function setFMSetting(fmPath, enabled) {
      if (this._fmTree) {
        var segments = this._getPathSegments(fmPath);
        var lastFMSubTree = segments.reduce(function (currentFMTree, segment) {
          var segmentFM = currentFMTree[segment];
          if (segmentFM === undefined) {
            segmentFM = {};
            currentFMTree[segment] = segmentFM;
          }
          return segmentFM;
        }, this._fmTree);
        lastFMSubTree.__enabled = enabled;
      }
    }
  }, {
    key: '_getPathSegments',
    value: function _getPathSegments(fmPath) {
      // ignore first "/" to exclude empty string from the split
      return fmPath.substring(1).split('/');
    }
  }, {
    key: 'fmTree',
    set: function set$$1(fmTree) {
      this._fmTree = fmTree;
    }
  }, {
    key: 'loggerManager',
    set: function set$$1(LoggerManager) {
      this._loggerManager = new LoggerManager(FEATURE_MANAGER);
    }
  }], [{
    key: 'setLoggerManager',
    value: function setLoggerManager(LoggerManager) {
      FeatureManager._currentFM.loggerManager = LoggerManager;
    }
  }, {
    key: 'setFMTree',
    value: function setFMTree(fmTree) {
      FeatureManager._currentFM.fmTree = fmTree;
    }

    /**
     * Checks if the given FM path is fully enabled or only last segment is enabled
     * @param fmPath the FM path, e.g. '/PROJECT MANAGEMENT/Funding/Funding Information/Delivery rate'
     * @param onlyLastSegment specifies if to check if only the last segment is enabled (the AMP behavior for some cases)
     * @return {boolean}
     */

  }, {
    key: 'isFMSettingEnabled',
    value: function isFMSettingEnabled(fmPath, onlyLastSegment) {
      return FeatureManager._currentFM.isFMSettingEnabled(fmPath, onlyLastSegment);
    }
  }, {
    key: 'hasFMSetting',
    value: function hasFMSetting(fmPath) {
      return FeatureManager._currentFM.hasFMSetting(fmPath);
    }
  }]);
  return FeatureManager;
}();

FeatureManager._currentFM = new FeatureManager();

var logger$1 = null;

var APLabel = function (_Component) {
  inherits(APLabel, _Component);

  function APLabel(props) {
    classCallCheck(this, APLabel);

    var _this = possibleConstructorReturn(this, (APLabel.__proto__ || Object.getPrototypeOf(APLabel)).call(this, props));

    var Logger = _this.props.Logger;

    logger$1 = new Logger('AP Label');
    logger$1.debug('constructor');
    return _this;
  }

  createClass(APLabel, [{
    key: 'getContent',
    value: function getContent() {
      var translate = this.props.translate;

      var label = this.props.dontTranslate === true ? this.props.label : translate(this.props.label);
      var labelClass = this.props.labelClass ? this.props.labelClass : '';
      return React__default.createElement(
        'div',
        { className: labelClass },
        React__default.createElement(
          'span',
          null,
          label
        ),
        this.props.separator ? React__default.createElement('hr', null) : ''
      );
    }
  }, {
    key: 'tooltip',
    value: function tooltip() {
      var _props = this.props,
          tooltip = _props.tooltip,
          dontTranslate = _props.dontTranslate,
          translate = _props.translate;

      return React__default.createElement(
        reactBootstrap.Tooltip,
        { id: 'tooltip' },
        dontTranslate ? tooltip : translate(this.props.tooltip)
      );
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.tooltip) {
        return React__default.createElement(
          reactBootstrap.OverlayTrigger,
          { placement: 'right', overlay: this.tooltip() },
          this.getContent()
        );
      } else {
        return this.getContent();
      }
    }
  }]);
  return APLabel;
}(React.Component);

APLabel.propTypes = {
  label: React.PropTypes.string.isRequired,
  dontTranslate: React.PropTypes.bool,
  labelClass: React.PropTypes.string,
  /* decorator: PropTypes.func, // TODO: To be implemented. */
  separator: React.PropTypes.bool,
  tooltip: React.PropTypes.string
};

var css$1 = ".ActivityPreview_preview_container__1LGrB {\n  font-family: 'open_sansregular', sans-serif;\n  margin-left: 30px;\n  margin-right: 50px;\n}\n\n.ActivityPreview_preview_title__uRjjt {\n  margin-left: 10px;\n  background-color: #FFFFFF;\n  color: #000000;\n  font-size: 1.5em;\n  font-weight: bold;\n  padding: 5px;\n  height: auto;\n  display: inline-block;\n}\n\n.ActivityPreview_preview_icons__1lBrL {\n  display: inline-block;\n}\n\n.ActivityPreview_preview_icons__1lBrL img {\n  height: 20px;\n  width: 20px;\n}\n\n.ActivityPreview_preview_icons__1lBrL object {\n  height: 20px;\n  width: 20px;\n}\n\n.ActivityPreview_preview_icons__1lBrL ul {\n  margin-left: 30px;\n  columns: 5;\n  column-rule: 1px solid #ebebeb;\n}\n\n.ActivityPreview_preview_icons__1lBrL ul li {\n  list-style-type: none;\n  margin-left: 10px;\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.ActivityPreview_preview_status_container__1HinM {\n  margin-left: 10px;\n  margin-top: 20px;\n  padding: 10px;\n  background-color: #f5faff;\n}\n\n.ActivityPreview_inline_flex__3wThV {\n  display: inline-flex;\n}\n\n.ActivityPreview_preview_status_title__3D29a {\n  margin-left: 10px;\n  margin-right: 5px;\n}\n\n.ActivityPreview_preview_status_detail__1qlPG {\n  font-family: 'open_sansextrabold', sans-serif;\n  margin-right: 20px;\n}\n\n.ActivityPreview_status_title_class__2GzI5 {\n\n}\n\n.ActivityPreview_status_group_class__1E1xM {\n\n}\n\n.ActivityPreview_preview_categories__36Zqn {\n  margin-top: 20px;\n  margin-left: 15px;\n  border-bottom: 1px solid #ebebeb;\n}\n\n.ActivityPreview_preview_categories__36Zqn ul {\n  columns: 5;\n  column-rule: 1px solid #ebebeb;\n  line-height: 150%;\n}\n\n.ActivityPreview_preview_categories__36Zqn ul li {\n  list-style-type: none;\n  font-size: 0.9em;\n  font-weight: bold;\n  color: #778293;\n  margin-left: 20px;\n  padding-left: 4px;\n  cursor: pointer;\n}\n\n.ActivityPreview_preview_categories__36Zqn ul li:hover {\n  color: #1d2531;\n  background-color: #f8f8f8;\n  position: relative;\n}\n\n.ActivityPreview_preview_categories__36Zqn ul li:hover:after {\n  /* content: url('../../../assets/images/arrow.svg'); */\n  height: 14px;\n  width: 14px;\n  display: block;\n  position: absolute;\n  left: -13px;\n  top: 2px;\n}\n\n.ActivityPreview_preview_category_selected__3__Py {\n  color: #1d2531;\n  /* background-color: #f8f8f8; */\n  position: relative;\n}\n\n.ActivityPreview_preview_category_selected__3__Py:after {\n  /* content: url('../../../assets/images/arrow.svg'); */\n  height: 14px;\n  width: 14px;\n  display: block;\n  position: absolute;\n  left: -13px;\n  top: 2px;\n}\n\n.ActivityPreview_preview_content__3Tcic {\n  vertical-align: top;\n}\n\n.ActivityPreview_preview_summary__2dz4C {\n  width: 300px;\n}\n\n.ActivityPreview_summary_container__67F1x {\n  margin-top: 30px;\n  padding-right: 20px;\n}\n\n.ActivityPreview_summary_section_title__1N_El {\n  background-color: #3a84b3;\n  color: #FFFFFF;\n  font-size: 1.3em;\n  margin-bottom: 15px;\n  margin-top: 30px;\n  padding-top: 15px;\n  padding-bottom: 10px;\n  padding-left: 20px;\n  padding-right: 20px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  display: block;\n}\n\n.ActivityPreview_summary_section_group__1tEx2 {\n  background-color: #f5faff;\n  margin-top: 15px;\n  padding-bottom: 10px;\n}\n\n.ActivityPreview_summary_field_name__3dhpq {\n  padding-left: 15px;\n}\n\n.ActivityPreview_summary_field_value__Ju6sE {\n  padding-left: 15px;\n  font-family: 'open_sansextrabold', sans-serif;\n  margin-bottom: 15px;\n}\n\n.ActivityPreview_main_group_container__3goI9 {\n  margin-top: 30px;\n}\n\n.ActivityPreview_section_title_class__2nd28 {\n  font-size: 1.3em;\n  font-weight: bold;\n  margin-bottom: 15px;\n  margin-top: 30px;\n}\n\n.ActivityPreview_section_group_class__31xyk {\n  margin-right: 10px;\n  margin-bottom: 20px;\n}\n\n.ActivityPreview_section_subtitle_class__34GnZ {\n  font-size: 1.1em;\n  font-weight: bold;\n  padding-bottom: 15px;\n  padding-top: 15px;\n  width: 100%;\n}\n\n.ActivityPreview_section_field_name__1O_Kg {\n  font-size: 0.85em;\n  color: #767676;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n\n.ActivityPreview_section_field_value__X9FTN {\n  font-weight: bold;\n  border-bottom: 1px solid #ebebeb;\n  margin-bottom: 10px;\n  padding-bottom: 10px;\n}\n\n.ActivityPreview_box_container__2Q6KF {\n  border: 1px solid #ebebeb;\n}\n\n.ActivityPreview_box_table__39dkc {\n  border-top: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.ActivityPreview_box_table__39dkc td {\n  width: 33%;\n  padding-left: 20px;\n  border-bottom: 1px solid #ebebeb;\n}\n\n.ActivityPreview_box_table__39dkc tr td:nth-child(2) {\n  border: 1px solid #ebebeb;\n}\n\n.ActivityPreview_two_box_table__3Brzk {\n  border-top: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n  width: 100%;\n}\n\n.ActivityPreview_two_box_table__3Brzk td {\n  width: 50%;\n  padding-left: 20px;\n}\n\n.ActivityPreview_two_box_table__3Brzk tr td:first-child {\n  border-right: 1px solid #ebebeb;\n}\n\n.ActivityPreview_box_field_name__22YmB {\n  font-size: 0.85em;\n  color: #767676;\n  font-weight: bold;\n  padding-top: 10px;\n  padding-bottom: 5px;\n}\n\n.ActivityPreview_box_field_value__-O8Yl {\n  font-weight: bold;\n  padding-bottom: 10px;\n}\n\n.ActivityPreview_box_field_value_tight__vYQNU {\n  font-weight: bold;\n}\n\n.ActivityPreview_percent_field_name__200lD {\n  display: inline-block;\n  font-weight: bold;\n  padding-top: 10px;\n  padding-bottom: 5px;\n  margin-left: 10px;\n  width: 70%;\n}\n\n.ActivityPreview_percent_field_value__o3aHW {\n  display: inline-block;\n  color: #3a84b3;\n  font-weight: bold;\n  width: 15%;\n  padding-left: 5%;\n  padding-top: 10px;\n  vertical-align: top;\n}\n\n.ActivityPreview_project_cost_left__36wwp {\n  display: inline-block;\n  width: 55%;\n  background-color: #f8fff5;\n  margin-left: 10px;\n  padding-left: 20px;\n  padding-top: 10px;\n  border-top: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n  border-right: 1px solid #ebebeb;\n}\n\n.ActivityPreview_project_cost_right__3cRRw {\n  display: inline-block;\n  width: 43%;\n  padding-left: 20px;\n  padding-top: 10px;\n  border-top: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n}\n\n.ActivityPreview_project_cost_title__1_6ht {\n  display: block;\n  font-size: 0.85em;\n  color: #767676;\n  font-weight: bold;\n  margin-bottom: 5px\n}\n\n.ActivityPreview_project_cost_currency__H3Kv- {\n  display: block;\n  width: 100%;\n  font-size: 2em;\n  text-align: right;\n  padding-bottom: 10px;\n  padding-right: 10px;\n}\n\n.ActivityPreview_project_cost_date__OO0eE {\n  display: block;\n  width: 100%;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  font-weight: bold;\n  line-height: 30px;\n}\n\n.ActivityPreview_sector_title__U2dSa {\n  background-color: #f4f4f4;\n  color: #9d9d9d;\n  border-top: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n  padding: 8px;\n  margin-bottom: 15px;\n  font-size: 0.85em;\n  font-weight: bold;\n}\n\n.ActivityPreview_inline__vfRr8 {\n  display: inline;\n}\n\n.ActivityPreview_block__1Hvq2 {\n  display: block;\n}\n\n.ActivityPreview_flex__2ybx- {\n  display: flex;\n}\n\n.ActivityPreview_hidden__5WQ6_ {\n  display: none;\n}\n\n.ActivityPreview_table_raw__2dpBx {\n  display: table-row;\n}\n\n\n.ActivityPreview_alignRight__3VvbU {\n  text-align: right;\n}\n\n.ActivityPreview_tableCell__KHoJx {\n  padding-left: 10px;\n}\n\n.ActivityPreview_tableValue__3IHV- {\n  width: 100%;\n  float: left;\n  font-weight: bold;\n}\n\n.ActivityPreview_paddingBottom__2Fm60 {\n  padding-bottom: 10px;\n}\n\n.ActivityPreview_paddingBottomLarge__2YK8I {\n  padding-bottom: 20px;\n}\n\n.ActivityPreview_box_table2__2CnHv {\n  width: 100%;\n}\n\n.ActivityPreview_box_table2__2CnHv td {\n  width: 33%;\n  padding-left: 20px;\n}\n\n.ActivityPreview_box_table2__2CnHv tr td:nth-child(2) {\n  border-left: 1px solid #ebebeb;\n  border-right: 1px solid #ebebeb;\n}\n\n.ActivityPreview_tablify_inner_cell__r4tTo {\n  display: inline-block;\n  padding-bottom: 5px;\n  border-left: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n}\n\n.ActivityPreview_tablify_outer_cell__5akw5 {\n  display: inline-block;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #ebebeb;\n}\n\n.ActivityPreview_nodata__1zNpF {\n  padding-left: 10px;\n  padding-bottom: 10px;\n  vertical-align: top;\n  font-weight: bold;\n}\n\n.ActivityPreview_noborder__1s8AZ {\n  border: 0;\n}\n\n.ActivityPreview_top_warning_text__kQuPV {\n  color: red;\n  margin-left: 10px;\n  padding: 5px;\n  display: inline-block;\n  width: 100%;\n}\n\n.ActivityPreview_structure_title__2UUP_ {\n  background-color: #f4f4f4;\n  color: #3a84b3;\n  border: 1px solid #ebebeb;\n  padding: 8px;\n  margin-bottom: 15px;\n  font-size: 1.2em;\n  font-weight: bold;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n\n.ActivityPreview_structures_coordinates_table__1LgUt {\n  width: 50%;\n}\n\n.ActivityPreview_structures_coordinates_value__2mhL9 {\n  border: none;\n  font-weight: bold;\n}\n";
var styles$1 = { "preview_container": "ActivityPreview_preview_container__1LGrB", "preview_title": "ActivityPreview_preview_title__uRjjt", "preview_icons": "ActivityPreview_preview_icons__1lBrL", "preview_status_container": "ActivityPreview_preview_status_container__1HinM", "inline_flex": "ActivityPreview_inline_flex__3wThV", "preview_status_title": "ActivityPreview_preview_status_title__3D29a", "preview_status_detail": "ActivityPreview_preview_status_detail__1qlPG", "status_title_class": "ActivityPreview_status_title_class__2GzI5", "status_group_class": "ActivityPreview_status_group_class__1E1xM", "preview_categories": "ActivityPreview_preview_categories__36Zqn", "preview_category_selected": "ActivityPreview_preview_category_selected__3__Py", "preview_content": "ActivityPreview_preview_content__3Tcic", "preview_summary": "ActivityPreview_preview_summary__2dz4C", "summary_container": "ActivityPreview_summary_container__67F1x", "summary_section_title": "ActivityPreview_summary_section_title__1N_El", "summary_section_group": "ActivityPreview_summary_section_group__1tEx2", "summary_field_name": "ActivityPreview_summary_field_name__3dhpq", "summary_field_value": "ActivityPreview_summary_field_value__Ju6sE", "main_group_container": "ActivityPreview_main_group_container__3goI9", "section_title_class": "ActivityPreview_section_title_class__2nd28", "section_group_class": "ActivityPreview_section_group_class__31xyk", "section_subtitle_class": "ActivityPreview_section_subtitle_class__34GnZ", "section_field_name": "ActivityPreview_section_field_name__1O_Kg", "section_field_value": "ActivityPreview_section_field_value__X9FTN", "box_container": "ActivityPreview_box_container__2Q6KF", "box_table": "ActivityPreview_box_table__39dkc", "two_box_table": "ActivityPreview_two_box_table__3Brzk", "box_field_name": "ActivityPreview_box_field_name__22YmB", "box_field_value": "ActivityPreview_box_field_value__-O8Yl", "box_field_value_tight": "ActivityPreview_box_field_value_tight__vYQNU", "percent_field_name": "ActivityPreview_percent_field_name__200lD", "percent_field_value": "ActivityPreview_percent_field_value__o3aHW", "project_cost_left": "ActivityPreview_project_cost_left__36wwp", "project_cost_right": "ActivityPreview_project_cost_right__3cRRw", "project_cost_title": "ActivityPreview_project_cost_title__1_6ht", "project_cost_currency": "ActivityPreview_project_cost_currency__H3Kv-", "project_cost_date": "ActivityPreview_project_cost_date__OO0eE", "sector_title": "ActivityPreview_sector_title__U2dSa", "inline": "ActivityPreview_inline__vfRr8", "block": "ActivityPreview_block__1Hvq2", "flex": "ActivityPreview_flex__2ybx-", "hidden": "ActivityPreview_hidden__5WQ6_", "table_raw": "ActivityPreview_table_raw__2dpBx", "alignRight": "ActivityPreview_alignRight__3VvbU", "tableCell": "ActivityPreview_tableCell__KHoJx", "tableValue": "ActivityPreview_tableValue__3IHV-", "paddingBottom": "ActivityPreview_paddingBottom__2Fm60", "paddingBottomLarge": "ActivityPreview_paddingBottomLarge__2YK8I", "box_table2": "ActivityPreview_box_table2__2CnHv", "tablify_inner_cell": "ActivityPreview_tablify_inner_cell__r4tTo", "tablify_outer_cell": "ActivityPreview_tablify_outer_cell__5akw5", "nodata": "ActivityPreview_nodata__1zNpF", "noborder": "ActivityPreview_noborder__1s8AZ", "top_warning_text": "ActivityPreview_top_warning_text__kQuPV", "structure_title": "ActivityPreview_structure_title__2UUP_", "structures_coordinates_table": "ActivityPreview_structures_coordinates_table__1LgUt", "structures_coordinates_value": "ActivityPreview_structures_coordinates_value__2mhL9" };
styleInject(css$1);

var logger$2 = null;

/**
 * Simple Field component that consists of a field title and field value
 * @author Nadejda Mandrescu
 */

var APField = function (_Component) {
  inherits(APField, _Component);
  createClass(APField, null, [{
    key: 'instance',


    /**
     * Gets an instance of Simple Field
     * @param trnLabel the label to translate and use as a title. This label is also used as the component key.
     * @param value the field value
     * @param inline show title and value in the same row.
     * @param separator add or not an <hr> tag.
     * @param nameClass css class for the field label
     * @param valueClass css class for the field value
     * @param translate the translation function
     * @param logger the LoggerManager
     * @return {SimpleField}
     */
    value: function instance(trnLabel, value) {
      var inline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var separator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var nameClass = arguments[4];
      var valueClass = arguments[5];
      var translate = arguments[6];
      var logger = arguments[7];

      return React__default.createElement(APField, {
        key: trnLabel, title: translate(trnLabel), value: value, inline: inline, separator: separator,
        fieldNameClass: nameClass, fieldValueClass: valueClass, translate: translate, Logger: logger });
    }
  }]);

  function APField(props) {
    classCallCheck(this, APField);

    var _this = possibleConstructorReturn(this, (APField.__proto__ || Object.getPrototypeOf(APField)).call(this, props));

    var Logger = _this.props.Logger;

    logger$2 = new Logger('AP field');
    logger$2.log('constructor');
    _this.useSeparator = _this.props.separator !== false;
    _this.displayClass = _this.props.fieldClass || (_this.props.inline === true ? styles$1.inline : styles$1.block);
    return _this;
  }

  createClass(APField, [{
    key: '_getValue',
    value: function _getValue() {
      var translate = this.props.translate;

      var classNames = this.props.fieldValueClass + ' ' + this.displayClass;
      // To handle boolean fields we dont want to show 'false' as 'No Data'.
      var value = this.props.value || this.props.value === false ? this.props.value : translate('No Data');
      var displayValue = void 0;
      if (Array.isArray(value)) {
        if (value[0] instanceof Object) {
          displayValue = [];
          value.forEach(function (v) {
            return displayValue.push(v);
          });
        } else {
          displayValue = value.sort().join(', ');
        }
      } else if (typeof value === 'boolean') {
        displayValue = value === true ? translate('Yes') : translate('No');
      } else {
        displayValue = this.props.inline && this.props.value instanceof String ? value + ' ' : value;
      }
      if (this.props.useInnerHTML) {
        return React__default.createElement('div', { className: classNames, dangerouslySetInnerHTML: { __html: displayValue } });
      } else {
        return React__default.createElement(
          'div',
          { className: classNames },
          displayValue
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var classNames = this.props.fieldNameClass + ' ' + this.displayClass;
      return React__default.createElement(
        'div',
        { className: this.displayClass },
        React__default.createElement(
          'div',
          { className: classNames },
          this.props.title
        ),
        this._getValue(),
        this.useSeparator ? React__default.createElement('hr', null) : ''
      );
    }
  }]);
  return APField;
}(React.Component);

APField.propTypes = {
  title: React.PropTypes.string,
  value: React.PropTypes.any,
  inline: React.PropTypes.bool,
  useInnerHTML: React.PropTypes.bool,
  fieldClass: React.PropTypes.string,
  fieldNameClass: React.PropTypes.string,
  fieldValueClass: React.PropTypes.string,
  separator: React.PropTypes.bool
};

var logger$3 = null;

/**
 * Component for converting content to table form
 * @author Anya Marshall
 */

var Tablify = function (_Component) {
  inherits(Tablify, _Component);
  createClass(Tablify, null, [{
    key: 'addRows',


    /**
     * Takes an array and turns it into table rows and columns.
     * @author Anya Marshall
     * @param content content for table
     * @param cols number of columns
     */
    value: function addRows(content, cols) {
      // Remove undefined cells.
      content = content.filter(function (c) {
        return c;
      });
      // Decrease number of cols if we dont have enough elements.
      if (content.length < cols) {
        cols = content.length;
      }
      var rows = Math.ceil(content.length / cols);
      var tableContent = [];

      for (var i = 0; i < rows; i++) {
        var rowContent = [];
        for (var j = 0; j < cols; j++) {
          rowContent.push(React__default.createElement(
            'td',
            { key: UIUtils.stringToUniqueId() },
            content.pop()
          ));
        }
        tableContent.push(React__default.createElement(
          'tr',
          { key: UIUtils.stringToUniqueId() },
          rowContent
        ));
      }
      return tableContent;
    }
  }]);

  function Tablify(props) {
    classCallCheck(this, Tablify);

    var _this = possibleConstructorReturn(this, (Tablify.__proto__ || Object.getPrototypeOf(Tablify)).call(this, props));

    var Logger = _this.props.Logger;

    logger$3 = new Logger('tablify');
    logger$3.log('constructor');
    return _this;
  }

  createClass(Tablify, [{
    key: 'render',
    value: function render() {
      var columns = this.props.columns >= this.props.content.length ? this.props.content.length : this.props.columns;
      var cellWidth = 100 / columns + '%';
      var cellwidthStyle = {
        width: cellWidth
      };
      var rows = Math.ceil(this.props.content.length / columns);
      var tableContent = [];
      for (var i = 0; i < rows; i++) {
        var rowContent = [];
        rowContent.push(React__default.createElement(
          'div',
          { key: UIUtils.stringToUniqueId(), style: cellwidthStyle,
            className: styles$1.tablify_outer_cell },
          this.props.content.pop()
        ));
        for (var j = 1; j < this.props.columns && this.props.content.length > 0; j++) {
          var key = UIUtils.stringToUniqueId();
          rowContent.push(React__default.createElement(
            'div',
            { key: key, style: cellwidthStyle, className: styles$1.tablify_inner_cell },
            this.props.content.pop()
          ));
        }
        tableContent.push(React__default.createElement(
          'div',
          { key: UIUtils.stringToUniqueId(), className: styles$1.flex },
          rowContent
        ));
      }
      return React__default.createElement(
        'div',
        null,
        tableContent
      );
    }
  }]);
  return Tablify;
}(React.Component);

Tablify.propTypes = {
  content: PropTypes.any,
  columns: PropTypes.number
};

var logger$4 = null;

/**
 * Percentage Field component
 * @author Nadejda Mandrescu
 */

var APPercentageField = function (_Component) {
  inherits(APPercentageField, _Component);

  function APPercentageField(props) {
    classCallCheck(this, APPercentageField);

    var _this = possibleConstructorReturn(this, (APPercentageField.__proto__ || Object.getPrototypeOf(APPercentageField)).call(this, props));

    var Logger = _this.props.Logger;

    logger$4 = new Logger('AP percentage field');
    logger$4.log('constructor');
    return _this;
  }

  createClass(APPercentageField, [{
    key: 'render',
    value: function render() {
      var rawNumberToFormattedString = this.props.rawNumberToFormattedString;

      var percentage = this.props.value !== undefined && this.props.value !== null ? rawNumberToFormattedString(this.props.value, true) + '%' : null;
      return React__default.createElement(
        'div',
        null,
        React__default.createElement(
          'span',
          { className: this.props.titleClass },
          this.props.title,
          ' '
        ),
        React__default.createElement(
          'span',
          { className: this.props.valueClass + ' ' + styles$1.alignRight },
          percentage
        )
      );
    }
  }]);
  return APPercentageField;
}(React.Component);

APPercentageField.propTypes = {
  title: React.PropTypes.string.isRequired,
  value: React.PropTypes.number,
  titleClass: React.PropTypes.string,
  valueClass: React.PropTypes.string,
  Logger: React.PropTypes.func.isRequired,
  rawNumberToFormattedString: React.PropTypes.func.isRequired
};

var logger$5 = null;

/**
 * Activity Preview Percentage List type section
 * @author Nadejda Mandrescu
 */
var APPercentageList = function APPercentageList(listField, valueField, percentageField) {
  var _class, _temp;

  var listTitle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  return _temp = _class = function (_Component) {
    inherits(_class, _Component);

    function _class(props) {
      classCallCheck(this, _class);

      var _this = possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

      var Logger = _this.props.Logger;

      logger$5 = new Logger('AP percentage list');
      logger$5.debug('constructor');
      return _this;
    }

    createClass(_class, [{
      key: 'getItemTitle',
      value: function getItemTitle(item) {
        if (this.props.getItemTitle) {
          return this.props.getItemTitle(item);
        }
        var obj = item[valueField];
        return obj[ActivityConstants.HIERARCHICAL_VALUE] ? obj[ActivityConstants.HIERARCHICAL_VALUE] : PossibleValuesManager.getOptionTranslation(obj);
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            translate = _props.translate,
            activityFieldsManager = _props.activityFieldsManager,
            percentTitleClass = _props.percentTitleClass,
            fmPath = _props.fmPath,
            activity = _props.activity,
            columns = _props.columns,
            tablify = _props.tablify,
            percentValueClass = _props.percentValueClass,
            fieldNameClass = _props.fieldNameClass,
            fieldValueClass = _props.fieldValueClass,
            Logger = _props.Logger,
            rawNumberToFormattedString = _props.rawNumberToFormattedString;

        var title = listTitle ? translate(listTitle) : null;
        var items = activity[listField];
        var content = null;
        var isListEnabled = activityFieldsManager.isFieldPathEnabled(listField) === true;
        if (fmPath) {
          isListEnabled = FeatureManager.isFMSettingEnabled(fmPath) ? isListEnabled : false;
        }
        if (isListEnabled) {
          if (items && items.length) {
            items = items.map(function (item) {
              return {
                itemTitle: _this2.getItemTitle(item),
                percentage: item[percentageField]
              };
            }).sort(function (a, b) {
              return a.itemTitle.localeCompare(b.itemTitle);
            });
            content = items.map(function (_ref) {
              var itemTitle = _ref.itemTitle,
                  percentage = _ref.percentage;
              return React__default.createElement(APPercentageField, {
                key: UIUtils.stringToUniqueId(itemTitle), title: itemTitle, value: percentage,
                titleClass: percentTitleClass, valueClass: percentValueClass, translate: translate,
                Logger: Logger, rawNumberToFormattedString: rawNumberToFormattedString });
            });
            if (tablify) {
              content = React__default.createElement(Tablify, { content: content, columns: columns, Logger: Logger });
            }
            content = React__default.createElement(APField, {
              key: listField, title: title, value: content, separator: false, inline: tablify === true,
              fieldNameClass: fieldNameClass, fieldValueClass: fieldValueClass,
              translate: translate, Logger: Logger });
          } else {
            content = React__default.createElement(APField, {
              key: listField, title: title, value: translate('No Data'), separator: false,
              inline: tablify === true,
              fieldNameClass: fieldNameClass, fieldValueClass: styles$1.nodata,
              translate: translate, Logger: Logger });
          }
        }
        return content;
      }
    }]);
    return _class;
  }(React.Component), _class.propTypes = {
    activity: PropTypes.object.isRequired,
    activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
    fieldNameClass: PropTypes.string,
    fieldValueClass: PropTypes.string,
    percentTitleClass: PropTypes.string,
    percentValueClass: PropTypes.string,
    tablify: PropTypes.bool,
    columns: PropTypes.number,
    fmPath: PropTypes.string,
    getItemTitle: PropTypes.func,
    Logger: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired
  }, _temp;
};

var logger$6 = null;

/**
 * Generic activity preview section class
 * @author Nadejda Mandrescu
 */
// const Section = (ComposedSection, SectionTitle = null, useEncapsulateHeader = true, sID) => class extends Component {
var Section = function Section(ComposedSection, params) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    inherits(_class, _Component);

    function _class(props, context) {
      classCallCheck(this, _class);

      var _this = possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props, context));

      if (_this.context) {
        params.Logger = _this.context.Logger;
        params.DateUtils = _this.context.DateUtils;
        params.translate = _this.context.translate;
      }
      params.useEncapsulateHeader = !params.useEncapsulateHeader ? true : params.useEncapsulateHeader;
      logger$6 = new params.Logger('AP section');
      logger$6.debug('constructor');
      return _this;
    }

    /**
     * Renders field data if it is enabled in FM. If renabled, but value is not available, then it will not be rendered,
     * unless it is requested via showIfNotAvailable flag.
     * @param path field path
     * @param showIfNotAvailable flag to forcibly display the field when no value is provided
     * @param NAOptions optional set of values that should be treated as undefined
     * @param inline optional flag to render name and values on the same line
     * @param parent optional object where we look for the path (instead of the activity root).
     * @param fieldsManager (optional) custom fields manager. Activity Fields Manager used by default.
     * @return {null|APField}
     */


    createClass(_class, [{
      key: 'buildSimpleField',
      value: function buildSimpleField(path, showIfNotAvailable, NAOptions) {
        var inline = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var parent = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        var fieldsManager = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
        var options = arguments[6];

        var options_ = options || {};
        var fmPath = FieldPathConstants.ACTIVITY_FIELDS_FM_PATH[path];
        fieldsManager = fieldsManager || this.context.activityFieldsManager;
        if (fieldsManager.isFieldPathEnabled(path) && (!fmPath || FeatureManager.isFMSettingEnabled(fmPath, false))) {
          var title = options_.noTitle ? '' : fieldsManager.getFieldLabelTranslation(path);
          var valuePath = path;
          if (parent) {
            var fieldPathParts = path.split('~');
            valuePath = fieldPathParts[fieldPathParts.length - 1];
          }
          var alternatePath = FieldPathConstants.ALTERNATE_VALUE_PATH[valuePath];
          var value = fieldsManager.getValue(parent || this.context.activity, valuePath, PossibleValuesManager.getOptionTranslation);
          if ((value === null || value === undefined) && alternatePath) {
            value = fieldsManager.getValue(this.context.activity, alternatePath, PossibleValuesManager.getOptionTranslation);
          }
          var fieldDef = fieldsManager.getFieldDef(path);
          if (fieldDef.field_type === FieldPathConstants.FIELD_TYPE_DATE) {
            value = params.DateUtils.createFormattedDate(value);
          } else if (fieldDef.field_type === FieldPathConstants.FIELD_TYPE_TIMESTAMP) {
            // matching AP online to format as date for now
            value = params.DateUtils.createFormattedDate(value);
          } else if (Array.isArray(value) && !value.length) {
            value = null;
          }
          value = NAOptions && NAOptions.has(value) ? null : value;

          var re = /^\s?$/; // check for whitespace
          if (re.test(value)) value = value.trim(); // check for whitespace
          if (value === '' || value === null) {
            value = params.translate('No Data');
          }
          if (showIfNotAvailable === true || value !== undefined && value !== null) {
            var useInnerHTML = FieldPathConstants.RICH_TEXT_FIELDS.has(path);
            return React__default.createElement(APField, {
              key: UIUtils.stringToUniqueId(path), title: title, value: value, useInnerHTML: useInnerHTML,
              inline: inline,
              separator: false,
              fieldClass: options_.fieldClass || this.props.fieldClass,
              fieldNameClass: this.props.fieldNameClass,
              fieldValueClass: options_.fieldValueClass || this.props.fieldValueClass,
              translate: params.translate, Logger: params.Logger });
          }
        }
      }
    }, {
      key: 'render',
      value: function render() {
        if (this.props.sectionPath && !this.context.activityFieldsManager.isFieldPathEnabled(this.props.sectionPath)) {
          return null;
        }
        if (this.props.fmPath && !FeatureManager.isFMSettingEnabled(this.props.fmPath)) {
          return null;
        }
        var composedSection = React__default.createElement(ComposedSection, _extends({}, this.props, this.state, this.context, { buildSimpleField: this.buildSimpleField.bind(this) }));
        if (params.useEncapsulateHeader === false) {
          return composedSection;
        }
        // TODO iteration 2+ section toggle (TDC based on desgin + VG)
        return React__default.createElement(
          'div',
          { key: params.SectionTitle, className: this.props.groupClass, id: params.sID },
          React__default.createElement(
            'div',
            { className: this.props.titleClass },
            React__default.createElement(
              'span',
              null,
              params.translate(params.SectionTitle),
              ' '
            ),
            React__default.createElement(
              'span',
              null,
              this.props.titleDetails
            )
          ),
          React__default.createElement(
            'div',
            { className: this.props.composedClass },
            composedSection
          )
        );
      }
    }]);
    return _class;
  }(React.Component), _class.propTypes = {
    titleDetails: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    sectionPath: PropTypes.string,
    titleClass: PropTypes.string,
    groupClass: PropTypes.string,
    composedClass: PropTypes.string,
    fieldNameClass: PropTypes.string,
    fieldValueClass: PropTypes.string,
    fmPath: PropTypes.string,
    fieldClass: PropTypes.string
  }, _class.contextTypes = {
    activity: PropTypes.object.isRequired,
    activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
    contactFieldsManager: PropTypes.instanceOf(FieldsManager),
    contactsByIds: PropTypes.object.isRequired,
    activityFundingTotals: PropTypes.object.isRequired, // Will change this if ActivityFundingTotals is migrated
    // PropTypes.instanceOf(params.ActivityFundingTotals).isRequired,
    activityWorkspace: PropTypes.object.isRequired,
    activityWSManager: PropTypes.object.isRequired,
    resourceReducer: PropTypes.object.isRequired,
    Logger: PropTypes.func,
    translate: PropTypes.func,
    DateUtils: PropTypes.func
  }, _class.defaultProps = {
    titleClass: styles$1.section_title_class,
    groupClass: styles$1.section_group_class,
    fieldNameClass: styles$1.section_field_name,
    fieldValueClass: styles$1.section_field_value
  }, _temp;
};

var logger$7 = null;

/* eslint-disable class-methods-use-this */

/**
 * Funding Totals Summary section
 * @author Nadejda Mandrescu
 */

var FundingSummary = function (_Component) {
  inherits(FundingSummary, _Component);

  function FundingSummary(props) {
    classCallCheck(this, FundingSummary);

    var _this = possibleConstructorReturn(this, (FundingSummary.__proto__ || Object.getPrototypeOf(FundingSummary)).call(this, props));

    var Logger = _this.props.Logger;

    logger$7 = new Logger('Funding summary');
    logger$7.debug('constructor');
    return _this;
  }

  /**
   * Builds "Funding Information" section by following AMP Activity Preview rules
   * @return {Section}
   * @private
   */


  createClass(FundingSummary, [{
    key: '_buildFundingInformation',
    value: function _buildFundingInformation() {
      var _this2 = this;

      var measuresTotals = {};
      var activityFieldsManager = this.props.activityFieldsManager;

      var acEnabled = false;
      var adEnabled = false;
      // Commitments, Disbursements, Expenditures
      FieldPathConstants.TRANSACTION_TYPES.forEach(function (trnType) {
        if (activityFieldsManager.isFieldPathByPartsEnabled(ActivityConstants.FUNDINGS, trnType)) {
          var trnAdjOptPath = ActivityConstants.FUNDINGS + '~' + trnType + '~' + ActivityConstants.ADJUSTMENT_TYPE;
          var atOptions = activityFieldsManager.getPossibleValuesOptions(trnAdjOptPath);
          acEnabled = acEnabled || trnType === ActivityConstants.COMMITMENTS && !!atOptions.find(function (o) {
            return o.value === ValueConstants.ACTUAL;
          });
          adEnabled = adEnabled || trnType === ActivityConstants.DISBURSEMENTS && !!atOptions.find(function (o) {
            return o.value === ValueConstants.ACTUAL;
          });
          // Actual, Planned
          atOptions.forEach(function (adjType) {
            var value = _this2.props.activityFundingTotals.getTotals(adjType.id, trnType, {});
            measuresTotals[adjType.value + ' ' + trnType] = value;
          });
        }
      });
      // Other measures: "Unallocated Disbursements".
      var adjTypeActualTrn = this.props.activityFieldsManager.getValue(FieldPathConstants.DISBURSEMENTS_PATH, ValueConstants.ACTUAL, PossibleValuesManager.getOptionTranslation);
      var expendituresAreEnabled = activityFieldsManager.isFieldPathByPartsEnabled(ActivityConstants.FUNDINGS, ActivityConstants.EXPENDITURES);
      if (adjTypeActualTrn && expendituresAreEnabled) {
        var ub = ValueConstants.UNALLOCATED_DISBURSEMENTS;
        measuresTotals[ub] = this.props.activityFundingTotals.getTotals(ub, {});
      }
      // Other measures: "Total MTEF Projections".
      if (FeatureManager.isFMSettingEnabled(FeatureManagerConstants.MTEF_PROJECTIONS)) {
        measuresTotals[ValueConstants.MTEF_PROJECTIONS] = this.props.activityFundingTotals.getMTEFTotal();
      }
      // Other measures: "Delivery rate".
      if (FeatureManager.isFMSettingEnabled(FeatureManagerConstants.ACTIVITY_DELIVERY_RATE)) {
        var actualCommitments = measuresTotals[ValueConstants.ACTUAL + ' ' + ActivityConstants.COMMITMENTS];
        var actualDisbursements = measuresTotals[ValueConstants.ACTUAL + ' ' + ActivityConstants.DISBURSEMENTS];
        var value = 0;
        if (actualCommitments && actualDisbursements && acEnabled && adEnabled) {
          value = actualDisbursements / actualCommitments * 100;
        }
        measuresTotals[ValueConstants.DELIVERY_RATE] = value;
      }

      return this._buildTotalFields(measuresTotals);
    }
  }, {
    key: '_buildTotalFields',
    value: function _buildTotalFields(measuresTotals) {
      var _this3 = this;

      var translate = this.props.translate;

      var measuresOrder = [{ trn: ValueConstants.ACTUAL_COMMITMENTS, total: true }, { trn: ValueConstants.PLANNED_COMMITMENTS, total: true }, { trn: ValueConstants.ACTUAL_DISBURSEMENTS, total: true }, { trn: ValueConstants.PLANNED_DISBURSEMENTS, total: true }, { trn: ValueConstants.ACTUAL_EXPENDITURES, total: true }, { trn: ValueConstants.UNALLOCATED_DISBURSEMENTS, total: false }, { trn: ValueConstants.PLANNED_EXPENDITURES, total: true }, { trn: ValueConstants.MTEF_PROJECTIONS, total: true }, { trn: ValueConstants.DELIVERY_RATE, total: false, isPercentage: true }];
      var fundingInfoSummary = [];
      measuresOrder.forEach(function (measure) {
        var value = measuresTotals[measure.trn];
        if (value !== undefined) {
          value = _this3.props.activityFundingTotals.formatAmount(value, measure.isPercentage);
          var title = measure.trn;
          if (measure.total) {
            title = 'Total ' + title;
          }
          title = translate(title);
          var key = 'Summary-Total-' + measure.trn;
          fundingInfoSummary.push(React__default.createElement(APField, {
            key: key, title: title, value: value, separator: false,
            fieldNameClass: _this3.props.fieldNameClass, fieldValueClass: _this3.props.fieldValueClass,
            translate: translate, Logger: _this3.props.Logger }));
        }
      });
      return fundingInfoSummary;
    }
  }, {
    key: 'render',
    value: function render() {
      return React__default.createElement(
        'div',
        null,
        this._buildFundingInformation()
      );
    }
  }]);
  return FundingSummary;
}(React.Component);

FundingSummary.propTypes = {
  activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
  activityFundingTotals: PropTypes.object.isRequired, // PropTypes.instanceOf(ActivityFundingTotals).isRequired,
  fieldNameClass: PropTypes.string,
  fieldValueClass: PropTypes.string,
  Logger: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  DateUtils: PropTypes.func.isRequired
};


var FundingSummary$1 = Section(FundingSummary, {
  SectionTitle: 'fundingInformation'
});

var logger$8 = null;

/**
 * Identification section
 * @author Nadejda Mandrescu
 */

var APIdentification = function (_Component) {
  inherits(APIdentification, _Component);

  function APIdentification(props) {
    classCallCheck(this, APIdentification);

    var _this = possibleConstructorReturn(this, (APIdentification.__proto__ || Object.getPrototypeOf(APIdentification)).call(this, props));

    var Logger = _this.props.Logger;

    logger$8 = new Logger('AP Identification');
    logger$8.debug('constructor');
    return _this;
  }

  createClass(APIdentification, [{
    key: 'render',
    value: function render() {
      var buildSimpleField = this.props.buildSimpleField;

      var fieldPaths = [ActivityConstants.STATUS_REASON, ActivityConstants.TYPE_OF_COOPERATION, ActivityConstants.TYPE_OF_IMPLEMENTATION, ActivityConstants.MODALITIES, ActivityConstants.OBJECTIVE, ActivityConstants.DESCRIPTION, ActivityConstants.PROJECT_COMMENTS, ActivityConstants.RESULTS, ActivityConstants.LESSONS_LEARNED, ActivityConstants.PROJECT_IMPACT, ActivityConstants.ACTIVITY_SUMMARY, ActivityConstants.CONDITIONALITIES, ActivityConstants.PROJECT_MANAGEMENT, ActivityConstants.BUDGET_CODE_PROJECT_ID, ActivityConstants.A_C_CHAPTER, ActivityConstants.CRIS_NUMBER, ActivityConstants.ACTIVITY_BUDGET, ActivityConstants.GOVERNMENT_AGREEMENT_NUMBER, ActivityConstants.GOVERNMENT_APPROVAL_PROCEDURES, ActivityConstants.JOINT_CRITERIA, ActivityConstants.HUMANITARIAN_AID];
      // Show budget extras fields like ministry_code, etc only when activity_budget is enabled and has value 'On Budget'.
      if (this.props.activityFieldsManager.isFieldPathEnabled(ActivityConstants.ACTIVITY_BUDGET) && this.props.activity[ActivityConstants.ACTIVITY_BUDGET] && this.props.activity[ActivityConstants.ACTIVITY_BUDGET].value === ValueConstants.ON_BUDGET) {
        fieldPaths.push(ActivityConstants.INDIRECT_ON_BUDGET);
        fieldPaths.push(ActivityConstants.FY);
        fieldPaths.push(ActivityConstants.MINISTRY_CODE);
        fieldPaths.push(ActivityConstants.PROJECT_CODE);
      }
      fieldPaths.push.apply(fieldPaths, [ActivityConstants.FINANCIAL_INSTRUMENT, ActivityConstants.IATI_IDENTIFIER]);
      return React__default.createElement(
        'div',
        null,
        fieldPaths.map(function (fieldPath) {
          return buildSimpleField(fieldPath, true);
        })
      );
    }
  }]);
  return APIdentification;
}(React.Component);

APIdentification.propTypes = {
  buildSimpleField: PropTypes.func.isRequired,
  activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
  activity: PropTypes.object.isRequired,
  Logger: PropTypes.func.isRequired
};


var APIdentification$1 = Section(APIdentification, { SectionTitle: 'Identification',
  useEncapsulateHeader: true,
  sID: 'APIdentification'
});

/** WS validation **/
var WS_VALIDATION_OFF = 'validationOff';
var WS_VALIDATION_ALL_EDIT = 'allEdits';
var WS_VALIDATION_NEW_ONLY = 'newOnly';
var WS_VALIDATION_FIELD = 'validation';
var CROSS_TEAM_VALIDATION = 'is-cross-team-validation';
var WS_ACCESS_TYPE_MANAGEMENT = 'Management';
var WS_ACCESS_TYPE_TEAM = 'Team';

/** Roles (from WorkspaceMemberRoleConstants.java) **/
var ROLE_TEAM_MEMBER_WS_MANAGER = 1;
var ROLE_TEAM_MEMBER_WS_MEMBER = 2;
var ROLE_TEAM_MEMBER_WS_APPROVER = 3;

/** Other fields **/
var WORKSPACE_ID = 'workspace-id';
var ROLE_ID = 'role-id';
var WORKSPACE_LEAD_ID = 'workspace-lead-id';
var ACCESS_TYPE = 'access-type';
var IS_COMPUTED = 'is-computed';
var IS_PRIVATE = 'is-private';

var WorkspaceConstants = Object.freeze({
  WS_VALIDATION_OFF: WS_VALIDATION_OFF,
  WS_VALIDATION_ALL_EDIT: WS_VALIDATION_ALL_EDIT,
  WS_VALIDATION_NEW_ONLY: WS_VALIDATION_NEW_ONLY,
  WS_VALIDATION_FIELD: WS_VALIDATION_FIELD,
  CROSS_TEAM_VALIDATION: CROSS_TEAM_VALIDATION,
  WS_ACCESS_TYPE_MANAGEMENT: WS_ACCESS_TYPE_MANAGEMENT,
  WS_ACCESS_TYPE_TEAM: WS_ACCESS_TYPE_TEAM,
  ROLE_TEAM_MEMBER_WS_MANAGER: ROLE_TEAM_MEMBER_WS_MANAGER,
  ROLE_TEAM_MEMBER_WS_MEMBER: ROLE_TEAM_MEMBER_WS_MEMBER,
  ROLE_TEAM_MEMBER_WS_APPROVER: ROLE_TEAM_MEMBER_WS_APPROVER,
  WORKSPACE_ID: WORKSPACE_ID,
  ROLE_ID: ROLE_ID,
  WORKSPACE_LEAD_ID: WORKSPACE_LEAD_ID,
  ACCESS_TYPE: ACCESS_TYPE,
  IS_COMPUTED: IS_COMPUTED,
  IS_PRIVATE: IS_PRIVATE
});

/* User constants */
var FIRST_NAME = 'first-name';
var LAST_NAME$1 = 'last-name';
var EMAIL$1 = 'email';

/* Team member constants */
var TEAM_MEMBER_USER_ID = 'user-id';

var UserConstants = Object.freeze({
  FIRST_NAME: FIRST_NAME,
  LAST_NAME: LAST_NAME$1,
  EMAIL: EMAIL$1,
  TEAM_MEMBER_USER_ID: TEAM_MEMBER_USER_ID
});

var logger$9 = null;

/**
 * Additional Info summary section
 * @author Nadejda Mandrecsu
 */

var AdditionalInfo = function (_Component) {
  inherits(AdditionalInfo, _Component);

  function AdditionalInfo(props) {
    classCallCheck(this, AdditionalInfo);

    var _this = possibleConstructorReturn(this, (AdditionalInfo.__proto__ || Object.getPrototypeOf(AdditionalInfo)).call(this, props));

    var Logger = _this.props.Logger;

    logger$9 = new Logger('AP Additional info');
    logger$9.debug('constructor');
    return _this;
  }

  createClass(AdditionalInfo, [{
    key: '_getWorkspaceLeadData',
    value: function _getWorkspaceLeadData() {
      var activityWSManager = this.props.activityWSManager;

      if (!activityWSManager) {
        return null;
      }
      return activityWSManager[UserConstants.FIRST_NAME] + ' ' + activityWSManager[UserConstants.LAST_NAME] + ' ' + activityWSManager[UserConstants.EMAIL];
    }
  }, {
    key: '_buildAdditionalInfo',
    value: function _buildAdditionalInfo() {
      var _props = this.props,
          translate = _props.translate,
          activityWorkspace = _props.activityWorkspace,
          activityFieldsManager = _props.activityFieldsManager,
          buildSimpleField = _props.buildSimpleField,
          fieldNameClass = _props.fieldNameClass,
          fieldValueClass = _props.fieldValueClass,
          activity = _props.activity,
          Logger = _props.Logger;

      var additionalInfo = [];
      var teamName = activityFieldsManager.getValue(activity, ActivityConstants.TEAM, PossibleValuesManager.getOptionTranslation);
      // no need to export repeating translation for the access type through workspaces EP
      var accessType = translate(activityWorkspace[WorkspaceConstants.ACCESS_TYPE]);
      var isComputedTeam = activityWorkspace[WorkspaceConstants.IS_COMPUTED] === true ? translate('Yes') : translate('No');

      // TODO: the right value as defined in AMP-25403 will be shown after AMP-26295.
      additionalInfo.push(buildSimpleField(ActivityConstants.CREATED_BY, true));
      additionalInfo.push(buildSimpleField(ActivityConstants.CREATED_ON, true));
      additionalInfo.push(buildSimpleField(ActivityConstants.MODIFIED_BY, true));
      additionalInfo.push(buildSimpleField(ActivityConstants.MODIFIED_ON, true));
      additionalInfo.push(APField.instance('createdInWorkspace', teamName + ' - ' + accessType, false, false, fieldNameClass, fieldValueClass, translate, Logger));

      additionalInfo.push(APField.instance('workspaceManager', this._getWorkspaceLeadData(), false, false, fieldNameClass, fieldValueClass, translate, Logger));

      additionalInfo.push(APField.instance('computation', isComputedTeam, false, false, fieldNameClass, fieldValueClass, translate, Logger));

      return additionalInfo;
    }
  }, {
    key: 'render',
    value: function render() {
      return React__default.createElement(
        'div',
        null,
        this._buildAdditionalInfo()
      );
    }
  }]);
  return AdditionalInfo;
}(React.Component);

AdditionalInfo.propTypes = {
  activity: PropTypes.object.isRequired,
  activityWorkspace: PropTypes.object.isRequired,
  activityWSManager: PropTypes.object.isRequired,
  buildSimpleField: PropTypes.func.isRequired,
  fieldNameClass: PropTypes.string,
  fieldValueClass: PropTypes.string,
  activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
  Logger: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired
};


var AdditionalInfo$1 = Section(AdditionalInfo, {
  SectionTitle: 'additionalInfo'
});

/* eslint-disable class-methods-use-this */

var logger$a = null;

/**
 * Organizations and project ids section
 * @author Nadejda Mandrescu
 */
var APInternalIdsSection = function APInternalIdsSection(isSeparateSection) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    inherits(_class, _Component);

    function _class(props) {
      classCallCheck(this, _class);

      var _this = possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

      var Logger = _this.props.Logger;

      logger$a = new Logger('AP Internal ids');
      logger$a.log('constructor');
      return _this;
    }

    createClass(_class, [{
      key: '_getActInternalIdContent',
      value: function _getActInternalIdContent(actIntId, showInternalId) {
        var intId = void 0;
        if (showInternalId) {
          intId = React__default.createElement(
            'span',
            { className: styles$1.tableValue },
            actIntId.internal_id
          );
        }
        return React__default.createElement(
          'div',
          { key: actIntId.organization.value },
          React__default.createElement(
            'span',
            null,
            '[',
            actIntId.organization.value,
            ']'
          ),
          intId
        );
      }
    }, {
      key: 'buildContent',
      value: function buildContent() {
        var _this2 = this;

        var orgIds = void 0;
        if (this.props.activityFieldsManager.isFieldPathEnabled(ActivityConstants.ACTIVITY_INTERNAL_IDS)) {
          var showInternalId = this.props.activityFieldsManager.isFieldPathEnabled(FieldPathConstants.ACTIVITY_INTERNAL_IDS_INTERNAL_ID_PATH);
          orgIds = [];
          var actIntIds = this.props.activityFieldsManager.getValue(this.props.activity, ActivityConstants.ACTIVITY_INTERNAL_IDS, PossibleValuesManager.getOptionTranslation);
          if (actIntIds && actIntIds.length > 0) {
            actIntIds.forEach(function (actIntId) {
              return orgIds.push(_this2._getActInternalIdContent(actIntId, showInternalId));
            });
          }
        }
        return orgIds && orgIds.length > 0 ? orgIds : null;
      }
    }, {
      key: 'render',
      value: function render() {
        var translate = this.props.translate;

        var content = this.buildContent();
        if (isSeparateSection === true) {
          // make sure content exists before formatting
          var noData = React__default.createElement(
            'tr',
            null,
            React__default.createElement(
              'td',
              null,
              translate('No Data')
            )
          );
          var tableContent = content ? Tablify.addRows(content, ActivityConstants.ACTIVITY_INTERNAL_IDS_COLS) : noData;
          content = React__default.createElement(
            'div',
            null,
            React__default.createElement(
              'table',
              { className: styles$1.box_table },
              React__default.createElement(
                'tbody',
                null,
                tableContent
              )
            )
          );
        } else if (content || this.props.showIfEmpty) {
          return React__default.createElement(
            'div',
            { key: 'InternalIdsFromIdentificationSection' },
            React__default.createElement(
              'ul',
              null,
              content && content.map(function (orgData) {
                return React__default.createElement(
                  'li',
                  { key: orgData.key },
                  orgData
                );
              })
            )
          );
        }
        return content;
      }
    }]);
    return _class;
  }(React.Component), _class.propTypes = {
    activity: React.PropTypes.object.isRequired,
    activityFieldsManager: React.PropTypes.instanceOf(FieldsManager).isRequired,
    showIfEmpty: React.PropTypes.bool, /* only makes sense if isSeparateSection is true, will render
                                  if there are no org ids*/
    Logger: React.PropTypes.func.isRequired,
    translate: React.PropTypes.func.isRequired
  }, _temp;
};
var APInternalIds = Section(APInternalIdsSection(true), { SectionTitle: 'Agency Internal IDs',
  useEncapsulateHeader: true,
  sID: 'APInternalIds'
});

var css$2 = ".APComponents_title__3f7BH {\n  font-weight: bold;\n}\n\n.APComponents_table__1aOvU {\n  width: 50%;\n}\n";
var styles$2 = { "title": "APComponents_title__3f7BH", "table": "APComponents_table__1aOvU" };
styleInject(css$2);

var logger$b = null;

/**
 * @author Gabriel Inchauspe
 */

var APComponents = function (_Component) {
  inherits(APComponents, _Component);
  createClass(APComponents, null, [{
    key: '_extractYear',

    /* eslint-enable react/no-unused-prop-types */

    value: function _extractYear(dateString) {
      return new Date(Date.parse(dateString)).getFullYear();
    }
    /* eslint-disable react/no-unused-prop-types */

  }, {
    key: '_extractGroups',
    value: function _extractGroups(funding, trnType) {
      var groups = [];
      var auxFd = {
        adjType: funding[ActivityConstants.ADJUSTMENT_TYPE],
        trnType: trnType,
        key: funding.id,
        currency: funding[ActivityConstants.CURRENCY],
        amount: funding[ActivityConstants.AMOUNT],
        year: APComponents._extractYear(funding[ActivityConstants.TRANSACTION_DATE])
      };
      var group = groups.find(function (o) {
        return o.adjType.id === auxFd.adjType.id && o.trnType === auxFd.trnType && o.year === auxFd.year;
      });
      if (!group) {
        groups.push(auxFd);
      } else {
        // TODO: we need currency conversion here.
        group.amount += auxFd.amount;
      }
      return groups;
    }
  }, {
    key: '_buildDetail',
    value: function _buildDetail(component, translate, rawNumberToFormattedString) {
      var content = [];
      // TODO: Apply currency conversion to show all fundings in the same currency
      FieldPathConstants.TRANSACTION_TYPES.forEach(function (trnType) {
        var fundings = component[trnType];
        if (fundings && fundings.length) {
          var groups = APComponents._extractGroups(fundings, trnType);
          groups.forEach(function (group) {
            // TODO: Add the current currency.
            // TODO: Translate a single phrase instead of a combination of words (AMPOFFLINE-477).
            content.push(React__default.createElement(
              'tr',
              null,
              React__default.createElement(
                'td',
                null,
                group.year
              ),
              React__default.createElement(
                'td',
                null,
                translate(group.adjType.value + ' ' + group.trnType)
              ),
              React__default.createElement(
                'td',
                null,
                rawNumberToFormattedString(group.amount)
              )
            ));
          });
        }
      });
      var table = React__default.createElement(
        'div',
        null,
        React__default.createElement(
          'table',
          { className: styles$2.table },
          React__default.createElement(
            'tbody',
            null,
            content
          )
        )
      );
      return table;
    }
  }]);

  function APComponents(props) {
    classCallCheck(this, APComponents);

    var _this = possibleConstructorReturn(this, (APComponents.__proto__ || Object.getPrototypeOf(APComponents)).call(this, props));

    var Logger = _this.props.Logger;

    logger$b = new Logger('AP Components');
    logger$b.debug('constructor');
    return _this;
  }

  createClass(APComponents, [{
    key: '_buildComponents',
    value: function _buildComponents() {
      var _this2 = this;

      var content = [];
      this.props.activity[ActivityConstants.COMPONENTS].forEach(function (component) {
        if (_this2.props.activityFieldsManager.isFieldPathEnabled(ActivityConstants.COMPONENT_TITLE)) {
          content.push(React__default.createElement(
            'div',
            { className: styles$2.title },
            component[ActivityConstants.COMPONENT_TITLE]
          ));
        }
        if (_this2.props.activityFieldsManager.isFieldPathEnabled(ActivityConstants.COMPONENT_TYPE)) {
          content.push(React__default.createElement(
            'div',
            { className: styles$2.title },
            component[ActivityConstants.COMPONENT_TYPE].value
          ));
        }
        if (_this2.props.activityFieldsManager.isFieldPathEnabled(ActivityConstants.COMPONENT_DESCRIPTION)) {
          content.push(React__default.createElement(
            'div',
            null,
            component.description
          ));
        }
        content.push(React__default.createElement(
          'div',
          null,
          _this2.props.translate('Finance of the component')
        ));
        content.push(APComponents._buildDetail(component, _this2.props.translate, _this2.props.rawNumberToFormattedString));
        content.push(React__default.createElement('hr', null));
      });
      return content;
    }
  }, {
    key: 'render',
    value: function render() {
      return React__default.createElement(
        'div',
        null,
        this._buildComponents()
      );
    }
  }]);
  return APComponents;
}(React.Component);

APComponents.propTypes = {
  activity: PropTypes.object.isRequired,
  activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
  Logger: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  rawNumberToFormattedString: PropTypes.func.isRequired
};


var APComponents$1 = Section(APComponents, { SectionTitle: 'Components'
});

/* eslint-disable class-methods-use-this */

/**
 * Activity Preview Contact section
 *
 * @author Nadejda Mandrescu
 */

var APContact = function (_Component) {
  inherits(APContact, _Component);

  function APContact() {
    classCallCheck(this, APContact);
    return possibleConstructorReturn(this, (APContact.__proto__ || Object.getPrototypeOf(APContact)).apply(this, arguments));
  }

  createClass(APContact, [{
    key: 'getHydratedContacts',
    value: function getHydratedContacts() {
      // Contacts will be hydrated and received by props
      // Both in amp_offline and amp_online so we just need to get
      // Activity Con
      var _props = this.props,
          activity = _props.activity,
          contactsByIds = _props.contactsByIds,
          getActivityContactIds = _props.getActivityContactIds;

      var contactIds = getActivityContactIds(activity);
      var hydratedContactsByIds = {};
      contactIds.forEach(function (cId) {
        var c = contactsByIds[cId] || {};
        if (c[ContactConstants.TMP_HYDRATED]) {
          hydratedContactsByIds[cId] = c;
        }
      });
      return hydratedContactsByIds;
    }
  }, {
    key: 'renderContact',
    value: function renderContact(contact) {
      var _props2 = this.props,
          contactFieldsManager = _props2.contactFieldsManager,
          buildSimpleField = _props2.buildSimpleField;

      return React__default.createElement(
        'div',
        { key: contact.id, className: styles$1.paddingBottomLarge },
        React__default.createElement(
          'div',
          null,
          contact[ContactConstants.NAME] + ' ' + contact[ContactConstants.LAST_NAME]
        ),
        contact[ContactConstants.EMAIL].map(function (email) {
          return buildSimpleField(ContactConstants.EMAIL + '~\n          ' + ContactConstants.VALUE, true, null, false, email, contactFieldsManager);
        }),
        contact[ContactConstants.PHONE].map(function (phone) {
          return buildSimpleField(ContactConstants.PHONE + '~\n          ' + ContactConstants.VALUE, true, null, false, phone, contactFieldsManager);
        })
      );
    }
  }, {
    key: 'renderNoContacts',
    value: function renderNoContacts() {
      var _props3 = this.props,
          Logger = _props3.Logger,
          translate = _props3.translate;

      return React__default.createElement(APField, {
        fieldNameClass: styles$1.hidden, fieldValueClass: styles$1.nodata, fieldClass: styles$1.flex, separator: false,
        value: translate('No Data'), translate: translate, Logger: Logger });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var Logger = this.props.Logger;
      var _props4 = this.props,
          activity = _props4.activity,
          activityFieldsManager = _props4.activityFieldsManager;

      var hydratedContactsByIds = this.getHydratedContacts();
      var contactGroups = FieldPathConstants.ACTIVITY_CONTACT_PATHS.filter(function (acp) {
        return activityFieldsManager.isFieldPathEnabled(acp);
      }).map(function (acp) {
        var title = activityFieldsManager.getFieldLabelTranslation(acp);
        var contacts = (activity[acp] || []).map(function (c) {
          var hydratedC = hydratedContactsByIds[c[ActivityConstants.CONTACT].id];
          return hydratedC ? _this2.renderContact(hydratedC) : null;
        });
        var content = contacts.length ? contacts : _this2.renderNoContacts();
        var contentClass = contacts.length ? styles$1.tableCell : null;

        return React__default.createElement(
          'div',
          { key: 'contact-group' },
          React__default.createElement(
            'div',
            { key: 'title', className: styles$1.sector_title },
            title
          ),
          React__default.createElement(
            'div',
            { key: 'contacts', className: contentClass },
            content
          )
        );
      })
      // TODO tablify must not reverses the order
      .reverse();
      return React__default.createElement(Tablify, {
        key: 'contact-info', content: contactGroups, columns: ActivityConstants.ACTIVITY_CONTACT_COLS,
        Logger: Logger });
    }
  }]);
  return APContact;
}(React.Component);

APContact.propTypes = {
  activity: React.PropTypes.object.isRequired,
  activityFieldsManager: React.PropTypes.instanceOf(FieldsManager).isRequired,
  contactFieldsManager: React.PropTypes.instanceOf(FieldsManager),
  contactsByIds: React.PropTypes.object,
  buildSimpleField: React.PropTypes.func.isRequired,
  getActivityContactIds: React.PropTypes.func.isRequired,
  Logger: React.PropTypes.func,
  translate: React.PropTypes.func
};


var APContact$1 = Section(APContact, { SectionTitle: 'Contact Information',
  useEncapsulateHeader: true,
  sID: 'APContact'
});

// Disable rule because it fails with destructing syntax.
/* eslint "import/prefer-default-export": 0*/

var WORKSPACES_GROUPS = [{ type: 'Donor' }, { type: 'Government' }, { type: 'Line Ministries' }, { type: 'Other' }];

var WorkspaceGroupsConstants = Object.freeze({
  WORKSPACES_GROUPS: WORKSPACES_GROUPS
});

var index = {
  TestAPField: TestAPField,
  TestingSection: TestingSection,
  Constants: Constants,
  ActivityConstants: ActivityConstants,
  FeatureManagerConstants: FeatureManagerConstants,
  ErrorConstants: ErrorConstants,
  CurrencyRatesManager: CurrencyRatesManager,
  FieldsManager: FieldsManager,
  FieldPathConstants: FieldPathConstants,
  ValueConstants: ValueConstants,
  ContactConstants: ContactConstants,
  FeatureManager: FeatureManager,
  APLabel: APLabel,
  APField: APField,
  Tablify: Tablify,
  APPercentageField: APPercentageField,
  APPercentageList: APPercentageList,
  Section: Section,
  FundingSummary: FundingSummary$1,
  UIUtils: UIUtils,
  AdditionalInfo: AdditionalInfo$1,
  UserConstants: UserConstants,
  WorkspaceConstants: WorkspaceConstants,
  WorkspaceGroupsConstants: WorkspaceGroupsConstants,
  APIdentification: APIdentification$1,
  APComponents: APComponents$1,
  APInternalIds: APInternalIds,
  APContact: APContact$1
};

exports.TestAPField = TestAPField;
exports.TestingSection = TestingSection;
exports.Constants = Constants;
exports.ActivityConstants = ActivityConstants;
exports.FeatureManagerConstants = FeatureManagerConstants;
exports.ErrorConstants = ErrorConstants;
exports.CurrencyRatesManager = CurrencyRatesManager;
exports.FieldsManager = FieldsManager;
exports.FieldPathConstants = FieldPathConstants;
exports.ValueConstants = ValueConstants;
exports.PossibleValuesManager = PossibleValuesManager;
exports.FeatureManager = FeatureManager;
exports.APLabel = APLabel;
exports.APField = APField;
exports.Tablify = Tablify;
exports.APPercentageField = APPercentageField;
exports.APPercentageList = APPercentageList;
exports.UIUtils = UIUtils;
exports.Section = Section;
exports.FundingSummary = FundingSummary$1;
exports.AdditionalInfo = AdditionalInfo$1;
exports.UserConstants = UserConstants;
exports.ContactConstants = ContactConstants;
exports.WorkspaceConstants = WorkspaceConstants;
exports.WorkspaceGroupsConstants = WorkspaceGroupsConstants;
exports.APIdentification = APIdentification$1;
exports.APInternalIds = APInternalIds;
exports.APComponents = APComponents$1;
exports.APContact = APContact$1;
exports.default = index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9zdHlsZS1pbmplY3QvZGlzdC9zdHlsZS1pbmplY3QuZXMuanMiLCIuLi9zcmMvYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdEFQRmllbGQuanMiLCIuLi9zcmMvYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdGluZ1NlY3Rpb24uanMiLCIuLi9zcmMvdXRpbHMvQ29uc3RhbnRzLmpzIiwiLi4vc3JjL21vZHVsZXMvdXRpbC9GZWF0dXJlTWFuYWdlckNvbnN0YW50cy5qcyIsIi4uL3NyYy91dGlscy9VSVV0aWxzLmpzIiwiLi4vc3JjL21vZHVsZXMvdXRpbC9BY3Rpdml0eUNvbnN0YW50cy5qcyIsIi4uL3NyYy91dGlscy9jb25zdGFudHMvRXJyb3JDb25zdGFudHMuanMiLCIuLi9zcmMvdXRpbHMvVmFsdWVDb25zdGFudHMuanMiLCIuLi9zcmMvdXRpbHMvRmllbGRQYXRoQ29uc3RhbnRzLmpzIiwiLi4vc3JjL21vZHVsZXMvZmllbGQvRmllbGRzTWFuYWdlci5qcyIsIi4uL3NyYy9tb2R1bGVzL3V0aWwvQ29udGFjdENvbnN0YW50cy5qcyIsIi4uL3NyYy9tb2R1bGVzL3V0aWwvQ3VycmVuY3lSYXRlc01hbmFnZXIuanMiLCIuLi9zcmMvbW9kdWxlcy9maWVsZC9Qb3NzaWJsZVZhbHVlc01hbmFnZXIuanMiLCIuLi9zcmMvbW9kdWxlcy91dGlsL0ZlYXR1cmVNYW5hZ2VyLmpzIiwiLi4vc3JjL2FjdGl2aXR5L3ByZXZpZXcvY29tcG9uZW50cy9BUExhYmVsLmpzeCIsIi4uL3NyYy9hY3Rpdml0eS9wcmV2aWV3L2NvbXBvbmVudHMvQVBGaWVsZC5qc3giLCIuLi9zcmMvYWN0aXZpdHkvcHJldmlldy9jb21wb25lbnRzL1RhYmxpZnkuanN4IiwiLi4vc3JjL2FjdGl2aXR5L3ByZXZpZXcvY29tcG9uZW50cy9BUFBlcmNlbnRhZ2VGaWVsZC5qc3giLCIuLi9zcmMvYWN0aXZpdHkvcHJldmlldy9jb21wb25lbnRzL0FQUGVyY2VudGFnZUxpc3QuanN4IiwiLi4vc3JjL2FjdGl2aXR5L3ByZXZpZXcvc2VjdGlvbnMvU2VjdGlvbi5qc3giLCIuLi9zcmMvYWN0aXZpdHkvcHJldmlldy9zZWN0aW9ucy9GdW5kaW5nU3VtbWFyeS5qc3giLCIuLi9zcmMvYWN0aXZpdHkvcHJldmlldy9zZWN0aW9ucy9BUElkZW50aWZpY2F0aW9uLmpzeCIsIi4uL3NyYy91dGlscy9jb25zdGFudHMvV29ya3NwYWNlQ29uc3RhbnRzLmpzIiwiLi4vc3JjL3V0aWxzL2NvbnN0YW50cy9Vc2VyQ29uc3RhbnRzLmpzIiwiLi4vc3JjL2FjdGl2aXR5L3ByZXZpZXcvc2VjdGlvbnMvQWRkaXRpb25hbEluZm8uanN4IiwiLi4vc3JjL2FjdGl2aXR5L3ByZXZpZXcvc2VjdGlvbnMvQVBJbnRlcm5hbElkcy5qc3giLCIuLi9zcmMvYWN0aXZpdHkvcHJldmlldy9zZWN0aW9ucy9BUENvbXBvbmVudHMuanN4IiwiLi4vc3JjL2FjdGl2aXR5L3ByZXZpZXcvc2VjdGlvbnMvQVBDb250YWN0LmpzeCIsIi4uL3NyYy91dGlscy9jb25zdGFudHMvV29ya3NwYWNlR3JvdXBzQ29uc3RhbnRzLmpzIiwiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHN0eWxlSW5qZWN0KGNzcywgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSB7fTtcbiAgdmFyIGluc2VydEF0ID0gcmVmLmluc2VydEF0O1xuXG4gIGlmICghY3NzIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuOyB9XG5cbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gIGlmIChpbnNlcnRBdCA9PT0gJ3RvcCcpIHtcbiAgICBpZiAoaGVhZC5maXJzdENoaWxkKSB7XG4gICAgICBoZWFkLmluc2VydEJlZm9yZShzdHlsZSwgaGVhZC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVJbmplY3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vYWN0aXZpdHlBc3NldHMvc3R5bGVzaGVldHMvQWN0aXZpdHlQcmV2aWV3LmNzcyc7XG5cblxuLyoqXG4gKiBTaW1wbGUgRmllbGQgY29tcG9uZW50IHRoYXQgY29uc2lzdHMgb2YgYSBmaWVsZCB0aXRsZSBhbmQgZmllbGQgdmFsdWVcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdEFQRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvKipcbiAgICogR2V0cyBhbiBpbnN0YW5jZSBvZiBTaW1wbGUgRmllbGRcbiAgICogQHBhcmFtIHRybkxhYmVsIHRoZSBsYWJlbCB0byB0cmFuc2xhdGUgYW5kIHVzZSBhcyBhIHRpdGxlLiBUaGlzIGxhYmVsIGlzIGFsc28gdXNlZCBhcyB0aGUgY29tcG9uZW50IGtleS5cbiAgICogQHBhcmFtIHZhbHVlIHRoZSBmaWVsZCB2YWx1ZVxuICAgKiBAcGFyYW0gaW5saW5lIHNob3cgdGl0bGUgYW5kIHZhbHVlIGluIHRoZSBzYW1lIHJvdy5cbiAgICogQHBhcmFtIHNlcGFyYXRvciBhZGQgb3Igbm90IGFuIDxocj4gdGFnLlxuICAgKiBAcGFyYW0gbmFtZUNsYXNzIGNzcyBjbGFzcyBmb3IgdGhlIGZpZWxkIGxhYmVsXG4gICAqIEBwYXJhbSB2YWx1ZUNsYXNzIGNzcyBjbGFzcyBmb3IgdGhlIGZpZWxkIHZhbHVlXG4gICAqIEByZXR1cm4ge1NpbXBsZUZpZWxkfVxuICAgKi9cbiAgc3RhdGljIGluc3RhbmNlKHRybkxhYmVsLCB2YWx1ZSwgaW5saW5lID0gZmFsc2UsIHNlcGFyYXRvciA9IGZhbHNlLCBuYW1lQ2xhc3MsIHZhbHVlQ2xhc3MpIHtcbiAgICByZXR1cm4gKDxUZXN0QVBGaWVsZFxuICAgICAga2V5PXt0cm5MYWJlbH0gdGl0bGU9e3RoaXMucHJvcHMudHJhbnNsYXRlKHRybkxhYmVsKX0gdmFsdWU9e3ZhbHVlfSBpbmxpbmU9e2lubGluZX0gc2VwYXJhdG9yPXtzZXBhcmF0b3J9XG4gICAgICBmaWVsZE5hbWVDbGFzcz17bmFtZUNsYXNzfSBmaWVsZFZhbHVlQ2xhc3M9e3ZhbHVlQ2xhc3N9IC8+KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucHJvcHMuYW1wTG9nZ2VyLmxvZygnY29uc3RydWN0b3JlJyk7XG4gICAgdGhpcy51c2VTZXBhcmF0b3IgPSB0aGlzLnByb3BzLnNlcGFyYXRvciAhPT0gZmFsc2U7XG4gICAgdGhpcy5kaXNwbGF5Q2xhc3MgPSB0aGlzLnByb3BzLmZpZWxkQ2xhc3MgfHwgKHRoaXMucHJvcHMuaW5saW5lID09PSB0cnVlID8gc3R5bGVzLmlubGluZSA6IHN0eWxlcy5ibG9jayk7XG4gIH1cblxuICBfZ2V0VmFsdWUoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IGAke3RoaXMucHJvcHMuZmllbGRWYWx1ZUNsYXNzfSAke3RoaXMuZGlzcGxheUNsYXNzfWA7XG4gICAgLy8gVG8gaGFuZGxlIGJvb2xlYW4gZmllbGRzIHdlIGRvbnQgd2FudCB0byBzaG93ICdmYWxzZScgYXMgJ05vIERhdGEnLlxuICAgIGNvbnN0IHZhbHVlID0gKHRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5wcm9wcy52YWx1ZSA9PT0gZmFsc2UpID8gdGhpcy5wcm9wcy52YWx1ZSA6IHRoaXMucHJvcHMudHJhbnNsYXRlKCdObyBEYXRhJyk7XG4gICAgbGV0IGRpc3BsYXlWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGlmICh2YWx1ZVswXSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICBkaXNwbGF5VmFsdWUgPSBbXTtcbiAgICAgICAgdmFsdWUuZm9yRWFjaCh2ID0+IGRpc3BsYXlWYWx1ZS5wdXNoKHYpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BsYXlWYWx1ZSA9IHZhbHVlLnNvcnQoKS5qb2luKCcsICcpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGRpc3BsYXlWYWx1ZSA9IHZhbHVlID09PSB0cnVlID8gdGhpcy5wcm9wcy50cmFuc2xhdGUoJ1llcycpIDogdGhpcy5wcm9wcy50cmFuc2xhdGUoJ05vJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BsYXlWYWx1ZSA9ICh0aGlzLnByb3BzLmlubGluZSAmJiB0aGlzLnByb3BzLnZhbHVlIGluc3RhbmNlb2YgU3RyaW5nKSA/IGAke3ZhbHVlfSBgIDogdmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLnVzZUlubmVySFRNTCkge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRpc3BsYXlWYWx1ZSB9fSAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfT57ZGlzcGxheVZhbHVlfTwvZGl2PjtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IGAke3RoaXMucHJvcHMuZmllbGROYW1lQ2xhc3N9ICR7dGhpcy5kaXNwbGF5Q2xhc3N9YDtcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXt0aGlzLmRpc3BsYXlDbGFzc30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+e3RoaXMucHJvcHMudGl0bGV9PC9kaXY+XG4gICAgICB7dGhpcy5fZ2V0VmFsdWUoKX1cbiAgICAgIHt0aGlzLnVzZVNlcGFyYXRvciA/IDxociAvPiA6ICcnfVxuICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuVGVzdEFQRmllbGQucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG4gIGlubGluZTogUHJvcFR5cGVzLmJvb2wsXG4gIHVzZUlubmVySFRNTDogUHJvcFR5cGVzLmJvb2wsXG4gIGZpZWxkQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZpZWxkTmFtZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmaWVsZFZhbHVlQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlcGFyYXRvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGFtcExvZ2dlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB0cmFuc2xhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBUZXN0QVBGaWVsZCBmcm9tICcuL1Rlc3RBUEZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdGluZ1NlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj50ZXN0aW5nIGNvbXBvbmVudDwvaDI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgdGVzdCB0cmFuc2xhdGlvbjogYERFU0tUT1AgPSB7dGhpcy5wcm9wcy50cmFuc2xhdGUoJ0RFU0tUT1AnKX1gXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHRlc3QgQVBGaWVsZDpcbiAgICAgICAgICA8VGVzdEFQRmllbGQgYW1wTG9nZ2VyPXt0aGlzLnByb3BzLmFtcExvZ2dlcn0gdHJhbnNsYXRlPXt0aGlzLnByb3BzLnRyYW5zbGF0ZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4pO1xuICB9XG59XG5UZXN0aW5nU2VjdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGFtcExvZ2dlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB0cmFuc2xhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG4iLCJcbmNvbnN0IEJBU0VfUkVTVF9VUkwgPSAnL3Jlc3QnO1xuXG5cbmNvbnN0IENPTk5FQ1RJT05fVElNRU9VVCA9IDI1MDAwO1xuY29uc3QgQ09OTkVDVElPTl9GT1JDRURfVElNRU9VVCA9IENPTk5FQ1RJT05fVElNRU9VVCArIDUwMDA7XG5jb25zdCBUSU1FT1VUX0NIRUNLX0lOVEVSVkFMID0gNTAwMDtcbmNvbnN0IE1BWF9SRVRSWV9BVEVNUFRTID0gNTtcbmNvbnN0IEVSUk9SU19UT19SRVRSWSA9IFsnRVNPQ0tFVFRJTUVET1VUJywgJ0VUSU1FRE9VVCcsICdFQ09OTlJFU0VUJywgJ0VBSV9BR0FJTiddO1xuY29uc3QgRVJST1JTX05PX0FNUF9TRVJWRVIgPSBbJ0VDT05OUkVGVVNFRCcsICdFTkVUVU5SRUFDSCcsICdFTk9FTlQnLCAnRU5PVEZPVU5EJywgJ0VORVRET1dOJywgJ0VIT1NURE9XTicsXG4gICdFSE9TVFVOUkVBQ0gnLCAnRU5PTkVUJ107XG5jb25zdCBDT05ORUNUSVZJVFlfQ0hFQ0tfSU5URVJWQUwgPSAnNjAwMDAnOyAvLyAxIG1pbnV0ZXNcblxuY29uc3QgV09SS1NQQUNFX1VSTCA9ICcvd29ya3NwYWNlJztcbmNvbnN0IExPR0lOX1VSTCA9ICcvJztcbmNvbnN0IERFU0tUT1BfVVJMID0gJy9kZXNrdG9wJztcbmNvbnN0IERFU0tUT1BfQ1VSUkVOVF9VUkwgPSAnL2Rlc2t0b3AvY3VycmVudCc7XG5jb25zdCBTWU5DVVBfUkVESVJFQ1RfVVJMID0gJy9zeW5jVXAvc3luYyc7XG5jb25zdCBTWU5DVVBfSElTVE9SWV9UQVJHRVQgPSAnaGlzdG9yeSc7XG5jb25zdCBTWU5DVVBfU1VNTUFSWV9VUkwgPSAnL3N5bmNVcFN1bW1hcnknO1xuY29uc3QgQUNUSVZJVFlfUFJFVklFV19VUkwgPSAnL2FjdGl2aXR5L3ByZXZpZXcnO1xuY29uc3QgQUNUSVZJVFlfRURJVF9VUkwgPSAnL2FjdGl2aXR5L2VkaXQnO1xuY29uc3QgVVBEQVRFX1VSTCA9ICcvdXBkYXRlJztcbmNvbnN0IFNFVFVQX1VSTCA9ICcvc2V0dXAnO1xuY29uc3QgU0VUVElOR1NfVVJMID0gJy9zZXR0aW5ncyc7XG5cbmNvbnN0IENPTExFQ1RJT05fVVNFUlMgPSAndXNlcnMnO1xuY29uc3QgQ09MTEVDVElPTl9XT1JLUEFDRVMgPSAnd29ya3NwYWNlcyc7XG5jb25zdCBDT0xMRUNUSU9OX1RFQU1NRU1CRVJTID0gJ3RlYW1tZW1iZXJzJztcbmNvbnN0IENPTExFQ1RJT05fQ0xJRU5UX1NFVFRJTkdTID0gJ2NsaWVudC1zZXR0aW5ncyc7XG5jb25zdCBDT0xMRUNUSU9OX0dMT0JBTF9TRVRUSU5HUyA9ICdnbG9iYWwtc2V0dGluZ3MnO1xuY29uc3QgQ09MTEVDVElPTl9BQ1RJVklUSUVTID0gJ2FjdGl2aXRpZXMnO1xuY29uc3QgQ09MTEVDVElPTl9GSUVMRFMgPSAnZmllbGRzJztcbmNvbnN0IENPTExFQ1RJT05fUE9TU0lCTEVfVkFMVUVTID0gJ3Bvc3NpYmxlLXZhbHVlcyc7XG5jb25zdCBDT0xMRUNUSU9OX1NZTkNVUF9MT0cgPSAnc3luY3VwLWxvZyc7XG5jb25zdCBDT0xMRUNUSU9OX0xBTkdTID0gJ2xhbmd1YWdlcyc7XG5jb25zdCBDT0xMRUNUSU9OX1dTX1NFVFRJTkdTID0gJ3dvcmtzcGFjZS1zZXR0aW5ncyc7XG5jb25zdCBDT0xMRUNUSU9OX0NVUlJFTkNZX1JBVEVTID0gJ2N1cnJlbmN5LXJhdGVzJztcbmNvbnN0IENPTExFQ1RJT05fRkVBVFVSRV9NQU5BR0VSID0gJ2ZlYXR1cmUtbWFuYWdlcic7XG5jb25zdCBDT0xMRUNUSU9OX0NPTlRBQ1RTID0gJ2NvbnRhY3RzJztcbmNvbnN0IENPTExFQ1RJT05fUkVTT1VSQ0VTID0gJ3Jlc291cmNlcyc7XG5jb25zdCBDT0xMRUNUSU9OX1JFUE9TSVRPUlkgPSAncmVwb3NpdG9yeSc7XG5jb25zdCBDT0xMRUNUSU9OX0dBWkVUVEVFUiA9ICdnYXpldHRlZXInO1xuY29uc3QgQ09MTEVDVElPTl9DQUxFTkRBUlMgPSAnY2FsZW5kYXJzJztcbmNvbnN0IENPTExFQ1RJT05fQ0hBTkdFU0VUUyA9ICdjaGFuZ2VzZXRzJztcblxuY29uc3QgR0FaRVRURUVSX0RJU1RBTkNFX0RJVklERSA9IDM7XG5cbmNvbnN0IERCX0ZJTEVfUFJFRklYID0gJ2RhdGFiYXNlJztcbmNvbnN0IERCX0ZJTEVfRVhURU5TSU9OID0gJy5kYic7XG5jb25zdCBEQl9DT01NT05fREFUQVNUT1JFX09QVElPTlMgPSB7IGF1dG9sb2FkOiBmYWxzZSwgY29ycnVwdEFsZXJ0VGhyZXNob2xkOiAwIH07XG5jb25zdCBEQl9BVVRPQ09NUEFDVF9JTlRFUlZBTF9NSUxJU0VDT05EUyA9IDYwMDAwO1xuY29uc3QgREJfREVGQVVMVF9RVUVSWV9MSU1JVCA9IDk5OTk5OTk5OTtcblxuY29uc3QgTEFOR1VBR0VfRU5HTElTSCA9ICdlbic7XG5jb25zdCBGU19MT0NBTEVTX0RJUkVDVE9SWSA9ICdsYW5nJztcbmNvbnN0IExBTkdVQUdFX01BU1RFUl9UUkFOU0xBVElPTlNfRklMRSA9ICdtYXN0ZXItdHJhbnNsYXRpb25zJztcbmNvbnN0IExBTkdVQUdFX1RSQU5TTEFUSU9OU19GSUxFID0gJ3RyYW5zbGF0aW9ucyc7XG5jb25zdCBMQU5HVUFHRV9ORVdfVFJBTlNMQVRJT05TX01VU1RfU1lOQyA9ICdtdXN0X3N5bmNfdHJhbnNsYXRpb24uanNvbic7XG5cbmNvbnN0IEFTQVJfRElSID0gJ2FwcC5hc2FyJztcbmNvbnN0IEFQUF9ESVJFQ1RPUlkgPSAnYXBwJztcbmNvbnN0IFRFU1RfRElSRUNUT1JZID0gJ3Rlc3QnO1xuY29uc3QgU1RBVElDX0RJUiA9ICdzdGF0aWMnO1xuY29uc3QgSU1BR0VTX0RJUiA9ICdpbWFnZXMnO1xuY29uc3QgRE9DX0lDT05TID0gJ2RvYy1pY29ucyc7XG5jb25zdCBEQl9TVEFUSUNfRElSID0gJ2RiJztcbmNvbnN0IE1JR1JBVElPTlNfRElSID0gJ2NoYW5nZWxvZyc7XG5cbmNvbnN0IEhBU0hfSVRFUkFUSU9OUyA9IDEwMDtcbmNvbnN0IERJR0VTVF9BTEdPUklUSE1fU0hBMSA9ICdTSEEtMSc7XG5jb25zdCBESUdFU1RfQUxHT1JJVEhNX1NIQTI1NiA9ICdTSEEtMjU2JztcblxuY29uc3QgQUNUSVZJVFlfRURJVCA9ICdBQ1RJVklUWV9FRElUJztcbmNvbnN0IEFDVElWSVRZX1ZJRVcgPSAnQUNUSVZJVFlfVklFVyc7XG5cbmNvbnN0IFNZTkNVUF9GT1JDRV9EQVlTID0gMTQ7XG5jb25zdCBTWU5DVVBfQkVTVF9CRUZPUkVfREFZUyA9IDc7XG5jb25zdCBTWU5DVVBfTk9fREFURSA9ICcxOTAwLTAxLTAxVDAwOjAwOjAwLjAwMCswMDAwJztcbmNvbnN0IFNZTkNVUF9UWVBFX1RSQU5TTEFUSU9OUyA9ICd0cmFuc2xhdGlvbnMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfVVNFUlMgPSAndXNlcnMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQVNTRVRTID0gJ2Fzc2V0cyc7XG5jb25zdCBTWU5DVVBfVFlQRV9XT1JLU1BBQ0VTID0gJ3dvcmtzcGFjZXMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfR1MgPSAnZ2xvYmFsLXNldHRpbmdzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0VYQ0hBTkdFX1JBVEVTID0gJ2V4Y2hhbmdlLXJhdGVzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0ZFQVRVUkVfTUFOQUdFUiA9ICdmZWF0dXJlLW1hbmFnZXInO1xuY29uc3QgU1lOQ1VQX1RZUEVfV09SS1NQQUNFX01FTUJFUlMgPSAnd29ya3NwYWNlLW1lbWJlcnMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQUxMX0ZJRUxEUyA9ICdmaWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQUNUSVZJVElFU19QVUxMID0gJ2FjdGl2aXRpZXMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQUNUSVZJVElFU19QVVNIID0gJ2FjdGl2aXRpZXMtcHVzaCc7XG5jb25zdCBTWU5DVVBfVFlQRV9BQ1RJVklUWV9GSUVMRFMgPSAnYWN0aXZpdHktZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FDVElWSVRZX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMgPSAnYWN0aXZpdHktZmllbGRzLXN0cnVjdHVyYWwtY2hhbmdlcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9DT05UQUNUU19QVUxMID0gJ2NvbnRhY3RzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0NPTlRBQ1RTX1BVU0ggPSAnY29udGFjdHMtcHVzaCc7XG5jb25zdCBTWU5DVVBfVFlQRV9BQ1RJVklUWV9QT1NTSUJMRV9WQUxVRVMgPSAnYWN0aXZpdHktcG9zc2libGUtdmFsdWVzLWZpZWxkcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9DT05UQUNUX0ZJRUxEUyA9ICdjb250YWN0LWZpZWxkcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9DT05UQUNUX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMgPSAnY29udGFjdC1maWVsZHMtc3RydWN0dXJhbC1jaGFuZ2VzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0NPTlRBQ1RfUE9TU0lCTEVfVkFMVUVTID0gJ2NvbnRhY3QtcG9zc2libGUtdmFsdWVzLWZpZWxkcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9SRVNPVVJDRVNfUFVMTCA9ICdyZXNvdXJjZXMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VTX1BVU0ggPSAncmVzb3VyY2VzLXB1c2gnO1xuY29uc3QgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfRklFTERTID0gJ3Jlc291cmNlLWZpZWxkcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTID0gJ3Jlc291cmNlLWZpZWxkcy1zdHJ1Y3R1cmFsLWNoYW5nZXMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfUE9TU0lCTEVfVkFMVUVTID0gJ3Jlc291cmNlLXBvc3NpYmxlLXZhbHVlcy1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ09NTU9OX1BPU1NJQkxFX1ZBTFVFUyA9ICdjb21tb24tcG9zc2libGUtdmFsdWVzLWZpZWxkcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9XT1JLU1BBQ0VfU0VUVElOR1MgPSAnd29ya3NwYWNlLXNldHRpbmdzJztcbmNvbnN0IFNZTkNVUF9UWVBFX01BUF9USUxFUyA9ICdtYXAtdGlsZXMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfR0FaRVRURUVSID0gJ2xvY2F0b3JzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0NBTEVOREFSUyA9ICdjYWxlbmRhcnMnO1xuXG5jb25zdCBTWU5DVVBfU1RBVFVTX1NVQ0NFU1MgPSAnU1VDQ0VTUyc7XG5jb25zdCBTWU5DVVBfU1RBVFVTX0ZBSUwgPSAnRkFJTCc7XG5jb25zdCBTWU5DVVBfU1RBVFVTX1BBUlRJQUwgPSAnUEFSVElBTCc7XG5jb25zdCBTWU5DVVBfU1RBVFVTX0NBTkNFTEVEID0gJ0NBTkNFTEVEJztcbmNvbnN0IFNZTkNVUF9TWU5DX1JFUVVFU1RFRF9BVCA9ICdzeW5jLWRhdGUnO1xuY29uc3QgU1lOQ1VQX1NZTkNfUkVRVUVTVEVEX0JZID0gJ3JlcXVlc3RlZC1ieSc7XG5jb25zdCBTWU5DVVBfREFURVRJTUVfRklFTEQgPSAndGltZXN0YW1wJztcbmNvbnN0IFNZTkNVUF9ESUZGX0xFRlRPVkVSID0gJ3N5bmN1cC1kaWZmLWxlZnRvdmVyJztcbmNvbnN0IFNZTkNVUF9ERVBFTkRFTkNZX0NIRUNLX0lOVEVSVkFMID0gMTA7XG5jb25zdCBTWU5DVVBfREVUQUlMU19TWU5DRUQgPSAnc3luY2VkJztcbmNvbnN0IFNZTkNVUF9ERVRBSUxTX1VOU1lOQ0VEID0gJ3Vuc3luY2VkJztcbmNvbnN0IFNZTkNVUF9SRVNPVVJDRV9QVUxMX0JBVENIX1NJWkUgPSAxMDA7XG5jb25zdCBTWU5DVVBfQUNUSVZJVElFU19QVUxMX0JBVENIX1NJWkUgPSAxMDA7XG5jb25zdCBTWU5DVVBfQ09OVEFDVFNfUFVMTF9CQVRDSF9TSVpFID0gMTAwO1xuXG5jb25zdCBBQ1RJVklUWV9TVEFUVVNfRFJBRlQgPSAnQUNUSVZJVFlfU1RBVFVTX0RSQUZUJztcbmNvbnN0IEFDVElWSVRZX1NUQVRVU19VTlZBTElEQVRFRCA9ICdBQ1RJVklUWV9TVEFUVVNfVU5WQUxJREFURUQnO1xuY29uc3QgQUNUSVZJVFlfU1RBVFVTX1ZBTElEQVRFRCA9ICdBQ1RJVklUWV9TVEFUVVNfVkFMSURBVEVEJztcblxuY29uc3QgQ1VSUkVOQ1lfSE9VUiA9ICcwMDowMCc7XG5jb25zdCBERUZBVUxUX0NVUlJFTkNZID0gJ1VTRCc7XG5jb25zdCBSQVRFX1NBTUVfQ1VSUkVOQ1kgPSAxO1xuY29uc3QgUkFURV9DVVJSRU5DWV9OT1RfRk9VTkQgPSAxO1xuY29uc3QgQ1VSUkVOQ1lfUEFJUiA9ICdjdXJyZW5jeS1wYWlyJztcbmNvbnN0IFZFUlNJT05fUEFUVEVSTiA9IC8oXFxkKylcXC4oXFxkKykoXFwuKFxcZCspKT8oLVxcdyspPy87XG5jb25zdCBWRVJTSU9OX1BBVFRFUk5fR1JPVVBTX1RPX0VYVFJBQ1QgPSBbMSwgMiwgNCwgNV07XG5jb25zdCBBTVBfQ09VTlRSWV9MT0dPID0gJ2FtcENvdW50cnlGbGFnLnBuZyc7XG5jb25zdCBBU1NFVFNfRElSRUNUT1JZID0gJ2Fzc2V0cyc7XG5jb25zdCBCQVNFXzY0X1BOR19QUkVGSVggPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCc7XG4vLyBIb2xkcyB0aGUgQkFTRTY0IHJlcHJlc2VudGF0aW9uIG9mIGEgYSB0cmFuc3BhcmVudCBpbWFnZSAxeDEgaW4gY2FzZSB3ZSBkb24ndCB5ZXQgaGF2ZSB0aGUgY291bnRyeSBmbGFnXG5jb25zdFxuICBUUkFOU1BBUkVOVF9GTEFHID0gJ2lWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBRUFBQUFCQ0FRQUFBQzFIQXdDQUFBQUMwbEVRVlI0bkdQNnp3QUFBZ2NCQXBvY01YRUFBQUFBU1VWT1JLNUNZSUk9JztcbmNvbnN0IEhFTFBfUERGX0ZJTEVOQU1FID0gJ2FtcC1oZWxwJztcbmNvbnN0IEhFTFBfRElSID0gJ2hlbHAnO1xuY29uc3QgRU5EU19XSVRIX1BVTkNUVUFUSU9OX1JFR0VYID0gL1suIT8sOzpdJC87XG5cbmNvbnN0IE1BUF9USUxFU19ESVIgPSAnbWFwLXRpbGVzJztcbmNvbnN0IFRJTEVTX1pJUF9GSUxFID0gJ21hcC10aWxlcy56aXAnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5jb25zdCBNQVBfTUFSS0VSX0lNQUdFID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmtBQUFBcENBWUFBQURBazRMT0FBQUZnVWxFUVZSNEFhMVhBNUJqV1JUTjJvVzE3ZDNZYVp0cjI5NjJIVXpiRE5wanN6VzI0bVJ0MjhwNDd2N3pxL2JYWnRycC9sV25YcjMzN2ozblBDZTg1TmN5cGdTRmR1Z0NwVzVZb0RBTVJhSU1xUmk2YUtxNUUzWXFEUU8zcUF3alZXckQ4TmNxL1JCcHlrZDhvWlViL2thSnV0b3c4cjFhUDlJSTBXbUxLTElzSnl2MXcva3F3OUNoMk1ZZEIrKzEyT254ZWUvUU13dmY0L0RrL0xmcC9pNG54VFh0T29RNHBXNUFqN3dwaWNpMUE5ZXJkQU4yT0g2NHg4T1NQOWozRnQzYjdhV2tUZy9GbTkxc2lUcmEwZjlvbjVzUXI5SU5lakg2Q1VVVXBhdmpGTnExQitPYWRoeG1uZmE4UmZFbU44Vk5Bc1FoUHFGNTV4SGtNenozalNtQ2hXVTZmNy9YWktOSCs5K2hCTE9IWW96dUtRUHh5TVBVS2tyWC9LMHVXbmZGYUpHUzFRUFJ0WnNPUHRyM05zVzB1eWg2Tk5DT2tVM1l6K2JYYlQzSThHM3hFNUVYTFh0Q1hiYnF3Q085elBRWVBSVFo1dklEWEQ3VSt3N3JGREVvVVVmN2liSElSNHk2YkxWUFhyejhKVlpFcWwxM3RyeHd1ZS91RGl2ZDNma1dSYlM2L0lBMmJJRDR1azBVcEYxTjhxTGxiQmxYczRFZTdITFRmVjFqNTRBUHZPRG5TZk9XQnF0S1Z2amdMS3pGNVlkRWs1ZXdSa0dsSzBpMzNFb2ZmZmM3SFQ1NmpENy82VStxSDNDeDdTQkxObnRINVlJUHZPRG55ZklYWllSVkRQcWdIdExzNUFCSEQzWXpMdWVzcGI3dDc5RlkzNERqTXdyVnJjVHV3bFQ1NVlNUHZPQm5Scko0VlhUZE5uWXVnNXVjSExCakVwdDMwNzAxQTNUcytIRWE3M3U2ZFQzRk5Xd2ZsWTg2ZU1IUGsrWXUraTZwelVwUnJXN1NORGc1SkhSNEthcG1NNVd2MkU4VGZjYjFIb3FxSE1IVSt1V0REN3pnNTRtejUvMkJTbml6aTlUMURnNFFRWExUb0dOQ2tiNnRiMU5VK1FBbEdyMSsrZUFEcnpobi91OFEyWVpoUVZsWjUrQ0FPdHFmYmhtYVVDUzFlek5GVm0yaW1EYlBtUG5nNXdteitnd2grb0hEY2UwZVV0UTZPR0RJeVIwdVVoVXNvTzN2ZkRtbWdPZXpIMG1aTjU5eDdNQmkrK1dETDFnL2VFaVUzYXZsaWRPNjcxYmtMZndidzVYVjJQOFB6bzB5ZHk0dDIvMGV1MzN4WVNPTU9EOGhUZjRDckJ0R01Tb1hmUExjaFgrSjBydVNlUHczTFplSzBqdVBKYll6cmhrSDBpbzdCM2sxNjRoaUd2YXdoT0tNTGtyUUx5VnBaZzhySEZXN0UydUhPTDg4OElCUGxOWjFGUHpzdFNKTTY5NGZXcjZSd3B2Y0pLNjArMEhDSUxUQnpaTEZOZHRBekphb2h6ZTYwVDhxQnp5aDVadU9nNWU3dXdRcHBvZkVtZjIrK0RZdm15U3FHQnVLYWljRjFibFFqaHVIZHZDSU12cDh3aFRUZlp6STdSbGRwd3RTekwrRjErd2tkWjJUQk9XMmdJRjg4UEJUekQvZ3BlUkVBTUVieG5KY2FKSE5IcnB6amkwZ1FDUzZoZGtFZVl0OURGLzJxUGNFQzhSTTI4SHdtcjNzZE55aHQwMGJ5QXV0MmszZ3VmV050Z3RPRU9GR1V3Y1hXTkRiZE5icGdCR3hFdktrT1FzeGl2SngzM2lvdzBWdzVTNlNWVHJwVnExMXlzQTJScDdnVGZQZmt0YzZ6aHRYQkJDK2FkUkxzaGY2c0cyUmZIUFo1RUFjNHNWWjgzeUNOMDBGay80a2dndTQwWlR2SUVtNWcyNHF0VTRLakJyeC9CVFRIOGlmVkFTQUc3Z0tybld4SkRjVTd4OFg2RWNjemhtM282WWljdnNMWFdmaDNDaDFXMGs4eDBuWEYrMGZGeGd0NHBoejhRdnlwaXdDQ0ZLTXFYQ25xWEV4anExMGJlSCtVVUE3K25HNm1kRy9QdTBmM0xnRmNHcmwyczBrTk5qcG1vSjlvNEIyOUNNTzhkTVQ0UTVveDh1aXRGNmZxc3JKT3I4cW53TmJSenY2aFNuRzV3UCs2NEM3aDlscDMwaEtOdEtkV2p0ZGtidVBBMTluSjdUejN6Ui9pYmdBUmJoYjRBbGhhdmNCZWJtVEhjRmwyZnZZRW5XMG94OXhNeEtCUzhidEorS2lFYnE5ekE0UnRoUVhEaFBhMFQ5VEVlNjlnV3Vwd2M2dUJVcGhxdVhnZisvRnJJandlSFFTNC9wZHVNZTVFUlVNSFVkOXh2OFpSOThDeGtTNEYybjNFVXJVWjEwRVlOdzdCV205eDFHaVBzc2kzR2dpR1JES1dSWVpmWGxPTitkZk5iTStHZ0l3WWR3QUFBQUFTVVZPUks1Q1lJST0nO1xuY29uc3QgTUFQX01BUktFUl9TSEFET1cgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDa0FBQUFwQ0FRQUFBQUNhY2g5QUFBQ01VbEVRVlI0QWUzU2hZN2pRQkFFMEFvei9mOS9IVE16aGcxenJkS1VySmJkeCtLZDJuRDhWTnVkZnNML1RoLy8vZHlRTjJUSDZmM3kvQkdwQzM3OXJWK1MrcXFldEJPeEltTlFYTDhKQ0FyMlY0aU1RWEhHTkp4ZUNmWlhoU1JCY1FNZnZrT1dVZHRmemxMZ0FFTm1aRGNtbzJUVm10OE9TTTJlWHhCcDNEakhTTUZ1dHFTN1NibWVtekJpUit4cEtDTlVJUmtka2tZeGhBa3lHb0J2eVFGRUpFZWZ3U21tdkJmSnVKNmFLcUtXbkFrdkdaT2FaWFRVZ0ZxWVVMV05TSFVja1p1UjFISUlpbVVFeHV0Unh3ek9MUk9JRzR2S21DS1F0MzY0bUlsaFN5ekFmMW05bEhaSEpacmxBT01NenRSUmlLaW1wL3JwZEpEYzlBd3J5NXhUWkN0ZTdGSHR1Uzh3SmdlWUdyZXgyOHhOVGQwODZEaWs3dlVNc2NRT2E4eTREb0d0Q0NTa0FLbE53cGdOdHBoanJDNk1JSFVrUjZZV3h4czZTYzV4cW4yMjJtbUNSRnpJdDhsRWRLeCtpa0N0ZzkxcVMyV3B3VmZCZWxKQ2lRSnd2eml4Zkk5Y3haUVdnaVNKZWxLbndCRWxLWXRET2IyTUZiaG1VaWdiUmVRQlYwQ2c0K3FNWFN4WFN5R1VuNFViRjhsKzdxZFNHblRDMFhMQ21haElnVUhMaExPaHBWQ3R3NEN6WVh2TFFXUWJKTm14b0NzT0tBeFNnQkpubzc1YXZvbGtSdzhpSUFGY3NkYzAyZTlpeUNkOHRId21lU1NvS1Rvd0lndnNjU0daVU9BN1B1Q041YjJCWDltUU03UzB3WWhNTlU3NHpnc1BCajNIVTd3Z3VBZm54eGpGUUdCRTZwd04rR2pNRTl6SFk3ekdwOHdWeE1TaFlYOU5YdkVXRDNIYndKZjRnaU80Q0ZJUXhYU2NIMS9UTSswNGtrQmlBQUFBQUVsRlRrU3VRbUNDJztcbmNvbnN0IE1BUF9NQVJLRVJfQ0lSQ0xFX1JFRCA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVVDQVlBQUFDTmlSME5BQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFCM1JKVFVVSDRnY2JGd29nZW9oaEVBQUFBMWxKUkVGVU9NdWxsYzFySEdVY3h6Ky9aMloyMHpHRTdsdXlRYnlJZGlFeHJlNmFOdlN5U0VCQktCNzFWQUk1bUdKQTlnOFFwUjQ4YVZHSzZLMTYwcHRZRDdXeGg0Q1VrSnJGR3BLeUtXZ1FtblhmYVp0OXlXYWVlVHpzVEV4ajFZTy8wL0RNekdkK2I5L3ZDRUg4Y3U1MWpzUVFrQUVtZ0ZSd1ZnTTJnUkxRTy96d3lhdGZBeUNQZ1VXQVY0QTVZQVpJQW5ad3p3UHF3QXB3QmZnZTZCK0d5aEZZR25nWE9BKzRBQmp6YU40aTRWVUgrQko0RDZpRWgvWVIyR2ZBYXdjZ1kxQlB1RmpEd3dEbzNWMzhkbWNBRlhHQkJXQWNlRE9FaHNCSWtOa0E1dnM0eVFTeDJUd2pwM1BZOGRpZzNtYUwrNnRydEc0czQ5VWJvQlRCTzJYZ2JhQnZYY2c4Qi9BcThEN2c0UHNNUGZNMFR4WGV3czAreng5Mzd2RDc4bzlVTnpiUmprM3FwVHdqTDV5aysrczJYcU1adG1BQytCbllzb05wemdFdXh1QWtFeng1WVo2K1kxTjg1eUsxOVEyTTV3M2FaOXVrcGliSkZoWVpYNWpudHc4K2hHWXJMSDhPV0ZMQmFzeUVmWXZONXJIR1JpbGV1a3lsZUJ1TVFTd0xzU3d3aGtyeE5zVkxsN0hUbzBUelorbDZIc0dZWm9DTUN0Sk5oZ01ZT1oyanZQb1R0ZlVObEcwZDNVMlViVkZiMzZCeWE0MzRtV2xxQ2pvRGFCS1lVTUhTMmdEVzhEQjJQRVpyNis1Qm1ZOEw0M2swUzF1NHlRUytlNHlkVHB1TzFyWkF5dWIvaGdnOTdWSHV0amtlaWFJWXlNa0w5OHhydG9obG5rWHNmLzZXMkRieHpBbTY5UWI5Qnc4UkVYcGE3MWQ3M2FwaW9NMDZJdmp0RHZkWDF4aWZmcEhVMUNTK3AvOEc4ejFOYW1xUzlIU09lemRYMkcrM1FRU0J1c0NtWWlEMGxURDkxbzFsZEtWS3RyRElXUFlVaUdDMHhtZ05Jb3hsVDVFckxMSzdVMmI3MnRKaEthNDRTcFZDTFo4RHZnTGNjTEhIRitheDA2TlVicTNSTEcwQkVNK2NJRDJkWTNlbnpOcEhuOUFzM1VVR2FtbGJJbS80eG53WEFpUEF4NEUyd2ZjaEVTZWFQMHY4ekRSdU1nRkF0OTdnM3MwVnRxOHQwYW5XUWhnQ24wWXRxK0FiMHovc05tUEE1NGZOb2V0NTFCVDQ3akVRb2YvZzRWODlDMG9WK01ZU3RXQXdGWVU4NGpZVkJxNVJCczRqNHJxT1E4cnoyS2sxNkdrUEVUbklDbWdMZkdHSnV1aGpLcjR4eEllaS8yMndBc211MXZaT3QwMVA2MzBKREZhSlhIR1V1cjd2KzMxdERQRklsSmQvdU1yQmlQN3RGeUNRYXZUM3FQYTZWWUZOUjZuU250WjdqbElZNEhna3d1ejFid0g0RTVtQ1hJQkxRNUhuQUFBQUpYUkZXSFJrWVhSbE9tTnlaV0YwWlFBeU1ERTRMVEEzTFRJM1ZESXhPakV3T2pNeUt6QXlPakF3N3E2R253QUFBQ1YwUlZoMFpHRjBaVHB0YjJScFpua0FNakF4T0Mwd055MHlOMVF5TVRveE1Eb3pNaXN3TWpvd01KL3pQaU1BQUFBQVNVVk9SSzVDWUlJPSc7XG5jb25zdCBNQVBfTUFSS0VSX0NJUkNMRV9HUkVFTiA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVVDQVlBQUFDTmlSME5BQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUIzUkpUVVVINGdjYkZCZzYvVmhXNEFBQUE1VkpSRUZVT011bGxVRm9IRlVZeDMvdnpleGt1OFZrZHpQcnBncFdOSm9tNEpvME5hU25Ja0hySlJiMVVGQXNYbXEzS2xpdkpxQ0hoSjRxc1FkdG1rc1ZGS1FnWWtUYTBFcnhVQ01oYWQxQ1FyUTBEYmFKMjkxa2Q5MWtKcnM3TTg5RFpwbzBCQlQ4ejJWNDcvRjczL2ZlOS8rZXdGZW05ekNiMVQ4WURRTXRRQnVROElkendEUXdPOUJYWE51OFBqWDZEUUJpSzZ4L01Hb0FCNEczZ0c3QUJIUi8yZ0h5d0Rod0RyZzQwRmVzYm9hS0xiQW00Q1BnQ0JBQjhQQWVpRndpZzE4TCtCTDRlS0N2bU4yWWZ4QjJCa2dERVkvMUx5SjNrQXlaSkVNbUVibURZTnpmTUEwTTl3OUdrd0ZIWkhvUEIybCs2aS9BdzZNeEZLTW50cCt1K2hSeHZRR0FaYWZFUk9rR2x3dFh5VHVGemRHZUFkNGY2Q3RXZzdNNTZLZUpoMGR6ZURmSEgzMmRwTmJJeEdLR1M0V2ZBV2lKTmRPNzYzbTY2bE44ZnZkcmJxN05COUFqd0kvQXFIZzVjeXdNZkFXOEdrVDI0V05wOUtyRzBOUUltZndNanVjQW9FdWRsTm5LaWIxSHFlb1ZUczZkWlpsU0FQMFdlRVA2cGRFZHhONFQyMDlTYTJSb2FvVEo3SFdVVW1oQ1F4TWFTaWttczljWm1ocWhTWCtZQTNYN2NHMEhKUlErbzBYNmRXWUdGOUJWbitMWHhXdGs4alBvMG1DcmRHbVF5Yzh3a2YyTjduZ0hJdWZpV0RXVVVDYlFKdjJpMVFFZTBuWVMxeHY0b3pCM1A4M3Q1SGdPdnkvZndvekVpWGhocklVeW51WHFTcWlFNUg5S0luQXJEdFpmWldwTEZYVGZUZzVnbE4xVmxwMFNMYkZtZEttamxOb1dva3VkcCtOUGtMT1hLTlhLQ0NGd2JhZG1WMWZ1U2QrYmVZbkU4bXdtU2pkNGJsZUtsTm1LNDFXM1NiZEt5bXlscTZtZFgrNU9zbHF6RUVxQUpBOU1TMkRXOXlZQWx3dFh5YnBMbk5oN2xNNWsrL3J1eXNWVkxrSUlPcFB0Zk5ENU5nc3JXUzdjdnJJT1c5ZTROTFJaN2Z5ZFp1ZW5uckFOSEJLSTBLcG5jOHYrazQ2R1BmVHVmb0VubzQvenlNNGt6NWg3ZU9XcGwzaXo3VFVLYXlWT1RRNHpYNzZERkJKZ1ZValJmM3pvNzVuQUtSZDlvNmNsa3B0cjg1eWNPOHVCdW4xMHh6dDROdEcyM3J2c0pjN1Avc0NGMjFmSTJya042MG0ra0lZMkZwSnlvOXY0Qmg4R0RnVVdkRzBIa1hPSmVHRWtnbEt0ZlAvTWhCQUI3RHVocWZSN3A2MnNSR3k0MjI5QngzeWpXeEtKSGdtaEVobzVkNWtGSzR2bDJFaGtBRnRGOHBuUVZQcmQwMWJXVllwb25mSHZEVllKWmJxMm85dUxLN2kyVS9OdmMxd0ljVTRhMnRnN241U3FybExFalRwZXZEU0srQzlQZ0JJcVVWdXFZT2RXN2dIVDB0Qm0wNmVLbFpDVUtDQnFHUFNNZlEvQVB5MVhnMnY2S0lzRkFBQUFBRWxGVGtTdVFtQ0MnO1xuLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovXG5jb25zdCBQT0xZR09OX0JBU0VfQ09MT1IgPSAnIzMzODhmZic7XG5cbmNvbnN0IERHX0NPTVBBTllfTkFNRSA9ICdEZXZlbG9wbWVudCBHYXRld2F5JztcbmNvbnN0IERHX0FERFJFU1NfMSA9ICcxMTEwIFZlcm1vbnQgQXZlLCBOVywgU3VpdGUgNTAwJztcbmNvbnN0IERHX0FERFJFU1NfMiA9ICdXYXNoaW5ndG9uLCBEQyAyMDAwNSBVU0EnO1xuY29uc3QgREdfQ09OVEFDVF9JTkZPID0gJ2luZm9AZGV2ZWxvcG1lbnRnYXRld2F5Lm9yZywgVGVsOiArMS4yMDIuNTcyLjkyMDAsIEZheDogKzEgMjAyLjU3Mi45MjkwJztcblxuY29uc3QgTE9HX0RJUiA9ICdsb2dzJztcbmNvbnN0IExPR19GSUxFX05BTUUgPSAnYW1wb2ZmbGluZSc7XG5jb25zdCBMT0dfRklMRV9FWFRFTlNJT04gPSAnbG9nJztcblxuLy8gTWVzc2FnZSBjb25zdGFudHNcbi8vIHRvdGFsIGFtb3VudCBvZiB0aW1lIHRoZSBtZXNzYWdlIHN0YXlzIHZpc2libGVcbmNvbnN0IE1FU1NBR0VfVElNRU9VVCA9IDEwICogMTAwMDtcbi8vIHdoZW4gaXQncyB0aGlzIGFtb3VudCBvZiB0aW1lIGxlZnQsIHdlIG5vZml0eSB0aGUgdXNlciB0aGF0IHRoZSBtZXNzYWdlIGlzIGFib3V0IHRvIGRpc2FwcGVhclxuY29uc3QgTUVTU0FHRV9ESVNBUFBFQVJfVElNRU9VVCA9IE1FU1NBR0VfVElNRU9VVCAvIDU7XG5jb25zdCBNRVNTQUdFX0NIRUNLX0lOVEVSVkFMID0gMTAwO1xuLy8gaG93IGxvbmcgc2hvdWxkIHRoZSBlbnRlci9sZWF2ZSBhbmltYXRpb24gcnVuKG1zKVxuLy8gKGlmIHlvdSBjaGFuZ2UgdGhpcyB5b3UnbGwgd2FubmEgY2hhbmdlIGl0IGluIHN0eWxlLmNzcywgdG9vKVxuY29uc3QgTUVTU0FHRV9BTklNQVRJT05fRFVSQVRJT04gPSA1MDA7XG5cbi8vIHRoaXMgaXMgdGhlIGludGVybmFsIGRhdGUgZm9ybWF0IHVzZWQgdG8gc3RvcmUgYW5kIHN5bmMgdXAgZGF0ZXNcbmNvbnN0IElOVEVSTkFMX0RBVEVfRk9STUFUID0gJ1lZWVktTU0tRERUSEg6bW06c3MuU1NTWic7XG4vLyBjdXJyZW50bHkgc3VwcG9ydGVkIG1heCAmIG1pbiB5ZWFycyBpbiBBTVAsIGkuZS4gZnJvbSAxOTcwLTAxLTAxIHRpbGwgMjA1MC0xMi0zMVxuY29uc3QgTUlOX1NVUFBPUlRFRF9ZRUFSID0gMTk3MDtcbmNvbnN0IE1BWF9TVVBQT1JURURfWUVBUiA9IDIwNTA7XG5cbmNvbnN0IFVQREFURVNfRElSID0gJ3VwZGF0ZXMnO1xuY29uc3QgQ09OVEVOVF9ESVNQT1NJVElPTl9IRUFERVIgPSAnQ29udGVudC1EaXNwb3NpdGlvbic7XG5jb25zdCBVUERBVEVfVE1QX0ZJTEUgPSAnYW1wLW9mZmxpbmUtaW5zdGFsbGVyLnRtcCc7XG5cbmNvbnN0IE9USEVSX0lEID0gOTk5OTk5OTk5O1xuY29uc3QgTlJfU1lOQ19ISVNUT1JZX0VOVFJJRVMgPSAyMDtcbmNvbnN0IE5SX0xPR19GSUxFUyA9IDEwMDtcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI0R1cmF0aW9ucywgZXhhbXBsZTogXCJQMVkyTTEwRFQySDMwTVwiXG5jb25zdCBPTERfU1lOQ19MT0dTX0RVUkFUSU9OX0lTT184NjAxID0gJ1A2TSc7XG5jb25zdCBOUl9PTERfU1lOQ19MT0dTX1RPX0tFRVBfTUlOSU1VTSA9IE5SX1NZTkNfSElTVE9SWV9FTlRSSUVTO1xuXG5jb25zdCBNQVNURVJfQlJBTkNIID0gJ21hc3Rlcic7XG5jb25zdCBERVZFTE9QX0JSQU5DSCA9ICdkZXZlbG9wJztcbmNvbnN0IFJFTEVBU0VfQlJBTkNIX1JFR0VYID0gL3JlbGVhc2VcXC8vO1xuY29uc3QgUkVMRUFTRV9CUkFOQ0hFUyA9IFtNQVNURVJfQlJBTkNILCBSRUxFQVNFX0JSQU5DSF9SRUdFWF07XG5cbmNvbnN0IERJU0FCTEVfQ0hBTkdFTE9HUyA9ICdESVNBQkxFX0NIQU5HRUxPR1MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5mcmVlemUoe1xuICBCQVNFX1JFU1RfVVJMLFxuICBDT05ORUNUSU9OX1RJTUVPVVQsXG4gIENPTk5FQ1RJT05fRk9SQ0VEX1RJTUVPVVQsXG4gIFRJTUVPVVRfQ0hFQ0tfSU5URVJWQUwsXG4gIE1BWF9SRVRSWV9BVEVNUFRTLFxuICBFUlJPUlNfVE9fUkVUUlksXG4gIEVSUk9SU19OT19BTVBfU0VSVkVSLFxuICBDT05ORUNUSVZJVFlfQ0hFQ0tfSU5URVJWQUwsXG4gIFdPUktTUEFDRV9VUkwsXG4gIExPR0lOX1VSTCxcbiAgREVTS1RPUF9VUkwsXG4gIERFU0tUT1BfQ1VSUkVOVF9VUkwsXG4gIFNZTkNVUF9SRURJUkVDVF9VUkwsXG4gIFNZTkNVUF9ISVNUT1JZX1RBUkdFVCxcbiAgU1lOQ1VQX1NVTU1BUllfVVJMLFxuICBBQ1RJVklUWV9QUkVWSUVXX1VSTCxcbiAgQUNUSVZJVFlfRURJVF9VUkwsXG4gIFVQREFURV9VUkwsXG4gIFNFVFVQX1VSTCxcbiAgU0VUVElOR1NfVVJMLFxuICBDT0xMRUNUSU9OX1VTRVJTLFxuICBDT0xMRUNUSU9OX1dPUktQQUNFUyxcbiAgQ09MTEVDVElPTl9URUFNTUVNQkVSUyxcbiAgQ09MTEVDVElPTl9DTElFTlRfU0VUVElOR1MsXG4gIENPTExFQ1RJT05fR0xPQkFMX1NFVFRJTkdTLFxuICBDT0xMRUNUSU9OX0FDVElWSVRJRVMsXG4gIENPTExFQ1RJT05fRklFTERTLFxuICBDT0xMRUNUSU9OX1BPU1NJQkxFX1ZBTFVFUyxcbiAgQ09MTEVDVElPTl9TWU5DVVBfTE9HLFxuICBDT0xMRUNUSU9OX0xBTkdTLFxuICBDT0xMRUNUSU9OX1dTX1NFVFRJTkdTLFxuICBDT0xMRUNUSU9OX0NVUlJFTkNZX1JBVEVTLFxuICBDT0xMRUNUSU9OX0ZFQVRVUkVfTUFOQUdFUixcbiAgQ09MTEVDVElPTl9DT05UQUNUUyxcbiAgQ09MTEVDVElPTl9SRVNPVVJDRVMsXG4gIENPTExFQ1RJT05fUkVQT1NJVE9SWSxcbiAgQ09MTEVDVElPTl9HQVpFVFRFRVIsXG4gIENPTExFQ1RJT05fQ0FMRU5EQVJTLFxuICBDT0xMRUNUSU9OX0NIQU5HRVNFVFMsXG4gIEdBWkVUVEVFUl9ESVNUQU5DRV9ESVZJREUsXG4gIERCX0ZJTEVfUFJFRklYLFxuICBEQl9GSUxFX0VYVEVOU0lPTixcbiAgREJfQ09NTU9OX0RBVEFTVE9SRV9PUFRJT05TLFxuICBEQl9BVVRPQ09NUEFDVF9JTlRFUlZBTF9NSUxJU0VDT05EUyxcbiAgREJfREVGQVVMVF9RVUVSWV9MSU1JVCxcbiAgTEFOR1VBR0VfRU5HTElTSCxcbiAgRlNfTE9DQUxFU19ESVJFQ1RPUlksXG4gIExBTkdVQUdFX01BU1RFUl9UUkFOU0xBVElPTlNfRklMRSxcbiAgTEFOR1VBR0VfVFJBTlNMQVRJT05TX0ZJTEUsXG4gIExBTkdVQUdFX05FV19UUkFOU0xBVElPTlNfTVVTVF9TWU5DLFxuICBBU0FSX0RJUixcbiAgQVBQX0RJUkVDVE9SWSxcbiAgVEVTVF9ESVJFQ1RPUlksXG4gIFNUQVRJQ19ESVIsXG4gIElNQUdFU19ESVIsXG4gIERPQ19JQ09OUyxcbiAgREJfU1RBVElDX0RJUixcbiAgTUlHUkFUSU9OU19ESVIsXG4gIEhBU0hfSVRFUkFUSU9OUyxcbiAgRElHRVNUX0FMR09SSVRITV9TSEExLFxuICBESUdFU1RfQUxHT1JJVEhNX1NIQTI1NixcbiAgQUNUSVZJVFlfRURJVCxcbiAgQUNUSVZJVFlfVklFVyxcbiAgU1lOQ1VQX0ZPUkNFX0RBWVMsXG4gIFNZTkNVUF9CRVNUX0JFRk9SRV9EQVlTLFxuICBTWU5DVVBfTk9fREFURSxcbiAgU1lOQ1VQX1RZUEVfVFJBTlNMQVRJT05TLFxuICBTWU5DVVBfVFlQRV9VU0VSUyxcbiAgU1lOQ1VQX1RZUEVfQVNTRVRTLFxuICBTWU5DVVBfVFlQRV9XT1JLU1BBQ0VTLFxuICBTWU5DVVBfVFlQRV9HUyxcbiAgU1lOQ1VQX1RZUEVfRVhDSEFOR0VfUkFURVMsXG4gIFNZTkNVUF9UWVBFX0ZFQVRVUkVfTUFOQUdFUixcbiAgU1lOQ1VQX1RZUEVfV09SS1NQQUNFX01FTUJFUlMsXG4gIFNZTkNVUF9UWVBFX0FMTF9GSUVMRFMsXG4gIFNZTkNVUF9UWVBFX0FDVElWSVRJRVNfUFVMTCxcbiAgU1lOQ1VQX1RZUEVfQUNUSVZJVElFU19QVVNILFxuICBTWU5DVVBfVFlQRV9BQ1RJVklUWV9GSUVMRFMsXG4gIFNZTkNVUF9UWVBFX0FDVElWSVRZX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMsXG4gIFNZTkNVUF9UWVBFX0NPTlRBQ1RTX1BVTEwsXG4gIFNZTkNVUF9UWVBFX0NPTlRBQ1RTX1BVU0gsXG4gIFNZTkNVUF9UWVBFX0FDVElWSVRZX1BPU1NJQkxFX1ZBTFVFUyxcbiAgU1lOQ1VQX1RZUEVfQ09OVEFDVF9GSUVMRFMsXG4gIFNZTkNVUF9UWVBFX0NPTlRBQ1RfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyxcbiAgU1lOQ1VQX1RZUEVfQ09OVEFDVF9QT1NTSUJMRV9WQUxVRVMsXG4gIFNZTkNVUF9UWVBFX1JFU09VUkNFU19QVUxMLFxuICBTWU5DVVBfVFlQRV9SRVNPVVJDRVNfUFVTSCxcbiAgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfRklFTERTLFxuICBTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTLFxuICBTWU5DVVBfVFlQRV9SRVNPVVJDRV9QT1NTSUJMRV9WQUxVRVMsXG4gIFNZTkNVUF9UWVBFX0NPTU1PTl9QT1NTSUJMRV9WQUxVRVMsXG4gIFNZTkNVUF9UWVBFX1dPUktTUEFDRV9TRVRUSU5HUyxcbiAgU1lOQ1VQX1RZUEVfTUFQX1RJTEVTLFxuICBTWU5DVVBfVFlQRV9HQVpFVFRFRVIsXG4gIFNZTkNVUF9UWVBFX0NBTEVOREFSUyxcbiAgU1lOQ1VQX1NUQVRVU19TVUNDRVNTLFxuICBTWU5DVVBfU1RBVFVTX0ZBSUwsXG4gIFNZTkNVUF9TVEFUVVNfUEFSVElBTCxcbiAgU1lOQ1VQX1NUQVRVU19DQU5DRUxFRCxcbiAgU1lOQ1VQX1NZTkNfUkVRVUVTVEVEX0FULFxuICBTWU5DVVBfU1lOQ19SRVFVRVNURURfQlksXG4gIFNZTkNVUF9EQVRFVElNRV9GSUVMRCxcbiAgU1lOQ1VQX0RJRkZfTEVGVE9WRVIsXG4gIFNZTkNVUF9ERVBFTkRFTkNZX0NIRUNLX0lOVEVSVkFMLFxuICBTWU5DVVBfREVUQUlMU19TWU5DRUQsXG4gIFNZTkNVUF9ERVRBSUxTX1VOU1lOQ0VELFxuICBTWU5DVVBfUkVTT1VSQ0VfUFVMTF9CQVRDSF9TSVpFLFxuICBTWU5DVVBfQUNUSVZJVElFU19QVUxMX0JBVENIX1NJWkUsXG4gIFNZTkNVUF9DT05UQUNUU19QVUxMX0JBVENIX1NJWkUsXG4gIEFDVElWSVRZX1NUQVRVU19EUkFGVCxcbiAgQUNUSVZJVFlfU1RBVFVTX1VOVkFMSURBVEVELFxuICBBQ1RJVklUWV9TVEFUVVNfVkFMSURBVEVELFxuICBDVVJSRU5DWV9IT1VSLFxuICBERUZBVUxUX0NVUlJFTkNZLFxuICBSQVRFX1NBTUVfQ1VSUkVOQ1ksXG4gIFJBVEVfQ1VSUkVOQ1lfTk9UX0ZPVU5ELFxuICBDVVJSRU5DWV9QQUlSLFxuICBWRVJTSU9OX1BBVFRFUk4sXG4gIFZFUlNJT05fUEFUVEVSTl9HUk9VUFNfVE9fRVhUUkFDVCxcbiAgQU1QX0NPVU5UUllfTE9HTyxcbiAgQVNTRVRTX0RJUkVDVE9SWSxcbiAgQkFTRV82NF9QTkdfUFJFRklYLFxuICBUUkFOU1BBUkVOVF9GTEFHLFxuICBIRUxQX1BERl9GSUxFTkFNRSxcbiAgSEVMUF9ESVIsXG4gIEVORFNfV0lUSF9QVU5DVFVBVElPTl9SRUdFWCxcbiAgTUFQX1RJTEVTX0RJUixcbiAgVElMRVNfWklQX0ZJTEUsXG4gIE1BUF9NQVJLRVJfSU1BR0UsXG4gIE1BUF9NQVJLRVJfU0hBRE9XLFxuICBNQVBfTUFSS0VSX0NJUkNMRV9SRUQsXG4gIE1BUF9NQVJLRVJfQ0lSQ0xFX0dSRUVOLFxuICBQT0xZR09OX0JBU0VfQ09MT1IsXG4gIERHX0NPTVBBTllfTkFNRSxcbiAgREdfQUREUkVTU18xLFxuICBER19BRERSRVNTXzIsXG4gIERHX0NPTlRBQ1RfSU5GTyxcbiAgTE9HX0RJUixcbiAgTE9HX0ZJTEVfTkFNRSxcbiAgTE9HX0ZJTEVfRVhURU5TSU9OLFxuICBNRVNTQUdFX1RJTUVPVVQsXG4gIE1FU1NBR0VfRElTQVBQRUFSX1RJTUVPVVQsXG4gIE1FU1NBR0VfQ0hFQ0tfSU5URVJWQUwsXG4gIE1FU1NBR0VfQU5JTUFUSU9OX0RVUkFUSU9OLFxuICBJTlRFUk5BTF9EQVRFX0ZPUk1BVCxcbiAgTUlOX1NVUFBPUlRFRF9ZRUFSLFxuICBNQVhfU1VQUE9SVEVEX1lFQVIsXG4gIFVQREFURVNfRElSLFxuICBDT05URU5UX0RJU1BPU0lUSU9OX0hFQURFUixcbiAgVVBEQVRFX1RNUF9GSUxFLFxuICBPVEhFUl9JRCxcbiAgTlJfU1lOQ19ISVNUT1JZX0VOVFJJRVMsXG4gIE5SX0xPR19GSUxFUyxcbiAgT0xEX1NZTkNfTE9HU19EVVJBVElPTl9JU09fODYwMSxcbiAgTlJfT0xEX1NZTkNfTE9HU19UT19LRUVQX01JTklNVU0sXG4gIE1BU1RFUl9CUkFOQ0gsXG4gIERFVkVMT1BfQlJBTkNILFxuICBSRUxFQVNFX0JSQU5DSF9SRUdFWCxcbiAgUkVMRUFTRV9CUkFOQ0hFUyxcbiAgRElTQUJMRV9DSEFOR0VMT0dTXG59KTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cblxuLyoqXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cblxuY29uc3QgUFVCTElDX1ZJRVdfQ0hBTkdFX1BBU1NXT1JEID0gJy9QVUJMSUMgVklFVy9Mb2dpbiAtIFVzZXIgTWFuYWdlbWVudC9DaGFuZ2UgUGFzc3dvcmQnO1xuY29uc3QgUFVCTElDX1ZJRVdfVFJPVUJMRV9TSUdOX0lOID0gJy9QVUJMSUMgVklFVy9Mb2dpbiAtIFVzZXIgTWFuYWdlbWVudC9Ucm91YmxlIHNpZ25pbmcgaW4nO1xuY29uc3QgQUNUSVZJVFlfREVMSVZFUllfUkFURSA9ICcvUFJPSkVDVCBNQU5BR0VNRU5UL0Z1bmRpbmcvRnVuZGluZyBJbmZvcm1hdGlvbi9EZWxpdmVyeSByYXRlJztcbmNvbnN0IEFDVElWSVRZX1BST0pFQ1RfSURfQU5EX1BMQU5OSU5HID0gJy9QUk9KRUNUIE1BTkFHRU1FTlQvUHJvamVjdCBJRCBhbmQgUGxhbm5pbmcnO1xuY29uc3QgQUNUSVZJVFlfRFVSQVRJT05fT0ZfUFJPSkVDVCA9ICcvUFJPSkVDVCBNQU5BR0VNRU5UL1Byb2plY3QgSUQgYW5kIFBsYW5uaW5nL1BsYW5uaW5nL0R1cmF0aW9uIG9mIFByb2plY3QnO1xuY29uc3QgQUNUSVZJVFlfVEVBTV9MRUFERVIgPSAnL1BST0pFQ1QgTUFOQUdFTUVOVC9Qcm9qZWN0IElEIGFuZCBQbGFubmluZy9JZGVudGlmaWNhdGlvbi9EYXRhIFRlYW0gTGVhZGVyJztcbmNvbnN0IEFDVElWSVRZX1NBTUVfQVNfUFJPUE9TRURfU1RBUlRfREFURSA9XG4gICcvQWN0aXZpdHkgRm9ybS9QbGFubmluZy9BY3R1YWwgU3RhcnQgRGF0ZS9TYW1lIEFzIFByb3Bvc2VkIFN0YXJ0IERhdGUnO1xuY29uc3QgQUNUSVZJVFlfU0FNRV9BU19QUk9QT1NFRF9BUFBST1ZBTF9EQVRFID1cbiAgJy9BY3Rpdml0eSBGb3JtL1BsYW5uaW5nL0FjdHVhbCBBcHByb3ZhbCBEYXRlL1NhbWUgQXMgUHJvcG9zZWQgQXBwcm92YWwgRGF0ZSc7XG5jb25zdCBBQ1RJVklUWV9JREVOVElGSUNBVElPTiA9ICcvQWN0aXZpdHkgRm9ybS9JZGVudGlmaWNhdGlvbic7XG5jb25zdCBBQ1RJVklUWV9MQVNUX1VQREFURURfQlkgPSAnL0FjdGl2aXR5IEZvcm0vSWRlbnRpZmljYXRpb24vQWN0aXZpdHkgTGFzdCBVcGRhdGVkIGJ5JztcbmNvbnN0IEFDVElWSVRZX0xBU1RfVVBEQVRFRF9PTiA9ICcvQWN0aXZpdHkgRm9ybS9JZGVudGlmaWNhdGlvbi9BY3Rpdml0eSBVcGRhdGVkIE9uJztcbmNvbnN0IEFDVElWSVRZX0ZVTkRJTkcgPSAnL0FjdGl2aXR5IEZvcm0vRnVuZGluZyc7XG5jb25zdCBBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTSA9IGAke0FDVElWSVRZX0ZVTkRJTkd9L0Z1bmRpbmcgR3JvdXAvRnVuZGluZyBJdGVtYDtcbmNvbnN0IEFDVElWSVRZX1NFQ1RPUlMgPSAnL0FjdGl2aXR5IEZvcm0vU2VjdG9ycyc7XG5jb25zdCBBQ1RJVklUWV9QUklNQVJZX1NFQ1RPUlMgPSAnL0FjdGl2aXR5IEZvcm0vU2VjdG9ycy9QcmltYXJ5IFNlY3RvcnMnO1xuY29uc3QgQUNUSVZJVFlfU0VDT05EQVJZX1NFQ1RPUlMgPSAnL0FjdGl2aXR5IEZvcm0vU2VjdG9ycy9TZWNvbmRhcnkgU2VjdG9ycyc7XG5cbmNvbnN0IEFDVElWSVRZX1NUUlVDVFVSRVMgPSAnL0FjdGl2aXR5IEZvcm0vU3RydWN0dXJlcyc7XG5jb25zdCBBQ1RJVklUWV9TVFJVQ1RVUkVTX0FERF9TVFJVQ1RVUkUgPSBgJHtBQ1RJVklUWV9TVFJVQ1RVUkVTfS9BZGQgU3RydWN0dXJlYDtcblxuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OUyA9ICcvQWN0aXZpdHkgRm9ybS9Pcmdhbml6YXRpb25zJztcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfRE9OT1JfT1JHQU5JWkFUSU9OID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU30vRG9ub3IgT3JnYW5pemF0aW9uYDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfQkVORUZJQ0lBUllfQUdFTkNZID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU30vQmVuZWZpY2lhcnkgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfQ09OVFJBQ1RJTkdfQUdFTkNZID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU30vQ29udHJhY3RpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfRVhFQ1VUSU5HX0FHRU5DWSA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L0V4ZWN1dGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19JTVBMRU1FTlRJTkdfQUdFTkNZID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU30vSW1wbGVtZW50aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU30vUmVnaW9uYWwgR3JvdXBgO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUxBVEVEX0dPVkVSTk1FTlRfT1JHQU5JWkFUSU9OID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU30vUmVsYXRlZCBHb3Zlcm5tZW50IE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1NFQ1RPUl9HUk9VUCA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlN9L1NlY3RvciBHcm91cGA7XG5cbmNvbnN0IEFERF9GVU5ESU5HX0FVVE8gPSAnQWRkIEZ1bmRpbmcgSXRlbSBBdXRvbWF0aWNhbGx5JztcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfQkVORUZJQ0lBUllfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX0JFTkVGSUNJQVJZX0FHRU5DWX0vJHtBRERfRlVORElOR19BVVRPfWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0NPTlRSQUNUSU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU19DT05UUkFDVElOR19BR0VOQ1l9LyR7QUREX0ZVTkRJTkdfQVVUT31gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT05fQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfRE9OT1JfT1JHQU5JWkFUSU9OfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfRVhFQ1VUSU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU19FWEVDVVRJTkdfQUdFTkNZfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfSU1QTEVNRU5USU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU19JTVBMRU1FTlRJTkdfQUdFTkNZfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVHSU9OQUxfR1JPVVBfQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfUkVHSU9OQUxfR1JPVVB9LyR7QUREX0ZVTkRJTkdfQVVUT31gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRVNQT05TSUJMRV9PUkdBTklaQVRJT05fQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfUkVMQVRFRF9HT1ZFUk5NRU5UX09SR0FOSVpBVElPTn0vJHtBRERfRlVORElOR19BVVRPfWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1NFQ1RPUl9HUk9VUF9BRERfRlVORElOR19BVVRPID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVB9LyR7QUREX0ZVTkRJTkdfQVVUT31gO1xuXG5jb25zdCBBQ1RJVklUWV9GVU5ESU5HX1NFQVJDSCA9IGAke0FDVElWSVRZX0ZVTkRJTkd9L1NlYXJjaCBGdW5kaW5nIE9yZ2FuaXphdGlvbnNgO1xuY29uc3QgQUNUSVZJVFlfRlVORElOR19TRUFSQ0hfT1JHQU5JWkFUSU9OID0gYCR7QUNUSVZJVFlfRlVORElOR19TRUFSQ0h9L1NlYXJjaCBPcmdhbml6YXRpb25zYDtcbmNvbnN0IEFDVElWSVRZX0ZVTkRJTkdfU0VMRUNUX09SR19UWVBFID0gYCR7QUNUSVZJVFlfRlVORElOR19TRUFSQ0h9L1NlbGVjdCBPcmdhbml6YXRpb24gVHlwZWA7XG5cbmNvbnN0IEFDVElWSVRZX1BST0dSQU0gPSAnL0FjdGl2aXR5IEZvcm0vUHJvZ3JhbSc7XG5jb25zdCBBQ1RJVklUWV9QTEFOTklORyA9ICcvQWN0aXZpdHkgRm9ybS9QbGFubmluZyc7XG5cbmNvbnN0IEFDVElWSVRZX0NPTlRBQ1QgPSAnL0FjdGl2aXR5IEZvcm0vQ29udGFjdHMnO1xuY29uc3QgQUNUSVZJVFlfRE9DVU1FTlRTX0FERF9ET0NVTUVOVCA9ICcvQWN0aXZpdHkgRm9ybS9SZWxhdGVkIERvY3VtZW50cy9BZGQgTmV3IERvY3VtZW50JztcbmNvbnN0IEFDVElWSVRZX0RPQ1VNRU5UU19BRERfV0VCTElOSyA9ICcvQWN0aXZpdHkgRm9ybS9SZWxhdGVkIERvY3VtZW50cy9BZGQgTmV3IFdlYiBMaW5rJztcblxuY29uc3QgQUNUSVZJVFlfSVNTVUVTX0FERF9JU1NVRSA9ICcvQWN0aXZpdHkgRm9ybS9Jc3N1ZXMgU2VjdGlvbi9BZGQgSXNzdWUnO1xuY29uc3QgQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9JU1NVRSA9ICcvQWN0aXZpdHkgRm9ybS9Jc3N1ZXMgU2VjdGlvbi9Jc3N1ZS9EZWxldGUgSXRlbSc7XG5jb25zdCBBQ1RJVklUWV9JU1NVRVNfQUREX01FQVNVUkUgPSAnL0FjdGl2aXR5IEZvcm0vSXNzdWVzIFNlY3Rpb24vSXNzdWUvQWRkIEl0ZW0nO1xuY29uc3QgQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9NRUFTVVJFID0gJy9BY3Rpdml0eSBGb3JtL0lzc3VlcyBTZWN0aW9uL0lzc3VlL01lYXN1cmUvRGVsZXRlIEl0ZW0nO1xuY29uc3QgQUNUSVZJVFlfSVNTVUVTX0FERF9BQ1RPUiA9ICcvQWN0aXZpdHkgRm9ybS9Jc3N1ZXMgU2VjdGlvbi9Jc3N1ZS9NZWFzdXJlL0FkZCBJdGVtJztcbmNvbnN0IEFDVElWSVRZX0lTU1VFU19ERUxFVEVfQUNUT1IgPSAnL0FjdGl2aXR5IEZvcm0vSXNzdWVzIFNlY3Rpb24vSXNzdWUvTWVhc3VyZS9BY3Rvci9EZWxldGUgSXRlbSc7XG5cbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9JTVBMRU1FTlRJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0Rpc2J1cnNlbWVudHMvRGlzYnVyc2VtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEltcGxlbWVudGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9EaXNidXJzZW1lbnRzL0Rpc2J1cnNlbWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBDb250cmFjdGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0JFTkVGSUNJQVJZX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9EaXNidXJzZW1lbnRzL0Rpc2J1cnNlbWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBCZW5lZmljaWFyeSBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTiA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9EaXNidXJzZW1lbnRzL0Rpc2J1cnNlbWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBEb25vciBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgRXhlY3V0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgUmVnaW9uYWwgR3JvdXBgO1xuY29uc3QgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTiA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9EaXNidXJzZW1lbnRzL0Rpc2J1cnNlbWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBSZXNwb25zaWJsZSBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9EaXNidXJzZW1lbnRzL0Rpc2J1cnNlbWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBTZWN0b3IgR3JvdXBgO1xuXG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vQ29tbWl0bWVudHMvQ29tbWl0bWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBJbXBsZW1lbnRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQ09OVFJBQ1RJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0NvbW1pdG1lbnRzL0NvbW1pdG1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgQ29udHJhY3RpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0NvbW1pdG1lbnRzL0NvbW1pdG1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgQmVuZWZpY2lhcnkgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRE9OT1JfT1JHQU5JWkFUSU9OID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0NvbW1pdG1lbnRzL0NvbW1pdG1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgRG9ub3IgT3JnYW5pemF0aW9uYDtcbmNvbnN0IEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRVhFQ1VUSU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEV4ZWN1dGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRUdJT05BTF9HUk9VUCA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFJlZ2lvbmFsIEdyb3VwYDtcbmNvbnN0IEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0NvbW1pdG1lbnRzL0NvbW1pdG1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgUmVzcG9uc2libGUgT3JnYW5pemF0aW9uYDtcbmNvbnN0IEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfU0VDVE9SX0dST1VQID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0NvbW1pdG1lbnRzL0NvbW1pdG1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgU2VjdG9yIEdyb3VwYDtcblxuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9FeHBlbmRpdHVyZXMvRXhwZW5kaXR1cmVzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgSW1wbGVtZW50aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRXhwZW5kaXR1cmVzL0V4cGVuZGl0dXJlcyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIENvbnRyYWN0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRXhwZW5kaXR1cmVzL0V4cGVuZGl0dXJlcyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEJlbmVmaWNpYXJ5IEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04gPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRXhwZW5kaXR1cmVzL0V4cGVuZGl0dXJlcyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIERvbm9yIE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBFeGVjdXRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBSZWdpb25hbCBHcm91cGA7XG5jb25zdCBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04gPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRXhwZW5kaXR1cmVzL0V4cGVuZGl0dXJlcyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFJlc3BvbnNpYmxlIE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRXhwZW5kaXR1cmVzL0V4cGVuZGl0dXJlcyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFNlY3RvciBHcm91cGA7XG5cbmNvbnN0IE1URUZfUFJPSkVDVElPTlMgPSBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vTVRFRiBQcm9qZWN0aW9uc2A7XG5jb25zdCBNVEVGX1BST0pFQ1RJT05TX0FNT1VOVCA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9NVEVGIFByb2plY3Rpb25zL01URUYgUHJvamVjdGlvbnMgVGFibGUvQW1vdW50YDtcbmNvbnN0IE1URUZfUFJPSkVDVElPTlNfQ1VSUkVOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vTVRFRiBQcm9qZWN0aW9ucy9NVEVGIFByb2plY3Rpb25zIFRhYmxlL0N1cnJlbmN5YDtcbmNvbnN0IE1URUZfUFJPSkVDVElPTlNfUFJPSkVDVElPTiA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9NVEVGIFByb2plY3Rpb25zL01URUYgUHJvamVjdGlvbnMgVGFibGUvTVRFRiBQcm9qZWN0aW9uYDtcbmNvbnN0IE1URUZfUFJPSkVDVElPTlNfREFURSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9NVEVGIFByb2plY3Rpb25zL01URUYgUHJvamVjdGlvbnMgVGFibGUvUHJvamVjdGlvbiBEYXRlYDtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKHtcbiAgUFVCTElDX1ZJRVdfQ0hBTkdFX1BBU1NXT1JELFxuICBQVUJMSUNfVklFV19UUk9VQkxFX1NJR05fSU4sXG4gIEFDVElWSVRZX0RFTElWRVJZX1JBVEUsXG4gIEFDVElWSVRZX1BST0pFQ1RfSURfQU5EX1BMQU5OSU5HLFxuICBBQ1RJVklUWV9EVVJBVElPTl9PRl9QUk9KRUNULFxuICBBQ1RJVklUWV9URUFNX0xFQURFUixcbiAgQUNUSVZJVFlfU0FNRV9BU19QUk9QT1NFRF9TVEFSVF9EQVRFLFxuICBBQ1RJVklUWV9TQU1FX0FTX1BST1BPU0VEX0FQUFJPVkFMX0RBVEUsXG4gIEFDVElWSVRZX0lERU5USUZJQ0FUSU9OLFxuICBBQ1RJVklUWV9MQVNUX1VQREFURURfQlksXG4gIEFDVElWSVRZX0xBU1RfVVBEQVRFRF9PTixcbiAgQUNUSVZJVFlfU0VDVE9SUyxcbiAgQUNUSVZJVFlfUFJJTUFSWV9TRUNUT1JTLFxuICBBQ1RJVklUWV9TRUNPTkRBUllfU0VDVE9SUyxcbiAgQUNUSVZJVFlfU1RSVUNUVVJFUyxcbiAgQUNUSVZJVFlfU1RSVUNUVVJFU19BRERfU1RSVUNUVVJFLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0RPTk9SX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19CRU5FRklDSUFSWV9BR0VOQ1ksXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfQ09OVFJBQ1RJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0VYRUNVVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfSU1QTEVNRU5USU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUdJT05BTF9HUk9VUCxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUxBVEVEX0dPVkVSTk1FTlRfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1NFQ1RPUl9HUk9VUCxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19CRU5FRklDSUFSWV9BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19DT05UUkFDVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT05fQUREX0ZVTkRJTkdfQVVUTyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19FWEVDVVRJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfSU1QTEVNRU5USU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfU0VDVE9SX0dST1VQX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX0ZVTkRJTkdfU0VBUkNILFxuICBBQ1RJVklUWV9GVU5ESU5HX1NFQVJDSF9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX0ZVTkRJTkdfU0VMRUNUX09SR19UWVBFLFxuICBBQ1RJVklUWV9QUk9HUkFNLFxuICBBQ1RJVklUWV9QTEFOTklORyxcbiAgQUNUSVZJVFlfQ09OVEFDVCxcbiAgQUNUSVZJVFlfRE9DVU1FTlRTX0FERF9ET0NVTUVOVCxcbiAgQUNUSVZJVFlfRE9DVU1FTlRTX0FERF9XRUJMSU5LLFxuICBBQ1RJVklUWV9JU1NVRVNfQUREX0lTU1VFLFxuICBBQ1RJVklUWV9JU1NVRVNfREVMRVRFX0lTU1VFLFxuICBBQ1RJVklUWV9JU1NVRVNfQUREX01FQVNVUkUsXG4gIEFDVElWSVRZX0lTU1VFU19ERUxFVEVfTUVBU1VSRSxcbiAgQUNUSVZJVFlfSVNTVUVTX0FERF9BQ1RPUixcbiAgQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9BQ1RPUixcbiAgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1ksXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAsXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAsXG4gIEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZLFxuICBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQLFxuICBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAsXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCxcbiAgTVRFRl9QUk9KRUNUSU9OUyxcbiAgTVRFRl9QUk9KRUNUSU9OU19BTU9VTlQsXG4gIE1URUZfUFJPSkVDVElPTlNfQ1VSUkVOQ1ksXG4gIE1URUZfUFJPSkVDVElPTlNfUFJPSkVDVElPTixcbiAgTVRFRl9QUk9KRUNUSU9OU19EQVRFLFxufSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVSVV0aWxzIHtcblxuICBzdGF0aWMgc3RyaW5nVG9JZChzdHJpbmc6IHN0cmluZykge1xuICAgIHN0cmluZyA9IHN0cmluZyB8fCAnJztcbiAgICBsZXQgaGFzaCA9IDUzODE7XG4gICAgZm9yIChsZXQgaSA9IHN0cmluZy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSAqL1xuICAgICAgaGFzaCA9IChoYXNoICogMzMpIF4gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHJldHVybiBoYXNoID4+PiAwO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tYml0d2lzZSAqL1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIHVuaXF1ZSBpZCBmb3IgZWFjaCBjYWxsLCBvdmVyIHRoZSBzYW1lIHN0cmluZ1xuICAgKiBAcGFyYW0gc3RyaW5nXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBzdHJpbmdUb1VuaXF1ZUlkKHN0cmluZzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuc3RyaW5nVG9JZChzdHJpbmcpfS0ke0RhdGUubm93KCl9LSR7TWF0aC5yYW5kb20oKVxuICAgICAgLnRvU3RyaW5nKClcbiAgICAgIC5zdWJzdHJpbmcoMil9YDtcbiAgfVxuXG4gIHN0YXRpYyBudW1iZXJSYW5kb20oKSB7XG4gICAgcmV0dXJuIE1hdGgudHJ1bmMoKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKSk7XG4gIH1cblxuICBzdGF0aWMgY2FwaXRhbGl6ZSh0ZXh0OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC8oPzpefFxccylcXFMvZywgY2hhciA9PiBjaGFyLnRvVXBwZXJDYXNlKCkpO1xuICB9XG5cbiAgc3RhdGljIGNsb25lRGVlcChvYmopIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbiAgfVxufTtcbiIsImltcG9ydCBGTUMgZnJvbSAnLi9GZWF0dXJlTWFuYWdlckNvbnN0YW50cyc7XG5pbXBvcnQgVUlVdGlscyBmcm9tICcuLi8uLi91dGlscy9VSVV0aWxzJztcblxuLyoqXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cblxuLy8gQWN0aXZpdHkgZmllbGRzXG5jb25zdCBBQ1RJVklUWV9CVURHRVQgPSAnYWN0aXZpdHlfYnVkZ2V0JztcbmNvbnN0IEFDVElWSVRZX1NUQVRVUyA9ICdhY3Rpdml0eV9zdGF0dXMnO1xuY29uc3QgU1RBVFVTX1JFQVNPTiA9ICdzdGF0dXNfcmVhc29uJztcbmNvbnN0IEZJTkFOQ0lBTF9JTlNUUlVNRU5UID0gJ2ZpbmFuY2lhbF9pbnN0cnVtZW50JztcbmNvbnN0IFRZUEVfT0ZfSU1QTEVNRU5UQVRJT04gPSAndHlwZV9vZl9pbXBsZW1lbnRhdGlvbic7XG5jb25zdCBPQkpFQ1RJVkUgPSAnb2JqZWN0aXZlJztcbmNvbnN0IFJFU1VMVFMgPSAncmVzdWx0cyc7XG5jb25zdCBCVURHRVRfQ09ERV9QUk9KRUNUX0lEID0gJ2J1ZGdldF9jb2RlX3Byb2plY3RfaWQnO1xuY29uc3QgQUNUVUFMX0FQUFJPVkFMX0RBVEUgPSAnYWN0dWFsX2FwcHJvdmFsX2RhdGUnO1xuY29uc3QgRlVORElOR1MgPSAnZnVuZGluZ3MnO1xuY29uc3QgRlVORElOR19ET05PUl9PUkdfSUQgPSAnZG9ub3Jfb3JnYW5pemF0aW9uX2lkJztcbmNvbnN0IElTX0RSQUZUID0gJ2lzX2RyYWZ0JztcbmNvbnN0IE9SR19ST0xFX09SR19JRCA9ICdvcmdhbml6YXRpb24nO1xuY29uc3QgQURESVRJT05BTF9JTkZPID0gJ2FkZGl0aW9uYWxfaW5mbyc7XG5jb25zdCBQUklNQVJZX1NFQ1RPUlMgPSAncHJpbWFyeV9zZWN0b3JzJztcbmNvbnN0IFNFQ09OREFSWV9TRUNUT1JTID0gJ3NlY29uZGFyeV9zZWN0b3JzJztcbmNvbnN0IFRFUlRJQVJZX1NFQ1RPUlMgPSAndGVydGlhcnlfc2VjdG9ycyc7XG5jb25zdCBUQUdfU0VDVE9SUyA9ICd0YWdfc2VjdG9ycyc7XG5jb25zdCBTRUNUT1IgPSAnc2VjdG9yJztcbmNvbnN0IFNFQ1RPUl9QRVJDRU5UQUdFID0gJ3NlY3Rvcl9wZXJjZW50YWdlJztcbmNvbnN0IEZJTkFOQ0lOR19JTlNUUlVNRU5UID0gJ2ZpbmFuY2luZ19pbnN0cnVtZW50JztcbmNvbnN0IE1PREFMSVRJRVMgPSAnbW9kYWxpdGllcyc7XG5jb25zdCBMSU5FX01JTklTVFJZX1JBTksgPSAnbGluZV9taW5pc3RyeV9yYW5rJztcbmNvbnN0IEdPVkVSTk1FTlRfQUdSRUVNRU5UX05VTUJFUiA9ICdnb3Zlcm5tZW50X2FncmVlbWVudF9udW1iZXInO1xuY29uc3QgRlVORElOR19TVEFUVVMgPSAnZnVuZGluZ19zdGF0dXMnO1xuY29uc3QgTE9DQVRJT05TID0gJ2xvY2F0aW9ucyc7XG5jb25zdCBMT0NBVElPTiA9ICdsb2NhdGlvbic7XG5jb25zdCBMT0NBVElPTl9QRVJDRU5UQUdFID0gJ2xvY2F0aW9uX3BlcmNlbnRhZ2UnO1xuY29uc3QgSU1QTEVNRU5UQVRJT05fTE9DQVRJT04gPSAnaW1wbGVtZW50YXRpb25fbG9jYXRpb24nO1xuY29uc3QgSU1QTEVNRU5UQVRJT05fTEVWRUwgPSAnaW1wbGVtZW50YXRpb25fbGV2ZWwnO1xuY29uc3QgQVBQUk9WQUxfU1RBVFVTID0gJ2FwcHJvdmFsX3N0YXR1cyc7XG5jb25zdCBBUFBST1ZFRF9CWSA9ICdhcHByb3ZlZF9ieSc7XG5jb25zdCBBUFBST1ZBTF9EQVRFID0gJ2FwcHJvdmFsX2RhdGUnO1xuY29uc3QgVFlQRV9PRl9BU1NJU1RBTkNFID0gJ3R5cGVfb2ZfYXNzaXN0YW5jZSc7XG5jb25zdCBFWFBFTkRJVFVSRV9DTEFTUyA9ICdleHBlbmRpdHVyZV9jbGFzcyc7XG5jb25zdCBGVU5ESU5HX0RFVEFJTFMgPSAnZnVuZGluZ19kZXRhaWxzJztcbmNvbnN0IE1PREVfT0ZfUEFZTUVOVCA9ICdtb2RlX29mX3BheW1lbnQnO1xuY29uc3QgRlVORElOR19DTEFTU0lGSUNBVElPTl9EQVRFID0gJ2Z1bmRpbmdfY2xhc3NpZmljYXRpb25fZGF0ZSc7XG5jb25zdCBBR1JFRU1FTlQgPSAnYWdyZWVtZW50JztcbmNvbnN0IERPTk9SX09CSkVDVElWRSA9ICdkb25vcl9vYmplY3RpdmUnO1xuY29uc3QgQ09ORElUSU9OUyA9ICdjb25kaXRpb25zJztcbmNvbnN0IEFHUkVFTUVOVF9DT0RFID0gJ2NvZGUnO1xuY29uc3QgQUdSRUVNRU5UX1RJVExFID0gJ3RpdGxlJztcbmNvbnN0IFBST0pFQ1RfQ0FURUdPUlkgPSAncHJvamVjdF9jYXRlZ29yeSc7XG5jb25zdCBQUk9KRUNUX0lNUExFTUVOVElOR19VTklUID0gJ3Byb2plY3RfaW1wbGVtZW50aW5nX3VuaXQnO1xuY29uc3QgT1JHQU5JWkFUSU9OID0gJ29yZ2FuaXphdGlvbic7XG5jb25zdCBQRVJDRU5UQUdFID0gJ3BlcmNlbnRhZ2UnO1xuY29uc3QgQU1QX09SR0FOSVpBVElPTl9ST0xFX0lEID0gJ2FtcF9vcmdhbml6YXRpb25fcm9sZV9pZCc7XG5jb25zdCBST0xFID0gJ3JvbGUnO1xuY29uc3QgRVhFQ1VUSU5HX0FHRU5DWSA9ICdleGVjdXRpbmdfYWdlbmN5JztcbmNvbnN0IENPTlRSQUNUSU5HX0FHRU5DWSA9ICdjb250cmFjdGluZ19hZ2VuY3knO1xuY29uc3QgQkVORUZJQ0lBUllfQUdFTkNZID0gJ2JlbmVmaWNpYXJ5X2FnZW5jeSc7XG5jb25zdCBJTVBMRU1FTlRJTkdfQUdFTkNZID0gJ2ltcGxlbWVudGluZ19hZ2VuY3knO1xuY29uc3QgUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OID0gJ3Jlc3BvbnNpYmxlX29yZ2FuaXphdGlvbic7XG5jb25zdCBET05PUl9PUkdBTklaQVRJT04gPSAnZG9ub3Jfb3JnYW5pemF0aW9uJztcbmNvbnN0IFJFR0lPTkFMX0dST1VQID0gJ3JlZ2lvbmFsX2dyb3VwJztcbmNvbnN0IFNFQ1RPUl9HUk9VUCA9ICdzZWN0b3JfZ3JvdXAnO1xuY29uc3QgQlVER0VUUyA9ICdidWRnZXRzJztcbmNvbnN0IEJVREdFVF9DT0RFID0gJ2J1ZGdldF9jb2RlJztcbmNvbnN0IEJVREdFVF9PUkdBTklaQVRJT05fQ09ERSA9ICdidWRnZXRfb3JnYW5pemF0aW9uX2NvZGUnO1xuY29uc3QgQVJDSElWRUQgPSAnYXJjaGl2ZWQnO1xuY29uc3QgVFJBTlNBQ1RJT05fREFURSA9ICd0cmFuc2FjdGlvbl9kYXRlJztcbmNvbnN0IFRSQU5TQUNUSU9OX1RZUEUgPSAndHJhbnNhY3Rpb25fdHlwZSc7XG5jb25zdCBDT01NSVRNRU5UUyA9ICdjb21taXRtZW50cyc7XG5jb25zdCBESVNCVVJTRU1FTlRTID0gJ2Rpc2J1cnNlbWVudHMnO1xuY29uc3QgRVhQRU5ESVRVUkVTID0gJ2V4cGVuZGl0dXJlcyc7XG5jb25zdCBFU1RJTUFURURfRElTQlVSU0VNRU5UUyA9ICdlc3RpbWF0ZWRfZGlzYnVyc2VtZW50cyc7XG5jb25zdCBUUkFOU0FDVElPTl9BTU9VTlQgPSAndHJhbnNhY3Rpb25fYW1vdW50JztcbmNvbnN0IEFESlVTVE1FTlRfVFlQRSA9ICdhZGp1c3RtZW50X3R5cGUnO1xuY29uc3QgQUNUVUFMX1NUQVJUX0RBVEUgPSAnYWN0dWFsX3N0YXJ0X2RhdGUnO1xuY29uc3QgUFJPUE9TRURfU1RBUlRfREFURSA9ICdwcm9wb3NlZF9zdGFydF9kYXRlJztcbmNvbnN0IEFDVFVBTF9DT01QTEVUSU9OX0RBVEUgPSAnYWN0dWFsX2NvbXBsZXRpb25fZGF0ZSc7XG5jb25zdCBDT05UUkFDVElOR19EQVRFID0gJ2NvbnRyYWN0aW5nX2RhdGUnO1xuY29uc3QgRElTQlVSU0VNRU5UX0RBVEUgPSAnZGlzYnVyc2VtZW50X2RhdGUnO1xuY29uc3QgUFJPUE9TRURfQVBQUk9WQUxfREFURSA9ICdwcm9wb3NlZF9hcHByb3ZhbF9kYXRlJztcbmNvbnN0IE9SSUdJTkFMX0NPTVBMRVRJT05fREFURSA9ICdvcmlnaW5hbF9jb21wbGV0aW9uX2RhdGUnO1xuY29uc3QgUFJPUE9TRURfQ09NUExFVElPTl9EQVRFID0gJ3Byb3Bvc2VkX2NvbXBsZXRpb25fZGF0ZSc7XG5jb25zdCBGSU5BTF9EQVRFX0ZPUl9ESVNCVVJTRU1FTlRTID0gJ2ZpbmFsX2RhdGVfZm9yX2Rpc2J1cnNlbWVudHMnO1xuY29uc3QgRklOQUxfREFURV9GT1JfQ09OVFJBQ1RJTkcgPSAnZmluYWxfZGF0ZV9mb3JfY29udHJhY3RpbmcnO1xuY29uc3QgRUZGRUNUSVZFX0ZVTkRJTkdfREFURSA9ICdlZmZlY3RpdmVfZnVuZGluZ19kYXRlJztcbmNvbnN0IEZVTkRJTkdfQ0xPU0lOR19EQVRFID0gJ2Z1bmRpbmdfY2xvc2luZ19kYXRlJztcbmNvbnN0IFJBVElGSUNBVElPTl9EQVRFID0gJ3JhdGlmaWNhdGlvbl9kYXRlJztcbmNvbnN0IE1BVFVSSVRZID0gJ21hdHVyaXR5JztcbmNvbnN0IExBU1RfQVVESVRfREFURSA9ICdsYXN0X2F1ZGl0X2RhdGUnO1xuY29uc3QgU0lHTkFUVVJFX0RBVEUgPSAnc2lnbmF0dXJlX2RhdGUnO1xuY29uc3QgSFVNQU5JVEFSSUFOX0FJRCA9ICdodW1hbml0YXJpYW5fYWlkJztcbmNvbnN0IERJU0FTVEVSX1JFU1BPTlNFID0gJ2Rpc2FzdGVyX3Jlc3BvbnNlJztcbmNvbnN0IFBST0dSQU0gPSAncHJvZ3JhbSc7XG5jb25zdCBQUk9HUkFNX1BFUkNFTlRBR0UgPSAncHJvZ3JhbV9wZXJjZW50YWdlJztcbmNvbnN0IFBST0dSQU1fU0VUVElOR1MgPSAncHJvZ3JhbV9zZXR0aW5ncyc7XG5jb25zdCBOQVRJT05BTF9QTEFOX09CSkVDVElWRSA9ICduYXRpb25hbF9wbGFuX29iamVjdGl2ZSc7XG5jb25zdCBQUklNQVJZX1BST0dSQU1TID0gJ3ByaW1hcnlfcHJvZ3JhbXMnO1xuY29uc3QgU0VDT05EQVJZX1BST0dSQU1TID0gJ3NlY29uZGFyeV9wcm9ncmFtcyc7XG5jb25zdCBURVJUSUFSX1BST0dSQU1TID0gJ3RlcnRpYXJ5X3Byb2dyYW1zJztcbmNvbnN0IEdPVkVSTk1FTlRfQVBQUk9WQUxfUFJPQ0VEVVJFUyA9ICdnb3Zlcm5tZW50X2FwcHJvdmFsX3Byb2NlZHVyZXMnO1xuY29uc3QgSk9JTlRfQ1JJVEVSSUEgPSAnam9pbnRfY3JpdGVyaWEnO1xuY29uc3QgVEVBTSA9ICd0ZWFtJztcbmNvbnN0IFJFSkVDVEVEX0lEID0gJ3JlamVjdGVkSWQnO1xuY29uc3QgSU5URVJOQUxfSUQgPSAnaW50ZXJuYWxfaWQnO1xuY29uc3QgQU1QX0lEID0gJ2FtcF9pZCc7XG5jb25zdCBQUk9KRUNUX1RJVExFID0gJ3Byb2plY3RfdGl0bGUnO1xuY29uc3QgREVTQ1JJUFRJT04gPSAnZGVzY3JpcHRpb24nO1xuY29uc3QgTU9ESUZJRURfQlkgPSAnbW9kaWZpZWRfYnknO1xuY29uc3QgTU9ESUZJRURfT04gPSAndXBkYXRlX2RhdGUnO1xuY29uc3QgQ1JFQVRFRF9CWSA9ICdjcmVhdGVkX2J5JztcbmNvbnN0IENSRUFURURfT04gPSAnY3JlYXRpb25fZGF0ZSc7XG5jb25zdCBMQVNUX0lNUE9SVEVEX0JZID0gJ2xhc3RfaW1wb3J0ZWRfYnknO1xuY29uc3QgQ0xJRU5UX0NIQU5HRV9JRCA9ICdjbGllbnQtY2hhbmdlLWlkJztcbmNvbnN0IENMSUVOVF9DUkVBVEVEX09OID0gJ2NsaWVudC1jcmVhdGVkLW9uJztcbmNvbnN0IENMSUVOVF9VUERBVEVEX09OID0gJ2NsaWVudC11cGRhdGVkLW9uJztcbmNvbnN0IElTX1BVU0hFRCA9ICdpcy1wdXNoZWQnO1xuY29uc3QgQUNUSVZJVFlfR1JPVVAgPSAnYWN0aXZpdHlfZ3JvdXAnO1xuY29uc3QgVkVSU0lPTiA9ICd2ZXJzaW9uJztcbmNvbnN0IFBST0pFQ1RfQ09NTUVOVFMgPSAncHJvamVjdF9jb21tZW50cyc7XG5jb25zdCBMRVNTT05TX0xFQVJORUQgPSAnbGVzc29uc19sZWFybmVkJztcbmNvbnN0IFBST0pFQ1RfSU1QQUNUID0gJ3Byb2plY3RfaW1wYWN0JztcbmNvbnN0IEFDVElWSVRZX1NVTU1BUlkgPSAnYWN0aXZpdHlfc3VtbWFyeSc7XG5jb25zdCBDT05ESVRJT05BTElUSUVTID0gJ2NvbmRpdGlvbmFsaXRpZXMnO1xuY29uc3QgUFJPSkVDVF9NQU5BR0VNRU5UID0gJ3Byb2plY3RfbWFuYWdlbWVudCc7XG5jb25zdCBBX0NfQ0hBUFRFUiA9ICdhX2NfY2hhcHRlcic7XG5jb25zdCBDUklTX05VTUJFUiA9ICdjcmlzX251bWJlcic7XG5jb25zdCBJQVRJX0lERU5USUZJRVIgPSAnaWF0aV9pZGVudGlmaWVyJztcbmNvbnN0IEFDVElWSVRZX0lOVEVSTkFMX0lEUyA9ICdhY3Rpdml0eV9pbnRlcm5hbF9pZHMnO1xuY29uc3QgSElFUkFSQ0hJQ0FMX1ZBTFVFID0gJ2hpZXJhcmNoaWNhbF92YWx1ZSc7XG5jb25zdCBISUVSQVJDSElDQUxfVkFMVUVfUEFSVFMgPSAnaGllcmFyY2hpY2FsX3ZhbHVlX3BhcnRzJztcbmNvbnN0IEhJRVJBUkNISUNBTF9WQUxVRV9ERVBUSCA9ICdoaWVyYXJjaGljYWxfdmFsdWVfZGVwdGgnO1xuY29uc3QgUFBDX0FNT1VOVCA9ICdwcGNfYW1vdW50JztcbmNvbnN0IFJQQ19BTU9VTlQgPSAncnBjX2Ftb3VudCc7XG5jb25zdCBQUENfQU5OVUFMX0JVREdFVFMgPSAncHBjX2FubnVhbF9idWRnZXRzJztcbmNvbnN0IEFNT1VOVCA9ICdhbW91bnQnO1xuY29uc3QgQ1VSUkVOQ1kgPSAnY3VycmVuY3knO1xuY29uc3QgRlVORElOR19EQVRFID0gJ2Z1bmRpbmdfZGF0ZSc7XG5jb25zdCBDT01QT05FTlRTID0gJ2NvbXBvbmVudHMnO1xuY29uc3QgVE9UQUxfTlVNQkVSX09GX0ZVTkRJTkdfU09VUkNFUyA9ICd0b3RhbF9udW1iZXJfb2ZfZnVuZGluZ19zb3VyY2VzJztcbmNvbnN0IFNPVVJDRV9ST0xFID0gJ3NvdXJjZV9yb2xlJztcbmNvbnN0IEFNUF9GVU5ESU5HX0lEID0gJ2Z1bmRpbmdfaWQnO1xuY29uc3QgSVNTVUVTID0gJ2lzc3Vlcyc7XG5jb25zdCBJU1NVRV9EQVRFID0gJ2lzc3VlX2RhdGUnO1xuY29uc3QgSVNTVUVfTkFNRSA9ICduYW1lJztcbmNvbnN0IE1FQVNVUkVTID0gJ21lYXN1cmVzJztcbmNvbnN0IE1FQVNVUkVfTkFNRSA9ICduYW1lJztcbmNvbnN0IE1FQVNVUkVfREFURSA9ICdtZWFzdXJlX2RhdGUnO1xuY29uc3QgQUNUT1JTID0gJ2FjdG9ycyc7XG5jb25zdCBBQ1RPUl9OQU1FID0gJ25hbWUnO1xuY29uc3QgU1RSVUNUVVJFUyA9ICdzdHJ1Y3R1cmVzJztcbmNvbnN0IFNUUlVDVFVSRVNfVElUTEUgPSAndGl0bGUnO1xuY29uc3QgU1RSVUNUVVJFU19ERVNDUklQVElPTiA9ICdkZXNjcmlwdGlvbic7XG5jb25zdCBTVFJVQ1RVUkVTX0xBVElUVURFID0gJ2xhdGl0dWRlJztcbmNvbnN0IFNUUlVDVFVSRVNfTE9OR0lUVURFID0gJ2xvbmdpdHVkZSc7XG5jb25zdCBTVFJVQ1RVUkVTX0NPTE9SID0gJ3N0cnVjdHVyZV9jb2xvcic7XG5jb25zdCBTVFJVQ1RVUkVTX0xBVCA9ICdsYXQnO1xuY29uc3QgU1RSVUNUVVJFU19MTkcgPSAnbG5nJztcbmNvbnN0IFNUUlVDVFVSRVNfU0hBUEUgPSAnc2hhcGUnO1xuY29uc3QgU1RSVUNUVVJFU19QT0lOVCA9ICdQb2ludCc7XG5jb25zdCBTVFJVQ1RVUkVTX1BPTFlHT04gPSAnUG9seWdvbic7XG5jb25zdCBTVFJVQ1RVUkVTX1BPTFlMSU5FID0gJ1BvbHlsaW5lJztcbmNvbnN0IFNUUlVDVFVSRVNfQ09PUkRJTkFURVMgPSAnY29vcmRpbmF0ZXMnO1xuY29uc3QgQ09NUE9ORU5UX1RZUEUgPSAnY29tcG9uZW50X3R5cGUnO1xuY29uc3QgQ09NUE9ORU5UX1RJVExFID0gJ2NvbXBvbmVudF90aXRsZSc7XG5jb25zdCBDT01QT05FTlRfRlVORElORyA9ICdmdW5kaW5nJztcbmNvbnN0IENPTVBPTkVOVF9ERVNDUklQVElPTiA9ICdkZXNjcmlwdGlvbic7XG5jb25zdCBDT01QT05FTlRfT1JHQU5JWkFUSU9OID0gJ2NvbXBvbmVudF9vcmdhbml6YXRpb24nO1xuY29uc3QgRlVORElOR19BTU9VTlRfSUQgPSAnYW1wX2Z1bmRpbmdfYW1vdW50X2lkJztcbmNvbnN0IEVYVFJBX0lORk8gPSAnZXh0cmFfaW5mbyc7XG5jb25zdCBWQUxVRSA9ICd2YWx1ZSc7XG5jb25zdCBBQ1JPTllNID0gJ2Fjcm9ueW0nO1xuY29uc3QgVFlQRV9PRl9DT09QRVJBVElPTiA9ICd0eXBlX29mX2Nvb3BlcmF0aW9uJztcbmNvbnN0IEFOTlVBTF9QUk9KRUNUX0JVREdFVF9JRCA9ICdhbm51YWxfcHJvamVjdF9idWRnZXRfaWQnO1xuY29uc3QgVFlQRSA9ICd0eXBlJztcbmNvbnN0IFlFQVIgPSAneWVhcic7XG5jb25zdCBHUk9VUF9WRVJTSU9ORURfRlVORElORyA9ICdncm91cF92ZXJzaW9uZWRfZnVuZGluZyc7XG5jb25zdCBBQ1RJVkVfTElTVCA9ICdhY3RpdmVfbGlzdCc7XG5jb25zdCBBQ1RJVkUgPSAnYWN0aXZlJztcbmNvbnN0IERFTEVHQVRFRF9DT09QRVJBVElPTiA9ICdkZWxlZ2F0ZWRfY29vcGVyYXRpb24nO1xuY29uc3QgREVMRUdBVEVEX1BBUlRORVIgPSAnZGVsZWdhdGVkX3BhcnRuZXInO1xuY29uc3QgRklOQU5DSU5HX0lEID0gJ2ZpbmFuY2luZ19pZCc7XG5jb25zdCBESVNCVVJTRU1FTlRfT1JERVJfSUQgPSAnZGlzYnVyc2VtZW50X29yZGVyX2lkJztcbmNvbnN0IFBMRURHRSA9ICdwbGVkZ2UnO1xuY29uc3QgQ0FQSVRBTF9TUEVORElOR19QRVJDRU5UQUdFID0gJ2NhcGl0YWxfc3BlbmRpbmdfcGVyY2VudGFnZSc7XG5jb25zdCBSRVBPUlRJTkdfREFURSA9ICdyZXBvcnRpbmdfZGF0ZSc7XG5jb25zdCBSRUNJUElFTlRfUk9MRSA9ICdyZWNpcGllbnRfcm9sZSc7XG5jb25zdCBSRUNJUElFTlRfT1JHQU5JWkFUSU9OID0gJ3JlY2lwaWVudF9vcmdhbml6YXRpb24nO1xuY29uc3QgVEVNUE9SQUxfSUQgPSAnX3RlbXBvcmFsX2lkJztcbmNvbnN0IE1JTklTVFJZX0NPREUgPSAnbWluaXN0cnlfY29kZSc7XG5jb25zdCBQUk9KRUNUX0NPREUgPSAncHJvamVjdF9jb2RlJztcbmNvbnN0IEZZID0gJ2Z5JztcbmNvbnN0IElORElSRUNUX09OX0JVREdFVCA9ICdpbmRpcmVjdF9vbl9idWRnZXQnO1xuY29uc3QgSU1QTEVNRU5UQVRJT05fTEVWRUxTX0VYVFJBX0lORk8gPSAnaW1wbGVtZW50YXRpb24tbGV2ZWxzJztcbmNvbnN0IElNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX0VYVFJBX0lORk8gPSAnaW1wbGVtZW50YXRpb25fbG9jYXRpb25fbmFtZSc7XG5jb25zdCBET05PUl9DT05UQUNUID0gJ2Rvbm9yX2NvbnRhY3RfaW5mb3JtYXRpb24nO1xuY29uc3QgUFJPSkVDVF9DT09SRElOQVRPUl9DT05UQUNUID0gJ3Byb2plY3RfY29vcmRpbmF0b3JfY29udGFjdF9pbmZvcm1hdGlvbic7XG5jb25zdCBTRUNUT1JfTUlOSVNUUllfQ09OVEFDVCA9ICdzZWN0b3JfbWluaXN0cnlfY29udGFjdF9pbmZvcm1hdGlvbic7XG5jb25zdCBNT0ZFRF9DT05UQUNUID0gJ21vZmVkX2NvbnRhY3RfaW5mb3JtYXRpb24nO1xuY29uc3QgSU1QTEVNRU5USU5HX0VYRUNVVElOR19BR0VOQ1lfQ09OVEFDVCA9ICdpbXBsZW1lbnRpbmcvZXhlY3V0aW5nX2FnZW5jeV9jb250YWN0X2luZm9ybWF0aW9uJztcbmNvbnN0IENPTlRBQ1QgPSAnY29udGFjdCc7XG5jb25zdCBPUkdBTklaQVRJT05fR1JPVVAgPSAnb3JnYW5pemF0aW9uX2dyb3VwJztcbmNvbnN0IEZJWEVEX0VYQ0hBTkdFX1JBVEUgPSAnZml4ZWRfZXhjaGFuZ2VfcmF0ZSc7XG5jb25zdCBQUklNQVJZX0NPTlRBQ1QgPSAnbWFya19hc19wcmltYXJ5JztcbmNvbnN0IEFDVElWSVRZX0RPQ1VNRU5UUyA9ICdhY3Rpdml0eV9kb2N1bWVudHMnO1xuY29uc3QgRE9DVU1FTlRfVFlQRSA9ICdkb2N1bWVudF90eXBlJztcbmNvbnN0IElTTzIgPSAnaXNvMic7XG5jb25zdCBNVEVGX1BST0pFQ1RJT05TID0gJ210ZWZfcHJvamVjdGlvbnMnO1xuY29uc3QgUFJPSkVDVElPTiA9ICdwcm9qZWN0aW9uJztcbmNvbnN0IFBJUEVMSU5FID0gJ3BpcGVsaW5lJztcbmNvbnN0IFBST0pFQ1RJT05fREFURSA9ICdwcm9qZWN0aW9uX2RhdGUnO1xuXG4vLyBBY3Rpdml0eSBsYWJlbHMgKHVzdWFsbHkgdGhvc2UgdGhhdCBkb24ndCBjb21lIGFzIHBhcnQgb2YgRmllbGRzIERlZiBFUClcbmNvbnN0IFNBTUVfQVNfUFJPUE9TRURfU1RBUlRfREFURV9MQUJFTCA9ICdTYW1lIGFzIFByb3Bvc2VkIFN0YXJ0IERhdGUnO1xuY29uc3QgU0FNRV9BU19QUk9QT1NFRF9BUFBST1ZBTF9EQVRFX0xBQkVMID0gJ1NhbWUgYXMgUHJvcG9zZWQgQXBwcm92YWwgRGF0ZSc7XG5cbi8vIEFjdGl2aXR5IHZhbGlkYXRpb24gcnVsZXNcbmNvbnN0IERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfUFJFU0VOVCA9ICdpbXBsZW1lbnRhdGlvbl9sZXZlbF9wcmVzZW50JztcbmNvbnN0IERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfVkFMSUQgPSAnaW1wbGVtZW50YXRpb25fbGV2ZWxfdmFsaWQnO1xuY29uc3QgREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MT0NBVElPTl9QUkVTRU5UID0gJ2ltcGxlbWVudGF0aW9uX2xvY2F0aW9uX3ByZXNlbnQnO1xuY29uc3QgREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MT0NBVElPTl9WQUxJRCA9ICdpbXBsZW1lbnRhdGlvbl9sb2NhdGlvbl92YWxpZCc7XG5jb25zdCBERVBFTkRFTkNZX1BST0pFQ1RfQ09ERV9PTl9CVURHRVQgPSAncHJvamVjdF9jb2RlX29uX2J1ZGdldCc7XG5jb25zdCBERVBFTkRFTkNZX09OX0JVREdFVCA9ICdvbl9idWRnZXQnO1xuY29uc3QgREVQRU5ERU5DWV9UUkFOU0FDVElPTl9QUkVTRU5UID0gJ3RyYW5zYWN0aW9uX3ByZXNlbnQnO1xuY29uc3QgREVQRU5ERU5DWV9DT01QT05FTlRfRlVORElOR19PUkdfVkFMSUQgPSAnb3JnYW5pemF0aW9uX3ByZXNlbnQnO1xuXG4vKiogSURzIGZvciBBUCBzZWN0aW9ucyAqKi9cbmNvbnN0IEFQX1NFQ1RJT05fSURTID1cbiAgW3sga2V5OiAnQVBJZGVudGlmaWNhdGlvbicsIGhhc2g6ICcjQVBJZGVudGlmaWNhdGlvbicsIHZhbHVlOiAnSWRlbnRpZmljYXRpb24nLCBmbVBhdGg6IEZNQy5BQ1RJVklUWV9JREVOVElGSUNBVElPTiB9LFxuICAgIHsga2V5OiAnQVBJbnRlcm5hbElkcycsIGhhc2g6ICcjQVBJbnRlcm5hbElkcycsIHZhbHVlOiAnQWdlbmN5IEludGVybmFsIElEcycsIHNlY3Rpb25QYXRoOiBBQ1RJVklUWV9JTlRFUk5BTF9JRFMgfSxcbiAgICB7IGtleTogJ0FQUGxhbm5pbmcnLCBoYXNoOiAnI0FQUGxhbm5pbmcnLCB2YWx1ZTogJ1BsYW5uaW5nJywgZm1QYXRoOiBGTUMuQUNUSVZJVFlfUExBTk5JTkcgfSxcbiAgICB7IGtleTogJ0FQTG9jYXRpb24nLCBoYXNoOiAnI0FQTG9jYXRpb24nLCB2YWx1ZTogJ0xvY2F0aW9uJywgc2VjdGlvblBhdGg6IExPQ0FUSU9OUyB9LFxuICAgIHsga2V5OiAnQVBQcm9ncmFtJywgaGFzaDogJyNBUFByb2dyYW0nLCB2YWx1ZTogJ1Byb2dyYW0nLCBmbVBhdGg6IEZNQy5BQ1RJVklUWV9QUk9HUkFNIH0sXG4gICAgeyBrZXk6ICdBUFNlY3RvcicsIGhhc2g6ICcjQVBTZWN0b3InLCB2YWx1ZTogJ1NlY3RvcnMnLCBmbVBhdGg6IEZNQy5BQ1RJVklUWV9TRUNUT1JTIH0sXG4gICAge1xuICAgICAga2V5OiAnQVBGdW5kaW5nU291cmNlcycsXG4gICAgICBoYXNoOiAnI0FQRnVuZGluZ1NvdXJjZXMnLFxuICAgICAgdmFsdWU6ICdGdW5kaW5nIFNvdXJjZXMnLFxuICAgICAgc2VjdGlvblBhdGg6IFRPVEFMX05VTUJFUl9PRl9GVU5ESU5HX1NPVVJDRVNcbiAgICB9LFxuICAgIHsga2V5OiAnQVBGdW5kaW5nJywgaGFzaDogJyNBUEZ1bmRpbmcnLCB2YWx1ZTogJ0Z1bmRpbmcnLCBzZWN0aW9uUGF0aDogRlVORElOR1MgfSxcbiAgICB7XG4gICAgICBrZXk6ICdBUFJlbGF0ZWRPcmdhbml6YXRpb25zJyxcbiAgICAgIGhhc2g6ICcjQVBSZWxhdGVkT3JnYW5pemF0aW9ucycsXG4gICAgICB2YWx1ZTogJ1JlbGF0ZWQgT3JnYW5pemF0aW9ucycsXG4gICAgICBmbVBhdGg6IEZNQy5BQ1RJVklUWV9PUkdBTklaQVRJT05TXG4gICAgfSxcbiAgICB7IGtleTogJ0FQSXNzdWVzJywgaGFzaDogJyNBUElzc3VlcycsIHZhbHVlOiAnSXNzdWVzJywgc2VjdGlvblBhdGg6IElTU1VFUyB9LFxuICAgIHsga2V5OiAnQVBDb250YWN0JywgaGFzaDogJyNBUENvbnRhY3QnLCB2YWx1ZTogJ0NvbnRhY3QgSW5mb3JtYXRpb24nLCBmbVBhdGg6IEZNQy5BQ1RJVklUWV9DT05UQUNUIH0sXG4gICAgeyBrZXk6ICdBUFN0cnVjdHVyZXMnLCBoYXNoOiAnI0FQU3RydWN0dXJlcycsIHZhbHVlOiAnU3RydWN0dXJlcycsIHNlY3Rpb25QYXRoOiBTVFJVQ1RVUkVTIH0sXG4gICAgeyBrZXk6ICdBUERvY3VtZW50JywgaGFzaDogJyNBUERvY3VtZW50JywgdmFsdWU6ICdSZWxhdGVkIERvY3VtZW50cycsIHNlY3Rpb25QYXRoOiBBQ1RJVklUWV9ET0NVTUVOVFMgfSxcbiAgXTtcblxuLyoqIENvbHVtbiBjb3VudHMgZm9yIGVhY2ggc2VjdGlvbiAqKi9cbmNvbnN0IEFDVElWSVRZX0lOVEVSTkFMX0lEU19DT0xTID0gMztcbmNvbnN0IEFDVElWSVRZX1BMQU5OSU5HX0NPTFMgPSAyO1xuY29uc3QgQUNUSVZJVFlfTE9DQVRJT05fQ09MUyA9IDM7XG5jb25zdCBBQ1RJVklUWV9GVU5ESU5HX0NPTFMgPSAyO1xuY29uc3QgQUNUSVZJVFlfQ09OVEFDVF9DT0xTID0gMjtcbmNvbnN0IEFQX0ZVTkRJTkdTX1RBQkxFX0NPTFMgPSA0O1xuXG5jb25zdCBNVUxUSV9TRUxFQ1RfTUlOX1NJWkUgPSA4O1xuY29uc3QgTVVMVElfU0VMRUNUX01BWF9TSVpFID0gODtcblxuLy8gVE9ETzogbW92ZSB0aGVzZSBmdW5jdGlvbnMgdG8gYW4gVXRpbHMgY2xhc3MuXG5jb25zdCB0b0ZpZWxkTmFtZXMgPSBmdW5jdGlvbiAobGlzdE9mTmFtZXMpIHtcbiAgcmV0dXJuIGxpc3RPZk5hbWVzLm1hcChuYW1lID0+IHRvRmllbGROYW1lKG5hbWUpKTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgdGhlIG9yaWdpbmFsIG5vbi10cmFuc2xhdGVkIGxhYmVsIHRvIGludGVybmFsIGZpZWxkIG5hbWVcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmNvbnN0IHRvRmllbGROYW1lID0gZnVuY3Rpb24gKG5hbWU6IHN0cmluZykge1xuICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoJyAnLCAnXycpO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgaW50ZXJuYWwgZmllbGQgbmFtZSB0byB0aGUgT3JpZ2luYWwgbm9uLXRyYW5zbGF0ZWQgbGFiZWxcbiAqIEBwYXJhbSBmaWVsZE5hbWVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuY29uc3QgdG9PcmlnaW5hbExhYmVsID0gZnVuY3Rpb24gKGZpZWxkTmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBVSVV0aWxzLmNhcGl0YWxpemUoZmllbGROYW1lLnJlcGxhY2UoJ18nLCAnICcpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdC5mcmVlemUoe1xuICBBQ1RJVklUWV9CVURHRVQsXG4gIEFDVElWSVRZX1NUQVRVUyxcbiAgU1RBVFVTX1JFQVNPTixcbiAgRklOQU5DSUFMX0lOU1RSVU1FTlQsXG4gIFRZUEVfT0ZfSU1QTEVNRU5UQVRJT04sXG4gIE9CSkVDVElWRSxcbiAgUkVTVUxUUyxcbiAgQlVER0VUX0NPREVfUFJPSkVDVF9JRCxcbiAgQUNUVUFMX0FQUFJPVkFMX0RBVEUsXG4gIEZVTkRJTkdTLFxuICBGVU5ESU5HX0RPTk9SX09SR19JRCxcbiAgSVNfRFJBRlQsXG4gIE9SR19ST0xFX09SR19JRCxcbiAgQURESVRJT05BTF9JTkZPLFxuICBQUklNQVJZX1NFQ1RPUlMsXG4gIFNFQ09OREFSWV9TRUNUT1JTLFxuICBURVJUSUFSWV9TRUNUT1JTLFxuICBUQUdfU0VDVE9SUyxcbiAgU0VDVE9SLFxuICBTRUNUT1JfUEVSQ0VOVEFHRSxcbiAgRklOQU5DSU5HX0lOU1RSVU1FTlQsXG4gIE1PREFMSVRJRVMsXG4gIExJTkVfTUlOSVNUUllfUkFOSyxcbiAgR09WRVJOTUVOVF9BR1JFRU1FTlRfTlVNQkVSLFxuICBGVU5ESU5HX1NUQVRVUyxcbiAgTE9DQVRJT05TLFxuICBMT0NBVElPTixcbiAgTE9DQVRJT05fUEVSQ0VOVEFHRSxcbiAgSU1QTEVNRU5UQVRJT05fTE9DQVRJT04sXG4gIElNUExFTUVOVEFUSU9OX0xFVkVMLFxuICBBUFBST1ZBTF9TVEFUVVMsXG4gIEFQUFJPVkVEX0JZLFxuICBBUFBST1ZBTF9EQVRFLFxuICBUWVBFX09GX0FTU0lTVEFOQ0UsXG4gIEVYUEVORElUVVJFX0NMQVNTLFxuICBGVU5ESU5HX0RFVEFJTFMsXG4gIE1PREVfT0ZfUEFZTUVOVCxcbiAgRlVORElOR19DTEFTU0lGSUNBVElPTl9EQVRFLFxuICBBR1JFRU1FTlQsXG4gIERPTk9SX09CSkVDVElWRSxcbiAgQ09ORElUSU9OUyxcbiAgQUdSRUVNRU5UX0NPREUsXG4gIEFHUkVFTUVOVF9USVRMRSxcbiAgUFJPSkVDVF9DQVRFR09SWSxcbiAgUFJPSkVDVF9JTVBMRU1FTlRJTkdfVU5JVCxcbiAgT1JHQU5JWkFUSU9OLFxuICBQRVJDRU5UQUdFLFxuICBBTVBfT1JHQU5JWkFUSU9OX1JPTEVfSUQsXG4gIFJPTEUsXG4gIEVYRUNVVElOR19BR0VOQ1ksXG4gIENPTlRSQUNUSU5HX0FHRU5DWSxcbiAgQkVORUZJQ0lBUllfQUdFTkNZLFxuICBJTVBMRU1FTlRJTkdfQUdFTkNZLFxuICBSRVNQT05TSUJMRV9PUkdBTklaQVRJT04sXG4gIERPTk9SX09SR0FOSVpBVElPTixcbiAgUkVHSU9OQUxfR1JPVVAsXG4gIFNFQ1RPUl9HUk9VUCxcbiAgQlVER0VUUyxcbiAgQlVER0VUX0NPREUsXG4gIEJVREdFVF9PUkdBTklaQVRJT05fQ09ERSxcbiAgQVJDSElWRUQsXG4gIFRSQU5TQUNUSU9OX0RBVEUsXG4gIFRSQU5TQUNUSU9OX1RZUEUsXG4gIENPTU1JVE1FTlRTLFxuICBESVNCVVJTRU1FTlRTLFxuICBFWFBFTkRJVFVSRVMsXG4gIEVTVElNQVRFRF9ESVNCVVJTRU1FTlRTLFxuICBUUkFOU0FDVElPTl9BTU9VTlQsXG4gIEFESlVTVE1FTlRfVFlQRSxcbiAgQUNUVUFMX1NUQVJUX0RBVEUsXG4gIFBST1BPU0VEX1NUQVJUX0RBVEUsXG4gIEFDVFVBTF9DT01QTEVUSU9OX0RBVEUsXG4gIENPTlRSQUNUSU5HX0RBVEUsXG4gIERJU0JVUlNFTUVOVF9EQVRFLFxuICBQUk9QT1NFRF9BUFBST1ZBTF9EQVRFLFxuICBPUklHSU5BTF9DT01QTEVUSU9OX0RBVEUsXG4gIFBST1BPU0VEX0NPTVBMRVRJT05fREFURSxcbiAgRklOQUxfREFURV9GT1JfRElTQlVSU0VNRU5UUyxcbiAgRklOQUxfREFURV9GT1JfQ09OVFJBQ1RJTkcsXG4gIEVGRkVDVElWRV9GVU5ESU5HX0RBVEUsXG4gIEZVTkRJTkdfQ0xPU0lOR19EQVRFLFxuICBSQVRJRklDQVRJT05fREFURSxcbiAgTUFUVVJJVFksXG4gIExBU1RfQVVESVRfREFURSxcbiAgU0lHTkFUVVJFX0RBVEUsXG4gIEhVTUFOSVRBUklBTl9BSUQsXG4gIERJU0FTVEVSX1JFU1BPTlNFLFxuICBQUk9HUkFNLFxuICBQUk9HUkFNX1BFUkNFTlRBR0UsXG4gIFBST0dSQU1fU0VUVElOR1MsXG4gIE5BVElPTkFMX1BMQU5fT0JKRUNUSVZFLFxuICBQUklNQVJZX1BST0dSQU1TLFxuICBTRUNPTkRBUllfUFJPR1JBTVMsXG4gIFRFUlRJQVJfUFJPR1JBTVMsXG4gIEdPVkVSTk1FTlRfQVBQUk9WQUxfUFJPQ0VEVVJFUyxcbiAgSk9JTlRfQ1JJVEVSSUEsXG4gIFRFQU0sXG4gIFJFSkVDVEVEX0lELFxuICBJTlRFUk5BTF9JRCxcbiAgQU1QX0lELFxuICBQUk9KRUNUX1RJVExFLFxuICBERVNDUklQVElPTixcbiAgTU9ESUZJRURfQlksXG4gIE1PRElGSUVEX09OLFxuICBDUkVBVEVEX0JZLFxuICBDUkVBVEVEX09OLFxuICBMQVNUX0lNUE9SVEVEX0JZLFxuICBDTElFTlRfQ0hBTkdFX0lELFxuICBDTElFTlRfQ1JFQVRFRF9PTixcbiAgQ0xJRU5UX1VQREFURURfT04sXG4gIElTX1BVU0hFRCxcbiAgQUNUSVZJVFlfR1JPVVAsXG4gIFZFUlNJT04sXG4gIFBST0pFQ1RfQ09NTUVOVFMsXG4gIExFU1NPTlNfTEVBUk5FRCxcbiAgUFJPSkVDVF9JTVBBQ1QsXG4gIEFDVElWSVRZX1NVTU1BUlksXG4gIENPTkRJVElPTkFMSVRJRVMsXG4gIFBST0pFQ1RfTUFOQUdFTUVOVCxcbiAgQV9DX0NIQVBURVIsXG4gIENSSVNfTlVNQkVSLFxuICBJQVRJX0lERU5USUZJRVIsXG4gIEFDVElWSVRZX0lOVEVSTkFMX0lEUyxcbiAgSElFUkFSQ0hJQ0FMX1ZBTFVFLFxuICBISUVSQVJDSElDQUxfVkFMVUVfUEFSVFMsXG4gIEhJRVJBUkNISUNBTF9WQUxVRV9ERVBUSCxcbiAgUFBDX0FNT1VOVCxcbiAgUlBDX0FNT1VOVCxcbiAgUFBDX0FOTlVBTF9CVURHRVRTLFxuICBBTU9VTlQsXG4gIENVUlJFTkNZLFxuICBGVU5ESU5HX0RBVEUsXG4gIENPTVBPTkVOVFMsXG4gIFRPVEFMX05VTUJFUl9PRl9GVU5ESU5HX1NPVVJDRVMsXG4gIFNPVVJDRV9ST0xFLFxuICBBTVBfRlVORElOR19JRCxcbiAgSVNTVUVTLFxuICBJU1NVRV9EQVRFLFxuICBJU1NVRV9OQU1FLFxuICBNRUFTVVJFUyxcbiAgTUVBU1VSRV9OQU1FLFxuICBNRUFTVVJFX0RBVEUsXG4gIEFDVE9SUyxcbiAgQUNUT1JfTkFNRSxcbiAgU1RSVUNUVVJFUyxcbiAgU1RSVUNUVVJFU19USVRMRSxcbiAgU1RSVUNUVVJFU19ERVNDUklQVElPTixcbiAgU1RSVUNUVVJFU19MQVRJVFVERSxcbiAgU1RSVUNUVVJFU19MT05HSVRVREUsXG4gIFNUUlVDVFVSRVNfQ09MT1IsXG4gIFNUUlVDVFVSRVNfTEFULFxuICBTVFJVQ1RVUkVTX0xORyxcbiAgU1RSVUNUVVJFU19TSEFQRSxcbiAgU1RSVUNUVVJFU19QT0lOVCxcbiAgU1RSVUNUVVJFU19QT0xZR09OLFxuICBTVFJVQ1RVUkVTX1BPTFlMSU5FLFxuICBTVFJVQ1RVUkVTX0NPT1JESU5BVEVTLFxuICBDT01QT05FTlRfVFlQRSxcbiAgQ09NUE9ORU5UX1RJVExFLFxuICBDT01QT05FTlRfRlVORElORyxcbiAgQ09NUE9ORU5UX0RFU0NSSVBUSU9OLFxuICBDT01QT05FTlRfT1JHQU5JWkFUSU9OLFxuICBGVU5ESU5HX0FNT1VOVF9JRCxcbiAgRVhUUkFfSU5GTyxcbiAgVkFMVUUsXG4gIEFDUk9OWU0sXG4gIFRZUEVfT0ZfQ09PUEVSQVRJT04sXG4gIEFOTlVBTF9QUk9KRUNUX0JVREdFVF9JRCxcbiAgVFlQRSxcbiAgWUVBUixcbiAgR1JPVVBfVkVSU0lPTkVEX0ZVTkRJTkcsXG4gIEFDVElWRV9MSVNULFxuICBBQ1RJVkUsXG4gIERFTEVHQVRFRF9DT09QRVJBVElPTixcbiAgREVMRUdBVEVEX1BBUlRORVIsXG4gIEZJTkFOQ0lOR19JRCxcbiAgRElTQlVSU0VNRU5UX09SREVSX0lELFxuICBQTEVER0UsXG4gIENBUElUQUxfU1BFTkRJTkdfUEVSQ0VOVEFHRSxcbiAgUkVQT1JUSU5HX0RBVEUsXG4gIFJFQ0lQSUVOVF9ST0xFLFxuICBSRUNJUElFTlRfT1JHQU5JWkFUSU9OLFxuICBURU1QT1JBTF9JRCxcbiAgTUlOSVNUUllfQ09ERSxcbiAgUFJPSkVDVF9DT0RFLFxuICBGWSxcbiAgSU5ESVJFQ1RfT05fQlVER0VULFxuICBJTVBMRU1FTlRBVElPTl9MRVZFTFNfRVhUUkFfSU5GTyxcbiAgSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fRVhUUkFfSU5GTyxcbiAgRE9OT1JfQ09OVEFDVCxcbiAgUFJPSkVDVF9DT09SRElOQVRPUl9DT05UQUNULFxuICBTRUNUT1JfTUlOSVNUUllfQ09OVEFDVCxcbiAgTU9GRURfQ09OVEFDVCxcbiAgSU1QTEVNRU5USU5HX0VYRUNVVElOR19BR0VOQ1lfQ09OVEFDVCxcbiAgQ09OVEFDVCxcbiAgT1JHQU5JWkFUSU9OX0dST1VQLFxuICBGSVhFRF9FWENIQU5HRV9SQVRFLFxuICBQUklNQVJZX0NPTlRBQ1QsXG4gIEFDVElWSVRZX0RPQ1VNRU5UUyxcbiAgRE9DVU1FTlRfVFlQRSxcbiAgSVNPMixcbiAgTVRFRl9QUk9KRUNUSU9OUyxcbiAgUFJPSkVDVElPTixcbiAgUElQRUxJTkUsXG4gIFBST0pFQ1RJT05fREFURSxcbiAgU0FNRV9BU19QUk9QT1NFRF9TVEFSVF9EQVRFX0xBQkVMLFxuICBTQU1FX0FTX1BST1BPU0VEX0FQUFJPVkFMX0RBVEVfTEFCRUwsXG4gIERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfUFJFU0VOVCxcbiAgREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MRVZFTF9WQUxJRCxcbiAgREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MT0NBVElPTl9QUkVTRU5ULFxuICBERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX1ZBTElELFxuICBERVBFTkRFTkNZX1BST0pFQ1RfQ09ERV9PTl9CVURHRVQsXG4gIERFUEVOREVOQ1lfT05fQlVER0VULFxuICBERVBFTkRFTkNZX1RSQU5TQUNUSU9OX1BSRVNFTlQsXG4gIERFUEVOREVOQ1lfQ09NUE9ORU5UX0ZVTkRJTkdfT1JHX1ZBTElELFxuICBBUF9TRUNUSU9OX0lEUyxcbiAgQUNUSVZJVFlfSU5URVJOQUxfSURTX0NPTFMsXG4gIEFDVElWSVRZX1BMQU5OSU5HX0NPTFMsXG4gIEFDVElWSVRZX0xPQ0FUSU9OX0NPTFMsXG4gIEFDVElWSVRZX0ZVTkRJTkdfQ09MUyxcbiAgQUNUSVZJVFlfQ09OVEFDVF9DT0xTLFxuICBBUF9GVU5ESU5HU19UQUJMRV9DT0xTLFxuICBNVUxUSV9TRUxFQ1RfTUlOX1NJWkUsXG4gIE1VTFRJX1NFTEVDVF9NQVhfU0laRSxcbiAgdG9GaWVsZE5hbWVzLFxuICB0b0ZpZWxkTmFtZSxcbiAgdG9PcmlnaW5hbExhYmVsLFxufSk7XG4iLCJjb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9TRUNVUklUWSA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9TRUNVUklUWSc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9ORVRXT1JLID0gJ05PVElGSUNBVElPTl9PUklHSU5fQVBJX05FVFdPUksnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU1lOQ1VQID0gJ05PVElGSUNBVElPTl9PUklHSU5fQVBJX1NZTkNVUCc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9HRU5FUkFMID0gJ05PVElGSUNBVElPTl9PUklHSU5fQVBJX0dFTkVSQUwnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9EQVRBQkFTRSA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0RBVEFCQVNFJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fQVVUSEVOVElDQVRJT04gPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9BVVRIRU5USUNBVElPTic7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX1dPUktTUEFDRV9GSUxURVIgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0VfRklMVEVSJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fV09SS1NQQUNFID0gJ05PVElGSUNBVElPTl9PUklHSU5fV09SS1NQQUNFJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fU1lOQ1VQX1BST0NFU1MgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9TWU5DVVBfUFJPQ0VTUyc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0NVUlJFTkNZX01BTkFHRVIgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9DVVJSRU5DWV9NQU5BR0VSJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fREFURVMgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9EQVRFUyc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0FDVElWSVRZID0gJ05PVElGSUNBVElPTl9PUklHSU5fQUNUSVZJVFknO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9SRVNPVVJDRSA9ICdOT1RJRklDQVRJT05fT1JJR0lOX1JFU09VUkNFJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fSTE4TkVYVCA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0kxOE5FWFQnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEVfQ0hFQ0sgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEVfQ0hFQ0snO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEUgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEUnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9TRVRVUCA9ICdOT1RJRklDQVRJT05fT1JJR0lOX1NFVFVQJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fU0VUVElOR1MgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9TRVRUSU5HUyc7XG5cbmNvbnN0IE5PVElGSUNBVElPTl9TRVZFUklUWV9XQVJOSU5HID0gJ05PVElGSUNBVElPTl9TRVZFUklUWV9XQVJOSU5HJztcbmNvbnN0IE5PVElGSUNBVElPTl9TRVZFUklUWV9JTkZPID0gJ05PVElGSUNBVElPTl9TRVZFUklUWV9JTkZPJztcbmNvbnN0IE5PVElGSUNBVElPTl9TRVZFUklUWV9FUlJPUiA9ICdOT1RJRklDQVRJT05fU0VWRVJJVFlfRVJST1InO1xuXG5jb25zdCBOT1RJRklDQVRJT05fRVJST1JfTEVWRUxfTUlOT1IgPSAnTk9USUZJQ0FUSU9OX0VSUk9SX0xFVkVMX01JTk9SJztcbmNvbnN0IE5PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9CTE9DS0VSID0gJ05PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9CTE9DS0VSJztcblxuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9XUk9OR19NRVRIT0RfVVNBR0UgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9XUk9OR19NRVRIT0RfVVNBR0UnO1xuXG5jb25zdCBFUlJPUl9DT0RFX05PX0NPTk5FQ1RJVklUWSA9ICdOT19DT05ORUNUSVZJVFknO1xuY29uc3QgRVJST1JfQ09ERV9BQ0NFU1NfREVOSUVEID0gJ0FDQ0VTU19ERU5JRUQnO1xuXG5cbmNvbnN0IE1TR19JTlZBTElEX1VSTCA9ICdpbnZhbGlkVXJsJztcbmNvbnN0IE1TR19USU1FT1VUID0gJ3RpbWVvdXRFcnJvcic7XG5jb25zdCBNU0dfVU5LTk9XTl9ORVRXT1JLX0VSUk9SID0gJ3Vua25vd25OZXR3b3JrRXJyb3InO1xuY29uc3QgTVNHX0FNUF9VTlJFQUNIQUJMRSA9ICdBTVBVbnJlYWNoYWJsZUVycm9yJztcbmNvbnN0IEdFTkVSQUxfQ09OTkVDVElPTl9FUlJPUlMgPSBbTVNHX0lOVkFMSURfVVJMLCBNU0dfVElNRU9VVCwgTVNHX1VOS05PV05fTkVUV09SS19FUlJPUiwgTVNHX0FNUF9VTlJFQUNIQUJMRV07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIE5PVElGSUNBVElPTl9PUklHSU5fQVBJX1NFQ1VSSVRZLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9ORVRXT1JLLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9TWU5DVVAsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fQVBJX0dFTkVSQUwsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fREFUQUJBU0UsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fQVVUSEVOVElDQVRJT04sXG4gIE5PVElGSUNBVElPTl9PUklHSU5fV09SS1NQQUNFX0ZJTFRFUixcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0UsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fU1lOQ1VQX1BST0NFU1MsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fQ1VSUkVOQ1lfTUFOQUdFUixcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9EQVRFUyxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9BQ1RJVklUWSxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9SRVNPVVJDRSxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9JMThORVhULFxuICBOT1RJRklDQVRJT05fT1JJR0lOX1VQREFURV9DSEVDSyxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEUsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fU0VUVVAsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fU0VUVElOR1MsXG5cbiAgTk9USUZJQ0FUSU9OX1NFVkVSSVRZX1dBUk5JTkcsXG4gIE5PVElGSUNBVElPTl9TRVZFUklUWV9JTkZPLFxuICBOT1RJRklDQVRJT05fU0VWRVJJVFlfRVJST1IsXG5cbiAgTk9USUZJQ0FUSU9OX0VSUk9SX0xFVkVMX01JTk9SLFxuICBOT1RJRklDQVRJT05fRVJST1JfTEVWRUxfQkxPQ0tFUixcblxuICBOT1RJRklDQVRJT05fT1JJR0lOX1dST05HX01FVEhPRF9VU0FHRSxcblxuICBFUlJPUl9DT0RFX05PX0NPTk5FQ1RJVklUWSxcbiAgRVJST1JfQ09ERV9BQ0NFU1NfREVOSUVELFxuXG5cbiAgTVNHX0lOVkFMSURfVVJMLFxuICBNU0dfVElNRU9VVCxcbiAgTVNHX1VOS05PV05fTkVUV09SS19FUlJPUixcbiAgTVNHX0FNUF9VTlJFQUNIQUJMRSxcbiAgR0VORVJBTF9DT05ORUNUSU9OX0VSUk9SU1xufSlcbjtcbiIsIi8qKlxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5cbmltcG9ydCBBY3Rpdml0eUNvbnN0YW50cyBmcm9tICcuLi9tb2R1bGVzL3V0aWwvQWN0aXZpdHlDb25zdGFudHMnO1xuXG5jb25zdCBET05PUl9PUkdBTklaQVRJT04gPSAnRG9ub3IgT3JnYW5pemF0aW9uJztcbmNvbnN0IFJFU1BPTlNJQkxFX09SR0FOSVpBVElPTiA9ICdSZXNwb25zaWJsZSBPcmdhbml6YXRpb24nO1xuY29uc3QgRVhFQ1VUSU5HX0FHRU5DWSA9ICdFeGVjdXRpbmcgQWdlbmN5JztcbmNvbnN0IElNUExFTUVOVElOR19BR0VOQ1kgPSAnSW1wbGVtZW50aW5nIEFnZW5jeSc7XG5jb25zdCBCRU5FRklDSUFSWV9BR0VOQ1kgPSAnQmVuZWZpY2lhcnkgQWdlbmN5JztcbmNvbnN0IENPTlRSQUNUSU5HX0FHRU5DWSA9ICdDb250cmFjdGluZyBBZ2VuY3knO1xuY29uc3QgRE9OT1JfQUdFTkNZID0gJ0Rvbm9yJztcbmNvbnN0IFJFR0lPTkFMX0dST1VQID0gJ1JlZ2lvbmFsIEdyb3VwJztcbmNvbnN0IFNFQ1RPUl9HUk9VUCA9ICdTZWN0b3IgR3JvdXAnO1xuXG5jb25zdCBPUkdfUk9MRV9OQU1FUyA9IFtET05PUl9PUkdBTklaQVRJT04sIFJFU1BPTlNJQkxFX09SR0FOSVpBVElPTiwgRVhFQ1VUSU5HX0FHRU5DWSwgSU1QTEVNRU5USU5HX0FHRU5DWSxcbiAgQkVORUZJQ0lBUllfQUdFTkNZLCBDT05UUkFDVElOR19BR0VOQ1ksIFJFR0lPTkFMX0dST1VQLCBTRUNUT1JfR1JPVVBdO1xuXG5jb25zdCBBQ1RVQUwgPSAnQWN0dWFsJztcbmNvbnN0IFBMQU5ORUQgPSAnUGxhbm5lZCc7XG5jb25zdCBDT01NSVRNRU5UUyA9ICdDb21taXRtZW50cyc7XG5jb25zdCBESVNCVVJTRU1FTlRTID0gJ0Rpc2J1cnNlbWVudHMnO1xuY29uc3QgRVhQRU5ESVRVUkVTID0gJ0V4cGVuZGl0dXJlcyc7XG5jb25zdCBBQ1RVQUxfQ09NTUlUTUVOVFMgPSBgJHtBQ1RVQUx9ICR7QWN0aXZpdHlDb25zdGFudHMuQ09NTUlUTUVOVFN9YDtcbmNvbnN0IEFDVFVBTF9ESVNCVVJTRU1FTlRTID0gYCR7QUNUVUFMfSAke0FjdGl2aXR5Q29uc3RhbnRzLkRJU0JVUlNFTUVOVFN9YDtcbmNvbnN0IEFDVFVBTF9FWFBFTkRJVFVSRVMgPSBgJHtBQ1RVQUx9ICR7QWN0aXZpdHlDb25zdGFudHMuRVhQRU5ESVRVUkVTfWA7XG5jb25zdCBQTEFOTkVEX0NPTU1JVE1FTlRTID0gYCR7UExBTk5FRH0gJHtBY3Rpdml0eUNvbnN0YW50cy5DT01NSVRNRU5UU31gO1xuY29uc3QgUExBTk5FRF9ESVNCVVJTRU1FTlRTID0gYCR7UExBTk5FRH0gJHtBY3Rpdml0eUNvbnN0YW50cy5ESVNCVVJTRU1FTlRTfWA7XG5jb25zdCBQTEFOTkVEX0VYUEVORElUVVJFUyA9IGAke1BMQU5ORUR9ICR7QWN0aXZpdHlDb25zdGFudHMuRVhQRU5ESVRVUkVTfWA7XG5jb25zdCBVTkFMTE9DQVRFRF9ESVNCVVJTRU1FTlRTID0gJ1VuYWxsb2NhdGVkIERpc2J1cnNlbWVudHMnO1xuY29uc3QgREVMSVZFUllfUkFURSA9ICdEZWxpdmVyeSByYXRlJztcbmNvbnN0IE1URUZfUFJPSkVDVElPTlMgPSAnTVRFRiBQcm9qZWN0aW9ucyc7XG5cbmNvbnN0IEFESlVTVE1FTlRfVFlQRVMgPSBbQUNUVUFMLCBQTEFOTkVEXTtcbmNvbnN0IEFESlVTVE1FTlRfVFlQRVNfQVBfT1JERVIgPSBbUExBTk5FRCwgQUNUVUFMXTtcblxuY29uc3QgTkVXX0FDVElWSVRZX0lEID0gJzAnO1xuXG5jb25zdCBQUk9QT1NFRF9QUk9KRUNUX0NPU1QgPSAncHBjJztcbmNvbnN0IFJFVklTRURfUFJPSkVDVF9DT1NUID0gJ3JwYyc7XG5cbmNvbnN0IEFDUk9OWU1fRE9OT1JfT1JHQU5JWkFUSU9OID0gJ0ROJztcbmNvbnN0IEFDUk9OWU1fRVhFQ1VUSU5HX0FHRU5DWSA9ICdFQSc7XG5jb25zdCBBQ1JPTllNX0lNUExFTUVOVElOR19BR0VOQ1kgPSAnSUEnO1xuY29uc3QgQUNST05ZTV9CRU5FRklDSUFSWV9BR0VOQ1kgPSAnQkEnO1xuY29uc3QgQUNST05ZTV9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04gPSAnUk8nO1xuXG4vKiogQXBwcm92YWwgc3RhdHVzIHVudHJhbnNsYXRlZCB2YWx1ZXMgKiovXG5jb25zdCBBUFBST1ZBTF9TVEFUVVNfQ1JFQVRFRCA9ICdjcmVhdGVkJztcbmNvbnN0IEFQUFJPVkFMX1NUQVRVU19BUFBST1ZFRCA9ICdhcHByb3ZlZCc7XG5jb25zdCBBUFBST1ZBTF9TVEFUVVNfRURJVEVEID0gJ2VkaXRlZCc7XG5jb25zdCBBUFBST1ZBTF9TVEFUVVNfU1RBUlRFRF9BUFBST1ZFRCA9ICdzdGFydGVkYXBwcm92ZWQnO1xuY29uc3QgQVBQUk9WQUxfU1RBVFVTX1NUQVJURUQgPSAnc3RhcnRlZCc7XG5jb25zdCBBUFBST1ZBTF9TVEFUVVNfTk9UX0FQUFJPVkVEID0gJ25vdF9hcHByb3ZlZCc7XG5jb25zdCBBUFBST1ZBTF9TVEFUVVNfUkVKRUNURUQgPSAncmVqZWN0ZWQnO1xuXG5jb25zdCBPTl9CVURHRVQgPSAnT24gQnVkZ2V0JztcblxuY29uc3QgSU5URVJOQVRJT05BTCA9ICdJbnRlcm5hdGlvbmFsJztcbmNvbnN0IENPVU5UUlkgPSAnQ291bnRyeSc7XG5cbmNvbnN0IFJFTEFURURfRE9DVU1FTlRTID0gJ1JlbGF0ZWQgRG9jdW1lbnRzJztcblxuY29uc3QgVE1QX0VOVElUWV9WQUxJREFUT1IgPSAnZW50aXR5LXZhbGlkYXRvcic7XG5cbi8qKiBSZXF1aXJlZCBzdGF0dXMgKi9cbmNvbnN0IEFMV0FZU19SRVFVSVJFRCA9ICdZJztcblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0LmZyZWV6ZSh7XG4gIERPTk9SX09SR0FOSVpBVElPTixcbiAgUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OLFxuICBFWEVDVVRJTkdfQUdFTkNZLFxuICBJTVBMRU1FTlRJTkdfQUdFTkNZLFxuICBCRU5FRklDSUFSWV9BR0VOQ1ksXG4gIENPTlRSQUNUSU5HX0FHRU5DWSxcbiAgRE9OT1JfQUdFTkNZLFxuICBSRUdJT05BTF9HUk9VUCxcbiAgU0VDVE9SX0dST1VQLFxuICBPUkdfUk9MRV9OQU1FUyxcbiAgQUNUVUFMLFxuICBQTEFOTkVELFxuICBDT01NSVRNRU5UUyxcbiAgRElTQlVSU0VNRU5UUyxcbiAgRVhQRU5ESVRVUkVTLFxuICBBQ1RVQUxfQ09NTUlUTUVOVFMsXG4gIEFDVFVBTF9ESVNCVVJTRU1FTlRTLFxuICBBQ1RVQUxfRVhQRU5ESVRVUkVTLFxuICBQTEFOTkVEX0NPTU1JVE1FTlRTLFxuICBQTEFOTkVEX0RJU0JVUlNFTUVOVFMsXG4gIFBMQU5ORURfRVhQRU5ESVRVUkVTLFxuICBVTkFMTE9DQVRFRF9ESVNCVVJTRU1FTlRTLFxuICBERUxJVkVSWV9SQVRFLFxuICBNVEVGX1BST0pFQ1RJT05TLFxuICBBREpVU1RNRU5UX1RZUEVTLFxuICBBREpVU1RNRU5UX1RZUEVTX0FQX09SREVSLFxuICBORVdfQUNUSVZJVFlfSUQsXG4gIFBST1BPU0VEX1BST0pFQ1RfQ09TVCxcbiAgUkVWSVNFRF9QUk9KRUNUX0NPU1QsXG4gIEFDUk9OWU1fRE9OT1JfT1JHQU5JWkFUSU9OLFxuICBBQ1JPTllNX0VYRUNVVElOR19BR0VOQ1ksXG4gIEFDUk9OWU1fSU1QTEVNRU5USU5HX0FHRU5DWSxcbiAgQUNST05ZTV9CRU5FRklDSUFSWV9BR0VOQ1ksXG4gIEFDUk9OWU1fUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OLFxuICBBUFBST1ZBTF9TVEFUVVNfQ1JFQVRFRCxcbiAgQVBQUk9WQUxfU1RBVFVTX0FQUFJPVkVELFxuICBBUFBST1ZBTF9TVEFUVVNfRURJVEVELFxuICBBUFBST1ZBTF9TVEFUVVNfU1RBUlRFRF9BUFBST1ZFRCxcbiAgQVBQUk9WQUxfU1RBVFVTX1NUQVJURUQsXG4gIEFQUFJPVkFMX1NUQVRVU19OT1RfQVBQUk9WRUQsXG4gIEFQUFJPVkFMX1NUQVRVU19SRUpFQ1RFRCxcbiAgT05fQlVER0VULFxuICBJTlRFUk5BVElPTkFMLFxuICBDT1VOVFJZLFxuICBSRUxBVEVEX0RPQ1VNRU5UUyxcbiAgVE1QX0VOVElUWV9WQUxJREFUT1IsXG4gIEFMV0FZU19SRVFVSVJFRFxufSk7XG4iLCJpbXBvcnQgQWN0aXZpdHlDb25zdGFudHMgZnJvbSAnLi4vbW9kdWxlcy91dGlsL0FjdGl2aXR5Q29uc3RhbnRzJztcbmltcG9ydCBGZWF0dXJlTWFuYWdlckNvbnN0YW50cyBmcm9tICcuLi9tb2R1bGVzL3V0aWwvRmVhdHVyZU1hbmFnZXJDb25zdGFudHMnO1xuaW1wb3J0IFZhbHVlQ29uc3RhbnRzIGZyb20gJy4vVmFsdWVDb25zdGFudHMnO1xuXG4vKipcbiAqIFRoaXMgaXMgYSBzZXQgb2YgZmllbGQgcGF0aHMgdGhhdCBhcmUgdXNlZCBmb3IgZnJlcXVlbnQgbmVlZHNcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuXG5leHBvcnQgY29uc3QgRlVORElOR19BQ1RJVkVfTElTVCA9ICdmdW5kaW5nc35hY3RpdmVfbGlzdCc7XG5leHBvcnQgY29uc3QgRlVORElOR19UWVBFX09GX0FTU0lTVEFOQ0UgPSBgJHtBY3Rpdml0eUNvbnN0YW50cy5GVU5ESU5HU31+JHtBY3Rpdml0eUNvbnN0YW50cy5UWVBFX09GX0FTU0lTVEFOQ0V9YDtcbmV4cG9ydCBjb25zdCBGVU5ESU5HX0RFVEFJTFNfUEFUSCA9IGAke0FjdGl2aXR5Q29uc3RhbnRzLkZVTkRJTkdTfX4ke0FjdGl2aXR5Q29uc3RhbnRzLkZVTkRJTkdfREVUQUlMU31gO1xuLyoqXG4gKiBMZWdhY3kgZnVuZGluZyBjdXJyZW5jeSBwYXRoIHVzZWQgZm9yIGRhdGEgbWlncmF0aW9uXG4gKiBAZGVwcmVjYXRlZCBzaW5jZSAxLjRcbiAqL1xuZXhwb3J0IGNvbnN0IEZVTkRJTkdfQ1VSUkVOQ1lfUEFUSCA9IGAke0ZVTkRJTkdfREVUQUlMU19QQVRIfX4ke0FjdGl2aXR5Q29uc3RhbnRzLkNVUlJFTkNZfWA7XG5leHBvcnQgY29uc3QgTVRFRl9DVVJSRU5DWV9QQVRIID1cbiAgYCR7QWN0aXZpdHlDb25zdGFudHMuRlVORElOR1N9fiR7QWN0aXZpdHlDb25zdGFudHMuTVRFRl9QUk9KRUNUSU9OU31+JHtBY3Rpdml0eUNvbnN0YW50cy5DVVJSRU5DWX1gO1xuZXhwb3J0IGNvbnN0IFBQQ19DVVJSRU5DWV9QQVRIID0gYCR7QWN0aXZpdHlDb25zdGFudHMuUFBDX0FNT1VOVH1+JHtBY3Rpdml0eUNvbnN0YW50cy5DVVJSRU5DWX1gO1xuZXhwb3J0IGNvbnN0IFJQQ19DVVJSRU5DWV9QQVRIID0gYCR7QWN0aXZpdHlDb25zdGFudHMuUlBDX0FNT1VOVH1+JHtBY3Rpdml0eUNvbnN0YW50cy5DVVJSRU5DWX1gO1xuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9DVVJSRU5DWV9QQVRIID1cbiAgYCR7QWN0aXZpdHlDb25zdGFudHMuQ09NUE9ORU5UU31+JHtBY3Rpdml0eUNvbnN0YW50cy5DT01QT05FTlRfRlVORElOR31+JHtBY3Rpdml0eUNvbnN0YW50cy5DVVJSRU5DWX1gO1xuZXhwb3J0IGNvbnN0IERJU0JVUlNFTUVOVFNfUEFUSCA9IGAke0FjdGl2aXR5Q29uc3RhbnRzLkZVTkRJTkdTfX4ke0FjdGl2aXR5Q29uc3RhbnRzLkRJU0JVUlNFTUVOVFN9YDtcbmV4cG9ydCBjb25zdCBBQ1RJVklUWV9JTlRFUk5BTF9JRFNfSU5URVJOQUxfSURfUEFUSCA9ICdhY3Rpdml0eV9pbnRlcm5hbF9pZHN+aW50ZXJuYWxfaWQnO1xuZXhwb3J0IGNvbnN0IEFDVElWSVRZX0lOVEVSTkFMX0lEU19PUkdBTklaQVRJT05fUEFUSCA9ICdhY3Rpdml0eV9pbnRlcm5hbF9pZHN+b3JnYW5pemF0aW9uJztcbmV4cG9ydCBjb25zdCBMT0NBVElPTl9QQVRIID0gJ2xvY2F0aW9uc35sb2NhdGlvbic7XG5leHBvcnQgY29uc3QgTkFUSU9OQUxfUExBTl9PQkpFQ1RJVkVfUEFUSCA9ICduYXRpb25hbF9wbGFuX29iamVjdGl2ZX5wcm9ncmFtJztcbmV4cG9ydCBjb25zdCBQUklNQVJZX1BST0dSQU1fUEFUSCA9ICdwcmltYXJ5X3Byb2dyYW1zfnByb2dyYW0nO1xuZXhwb3J0IGNvbnN0IFNFQ09OREFSWV9QUk9HUkFNX1BBVEggPSAnc2Vjb25kYXJ5X3Byb2dyYW1zfnByb2dyYW0nO1xuZXhwb3J0IGNvbnN0IFBSSU1BUllfU0VDVE9SX1BBVEggPSAncHJpbWFyeV9zZWN0b3JzfnNlY3Rvcic7XG5leHBvcnQgY29uc3QgU0VDT05EQVJZX1NFQ1RPUl9QQVRIID0gJ3NlY29uZGFyeV9zZWN0b3JzfnNlY3Rvcic7XG5leHBvcnQgY29uc3QgVEVSVElBUllfU0VDVE9SX1BBVEggPSAndGVydGlhcnlfc2VjdG9yc35zZWN0b3InO1xuZXhwb3J0IGNvbnN0IERPTk9SX09SR0FOSVpBVElPTlNfUEFUSCA9ICdkb25vcl9vcmdhbml6YXRpb25+b3JnYW5pemF0aW9uJztcbmV4cG9ydCBjb25zdCBSRVNQT05TSUJMRV9PUkdBTklaQVRJT05fQlVER0VUU19QQVRIID1cbiAgYCR7QWN0aXZpdHlDb25zdGFudHMuUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OfX4ke0FjdGl2aXR5Q29uc3RhbnRzLkJVREdFVFN9YDtcblxuZXhwb3J0IGNvbnN0IFJFTEFURURfT1JHU19QQVRIUyA9IFZhbHVlQ29uc3RhbnRzLk9SR19ST0xFX05BTUVTLm1hcChvcmdSb2xlID0+IEFjdGl2aXR5Q29uc3RhbnRzLnRvRmllbGROYW1lKG9yZ1JvbGUpKTtcbmV4cG9ydCBjb25zdCBSRUxBVEVEX09SR1NfT1JHQU5JWkFUSU9OX1BBVEhTID0gVmFsdWVDb25zdGFudHMuT1JHX1JPTEVfTkFNRVMubWFwKFxuICBvcmdSb2xlID0+IGAke0FjdGl2aXR5Q29uc3RhbnRzLnRvRmllbGROYW1lKG9yZ1JvbGUpfX4ke0FjdGl2aXR5Q29uc3RhbnRzLk9SR0FOSVpBVElPTn1gKTtcblxuZXhwb3J0IGNvbnN0IFJJQ0hfVEVYVF9GSUVMRFMgPSBuZXcgU2V0KFtBY3Rpdml0eUNvbnN0YW50cy5TVEFUVVNfUkVBU09OLCBBY3Rpdml0eUNvbnN0YW50cy5PQkpFQ1RJVkUsXG4gIEFjdGl2aXR5Q29uc3RhbnRzLkRFU0NSSVBUSU9OLCBBY3Rpdml0eUNvbnN0YW50cy5QUk9KRUNUX0NPTU1FTlRTLCBBY3Rpdml0eUNvbnN0YW50cy5MRVNTT05TX0xFQVJORUQsXG4gIEFjdGl2aXR5Q29uc3RhbnRzLlBST0pFQ1RfSU1QQUNULCBBY3Rpdml0eUNvbnN0YW50cy5BQ1RJVklUWV9TVU1NQVJZLCBBY3Rpdml0eUNvbnN0YW50cy5DT05ESVRJT05BTElUSUVTLFxuICBBY3Rpdml0eUNvbnN0YW50cy5QUk9KRUNUX01BTkFHRU1FTlQsIEFjdGl2aXR5Q29uc3RhbnRzLlJFU1VMVFMsXG5dKTtcblxuZXhwb3J0IGNvbnN0IFBBVEhTX1dJVEhfVFJFRV9TVFJVQ1RVUkUgPSBuZXcgU2V0KFtOQVRJT05BTF9QTEFOX09CSkVDVElWRV9QQVRILCBQUklNQVJZX1BST0dSQU1fUEFUSCxcbiAgU0VDT05EQVJZX1BST0dSQU1fUEFUSCwgUFJJTUFSWV9TRUNUT1JfUEFUSCwgU0VDT05EQVJZX1NFQ1RPUl9QQVRILCBURVJUSUFSWV9TRUNUT1JfUEFUSF0pO1xuXG5leHBvcnQgY29uc3QgUEFUSFNfV0lUSF9ISUVSQVJDSElDQUxfVkFMVUVTID0gbmV3IFNldChbTkFUSU9OQUxfUExBTl9PQkpFQ1RJVkVfUEFUSCwgUFJJTUFSWV9QUk9HUkFNX1BBVEgsXG4gIFNFQ09OREFSWV9QUk9HUkFNX1BBVEgsIFBSSU1BUllfU0VDVE9SX1BBVEgsIFNFQ09OREFSWV9TRUNUT1JfUEFUSCwgVEVSVElBUllfU0VDVE9SX1BBVEgsIExPQ0FUSU9OX1BBVEhdKTtcblxuZXhwb3J0IGNvbnN0IEFDVElWSVRZX0NPTlRBQ1RfUEFUSFMgPSBbQWN0aXZpdHlDb25zdGFudHMuRE9OT1JfQ09OVEFDVCwgQWN0aXZpdHlDb25zdGFudHMuUFJPSkVDVF9DT09SRElOQVRPUl9DT05UQUNULFxuICBBY3Rpdml0eUNvbnN0YW50cy5TRUNUT1JfTUlOSVNUUllfQ09OVEFDVCwgQWN0aXZpdHlDb25zdGFudHMuTU9GRURfQ09OVEFDVCxcbiAgQWN0aXZpdHlDb25zdGFudHMuSU1QTEVNRU5USU5HX0VYRUNVVElOR19BR0VOQ1lfQ09OVEFDVF07XG5cbmV4cG9ydCBjb25zdCBUUkFOU0FDVElPTl9UWVBFUyA9IFtBY3Rpdml0eUNvbnN0YW50cy5DT01NSVRNRU5UUywgQWN0aXZpdHlDb25zdGFudHMuRElTQlVSU0VNRU5UUyxcbiAgQWN0aXZpdHlDb25zdGFudHMuRVhQRU5ESVRVUkVTXTtcbmV4cG9ydCBjb25zdCBUUkFOU0FDVElPTl9UWVBFU19PUkRFUkVEID0gVFJBTlNBQ1RJT05fVFlQRVM7XG5leHBvcnQgY29uc3QgRlVORElOR19UUkFOU0FDVElPTl9UWVBFUyA9IFsuLi5UUkFOU0FDVElPTl9UWVBFUywgQWN0aXZpdHlDb25zdGFudHMuRVNUSU1BVEVEX0RJU0JVUlNFTUVOVFNdO1xuZXhwb3J0IGNvbnN0IEFESlVTVE1FTlRfVFlQRV9QQVRIUyA9IEZVTkRJTkdfVFJBTlNBQ1RJT05fVFlQRVMubWFwKFxuICB0dCA9PiBgJHtBY3Rpdml0eUNvbnN0YW50cy5GVU5ESU5HU31+JHt0dH1+JHtBY3Rpdml0eUNvbnN0YW50cy5BREpVU1RNRU5UX1RZUEV9YCk7XG5leHBvcnQgY29uc3QgRlVORElOR19DVVJSRU5DWV9QQVRIUyA9IFRSQU5TQUNUSU9OX1RZUEVTLm1hcChcbiAgdHQgPT4gYCR7QWN0aXZpdHlDb25zdGFudHMuRlVORElOR1N9fiR7dHR9fiR7QWN0aXZpdHlDb25zdGFudHMuQ1VSUkVOQ1l9YCk7XG5cbmV4cG9ydCBjb25zdCBQQVRIU19GT1JfQUNUSVZJVFlfQ1VSUkVOQ1kgPSBbRlVORElOR19DVVJSRU5DWV9QQVRILCBNVEVGX0NVUlJFTkNZX1BBVEgsIENPTVBPTkVOVF9DVVJSRU5DWV9QQVRILFxuICBQUENfQ1VSUkVOQ1lfUEFUSCwgUlBDX0NVUlJFTkNZX1BBVEgsIC4uLkZVTkRJTkdfQ1VSUkVOQ1lfUEFUSFNdO1xuXG5leHBvcnQgY29uc3QgUEFUSFNfRk9SX0NVUlJFTkNZID0gbmV3IFNldChbQWN0aXZpdHlDb25zdGFudHMuQ1VSUkVOQ1ksIC4uLlBBVEhTX0ZPUl9BQ1RJVklUWV9DVVJSRU5DWV0pO1xuXG5leHBvcnQgY29uc3QgRE9fTk9UX0hZRFJBVEVfRklFTERTX0xJU1QgPSBbQWN0aXZpdHlDb25zdGFudHMuQVBQUk9WQUxfU1RBVFVTXTtcblxuLyogRmllbGRzIHBhdGhzIGFsdGVybmF0aXZlIHZhbHVlcyBsb2NhdGlvbiAqL1xuZXhwb3J0IGNvbnN0IEFMVEVSTkFURV9WQUxVRV9QQVRIID0ge307XG5BTFRFUk5BVEVfVkFMVUVfUEFUSFtBY3Rpdml0eUNvbnN0YW50cy5DUkVBVEVEX09OXSA9IEFjdGl2aXR5Q29uc3RhbnRzLkNMSUVOVF9DUkVBVEVEX09OO1xuQUxURVJOQVRFX1ZBTFVFX1BBVEhbQWN0aXZpdHlDb25zdGFudHMuTU9ESUZJRURfT05dID0gQWN0aXZpdHlDb25zdGFudHMuQ0xJRU5UX1VQREFURURfT047XG5cbi8qIEZNIHBhdGhzIGZvciBzb21lIGFjdGl2aXR5IGZpZWxkcyB0aGF0IGFyZSBhbHdheXMgcHJlc2VudCBpbiBmaWVsZHMgZGVmLCBidXQgbWF5IGJlIGhpZGRlbiBmcm9tIGRpc3BsYXkgdGhyb3VnaCBGTSAqL1xuZXhwb3J0IGNvbnN0IEFDVElWSVRZX0ZJRUxEU19GTV9QQVRIID0ge307XG5BQ1RJVklUWV9GSUVMRFNfRk1fUEFUSFtBY3Rpdml0eUNvbnN0YW50cy5NT0RJRklFRF9CWV0gPSBGZWF0dXJlTWFuYWdlckNvbnN0YW50cy5BQ1RJVklUWV9MQVNUX1VQREFURURfQlk7XG5BQ1RJVklUWV9GSUVMRFNfRk1fUEFUSFtBY3Rpdml0eUNvbnN0YW50cy5NT0RJRklFRF9PTl0gPSBGZWF0dXJlTWFuYWdlckNvbnN0YW50cy5BQ1RJVklUWV9MQVNUX1VQREFURURfT047XG5cbi8qIFBvc3NpYmxlIE9wdGlvbnMgZmllbGRzIHBhdGggcHJlZml4ZXMgKi9cbmV4cG9ydCBjb25zdCBQUkVGSVhfQUNUSVZJVFkgPSBudWxsO1xuZXhwb3J0IGNvbnN0IFBSRUZJWF9DT05UQUNUID0gJ2NvbnRhY3QnO1xuZXhwb3J0IGNvbnN0IFBSRUZJWF9SRVNPVVJDRSA9ICdyZXNvdXJjZSc7XG5leHBvcnQgY29uc3QgUFJFRklYX0NPTU1PTiA9ICdjb21tb24nO1xuZXhwb3J0IGNvbnN0IFBSRUZJWF9MSVNUID0gW1BSRUZJWF9BQ1RJVklUWSwgUFJFRklYX0NPTlRBQ1QsIFBSRUZJWF9SRVNPVVJDRSwgUFJFRklYX0NPTU1PTl07XG5cbmV4cG9ydCBjb25zdCBGSUVMRF9QQVRIID0gJ2ZpZWxkLXBhdGgnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX09QVElPTlMgPSAncG9zc2libGUtb3B0aW9ucyc7XG5leHBvcnQgY29uc3QgRklFTERfT1BUSU9OX1VTQUJMRSA9ICdvcHRpb24tdXNhYmxlJztcbmV4cG9ydCBjb25zdCBMSVNUX01BWF9TSVpFID0gJ3NpemUtbGltaXQnO1xuZXhwb3J0IGNvbnN0IFJFR0VYX1BBVFRFUk4gPSAncmVnZXgtcGF0dGVybic7XG5leHBvcnQgY29uc3QgRklFTERfTkFNRSA9ICdmaWVsZF9uYW1lJztcbmV4cG9ydCBjb25zdCBGSUVMRF9MQUJFTCA9ICdmaWVsZF9sYWJlbCc7XG5leHBvcnQgY29uc3QgRklFTERfUkVRVUlSRUQgPSAncmVxdWlyZWQnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1VOSVFVRV9DT05TVFJBSU5UID0gJ3VuaXF1ZV9jb25zdHJhaW50JztcbmV4cG9ydCBjb25zdCBGSUVMRF9UWVBFID0gJ2ZpZWxkX3R5cGUnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX0xFTkdUSCA9ICdmaWVsZF9sZW5ndGgnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1BFUkNFTlRBR0UgPSAncGVyY2VudGFnZSc7XG5leHBvcnQgY29uc3QgRklFTERfUEVSQ0VOVEFHRV9DT05TVFJBSU5UID0gJ3BlcmNlbnRhZ2VfY29uc3RyYWludCc7XG5leHBvcnQgY29uc3QgRklFTERfSVRFTV9UWVBFID0gJ2l0ZW0tdHlwZSc7XG5leHBvcnQgY29uc3QgRklFTERfSU1QT1JUQUJMRSA9ICdpbXBvcnRhYmxlJztcbmV4cG9ydCBjb25zdCBGSUVMRF9JRF9PTkxZID0gJ2lkX29ubHknO1xuZXhwb3J0IGNvbnN0IEZJRUxEX01VTFRJUExFX1ZBTFVFU19BTExPV0VEID0gJ211bHRpcGxlX3ZhbHVlcyc7XG5leHBvcnQgY29uc3QgRklFTERfVFJFRV9DT0xMRUNUSU9OID0gJ3RyZWVfY29sbGVjdGlvbic7XG5leHBvcnQgY29uc3QgRklFTERfQ0hJTERSRU4gPSAnY2hpbGRyZW4nO1xuZXhwb3J0IGNvbnN0IEZJRUxEX0RFUEVOREVOQ0lFUyA9ICdkZXBlbmRlbmNpZXMnO1xuXG5leHBvcnQgY29uc3QgRklFTERfVFlQRV9MSVNUID0gJ2xpc3QnO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1RZUEVfT0JKRUNUID0gJ29iamVjdCc7XG5leHBvcnQgY29uc3QgRklFTERfVFlQRV9TVFJJTkcgPSAnc3RyaW5nJztcbmV4cG9ydCBjb25zdCBGSUVMRF9UWVBFX0xPTkcgPSAnbG9uZyc7XG5leHBvcnQgY29uc3QgRklFTERfVFlQRV9GTE9BVCA9ICdmbG9hdCc7XG5leHBvcnQgY29uc3QgRklFTERfVFlQRV9CT09MRUFOID0gJ2Jvb2xlYW4nO1xuZXhwb3J0IGNvbnN0IEZJRUxEX1RZUEVfREFURSA9ICdkYXRlJztcbmV4cG9ydCBjb25zdCBGSUVMRF9UWVBFX1RJTUVTVEFNUCA9ICd0aW1lc3RhbXAnO1xuXG5leHBvcnQgZGVmYXVsdCBPYmplY3QuZnJlZXplKHtcbiAgRlVORElOR19BQ1RJVkVfTElTVCxcbiAgRlVORElOR19ERVRBSUxTX1BBVEgsXG4gIEZVTkRJTkdfQ1VSUkVOQ1lfUEFUSCxcbiAgTVRFRl9DVVJSRU5DWV9QQVRILFxuICBQUENfQ1VSUkVOQ1lfUEFUSCxcbiAgUlBDX0NVUlJFTkNZX1BBVEgsXG4gIENPTVBPTkVOVF9DVVJSRU5DWV9QQVRILFxuICBESVNCVVJTRU1FTlRTX1BBVEgsXG4gIEFDVElWSVRZX0lOVEVSTkFMX0lEU19JTlRFUk5BTF9JRF9QQVRILFxuICBBQ1RJVklUWV9JTlRFUk5BTF9JRFNfT1JHQU5JWkFUSU9OX1BBVEgsXG4gIExPQ0FUSU9OX1BBVEgsXG4gIE5BVElPTkFMX1BMQU5fT0JKRUNUSVZFX1BBVEgsXG4gIFBSSU1BUllfUFJPR1JBTV9QQVRILFxuICBTRUNPTkRBUllfUFJPR1JBTV9QQVRILFxuICBQUklNQVJZX1NFQ1RPUl9QQVRILFxuICBTRUNPTkRBUllfU0VDVE9SX1BBVEgsXG4gIFRFUlRJQVJZX1NFQ1RPUl9QQVRILFxuICBET05PUl9PUkdBTklaQVRJT05TX1BBVEgsXG4gIFJFU1BPTlNJQkxFX09SR0FOSVpBVElPTl9CVURHRVRTX1BBVEgsXG4gIFJFTEFURURfT1JHU19QQVRIUyxcbiAgUkVMQVRFRF9PUkdTX09SR0FOSVpBVElPTl9QQVRIUyxcbiAgUklDSF9URVhUX0ZJRUxEUyxcbiAgUEFUSFNfV0lUSF9UUkVFX1NUUlVDVFVSRSxcbiAgUEFUSFNfV0lUSF9ISUVSQVJDSElDQUxfVkFMVUVTLFxuICBBQ1RJVklUWV9DT05UQUNUX1BBVEhTLFxuICBUUkFOU0FDVElPTl9UWVBFUyxcbiAgVFJBTlNBQ1RJT05fVFlQRVNfT1JERVJFRCxcbiAgRlVORElOR19UUkFOU0FDVElPTl9UWVBFUyxcbiAgQURKVVNUTUVOVF9UWVBFX1BBVEhTLFxuICBGVU5ESU5HX0NVUlJFTkNZX1BBVEhTLFxuICBQQVRIU19GT1JfQUNUSVZJVFlfQ1VSUkVOQ1ksXG4gIFBBVEhTX0ZPUl9DVVJSRU5DWSxcbiAgRE9fTk9UX0hZRFJBVEVfRklFTERTX0xJU1QsXG4gIEFMVEVSTkFURV9WQUxVRV9QQVRILFxuICBBQ1RJVklUWV9GSUVMRFNfRk1fUEFUSCxcbiAgUFJFRklYX0FDVElWSVRZLFxuICBQUkVGSVhfQ09OVEFDVCxcbiAgUFJFRklYX1JFU09VUkNFLFxuICBQUkVGSVhfQ09NTU9OLFxuICBQUkVGSVhfTElTVCxcbiAgRklFTERfUEFUSCxcbiAgRklFTERfT1BUSU9OUyxcbiAgRklFTERfT1BUSU9OX1VTQUJMRSxcbiAgTElTVF9NQVhfU0laRSxcbiAgUkVHRVhfUEFUVEVSTixcbiAgRklFTERfTkFNRSxcbiAgRklFTERfTEFCRUwsXG4gIEZJRUxEX1JFUVVJUkVELFxuICBGSUVMRF9VTklRVUVfQ09OU1RSQUlOVCxcbiAgRklFTERfVFlQRSxcbiAgRklFTERfTEVOR1RILFxuICBGSUVMRF9QRVJDRU5UQUdFLFxuICBGSUVMRF9QRVJDRU5UQUdFX0NPTlNUUkFJTlQsXG4gIEZJRUxEX0lURU1fVFlQRSxcbiAgRklFTERfSU1QT1JUQUJMRSxcbiAgRklFTERfSURfT05MWSxcbiAgRklFTERfTVVMVElQTEVfVkFMVUVTX0FMTE9XRUQsXG4gIEZJRUxEX1RSRUVfQ09MTEVDVElPTixcbiAgRklFTERfQ0hJTERSRU4sXG4gIEZJRUxEX0RFUEVOREVOQ0lFUyxcbiAgRklFTERfVFlQRV9MSVNULFxuICBGSUVMRF9UWVBFX09CSkVDVCxcbiAgRklFTERfVFlQRV9TVFJJTkcsXG4gIEZJRUxEX1RZUEVfTE9ORyxcbiAgRklFTERfVFlQRV9GTE9BVCxcbiAgRklFTERfVFlQRV9CT09MRUFOLFxuICBGSUVMRF9UWVBFX0RBVEUsXG4gIEZJRUxEX1RZUEVfVElNRVNUQU1QLFxufSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL0NvbnN0YW50cyc7XG5pbXBvcnQgKiBhcyBGUEMgZnJvbSAnLi4vLi4vdXRpbHMvRmllbGRQYXRoQ29uc3RhbnRzJztcblxubGV0IGxvZ2dlciA9IG51bGw7XG5cbi8qKlxuICogVGhpcyBpcyBhIGhlbHBlciBjbGFzcyBmb3IgY2hlY2tpbmcgZmllbGRzIHN0YXR1cywgZ2V0dGluZyBmaWVsZCBvcHRpb25zIHRyYW5zbGF0aW9ucyBhbmQgdGhlIGxpa2UuXG4gKlxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZHNNYW5hZ2VyIHtcbiAgLyoqXG4gICAqIFNoYWxsb3cgY2xvbmUgb2YgYW5vdGhlciBuZXdGaWVsZHNNYW5hZ2VyXG4gICAqIEBwYXJhbSBmaWVsZHNNYW5hZ2VyXG4gICAqIEByZXR1cm4ge0ZpZWxkc01hbmFnZXJ9XG4gICAqL1xuICBzdGF0aWMgY2xvbmUoZmllbGRzTWFuYWdlcjogRmllbGRzTWFuYWdlciwgTG9nZ2VyTWFuYWdlcikge1xuICAgIGNvbnN0IG5ld0ZpZWxkc01hbmFnZXIgPSBuZXcgRmllbGRzTWFuYWdlcihbXSwgW10sIG51bGwsXG4gICAgICBMb2dnZXJNYW5hZ2VyKTtcbiAgICBPYmplY3QuYXNzaWduKG5ld0ZpZWxkc01hbmFnZXIsIGZpZWxkc01hbmFnZXIpO1xuICAgIHJldHVybiBuZXdGaWVsZHNNYW5hZ2VyO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZmllbGRzRGVmLCBwb3NzaWJsZVZhbHVlc0NvbGxlY3Rpb24sIGN1cnJlbnRMYW5ndWFnZSwgTG9nZ2VyTWFuYWdlcikge1xuICAgIC8vIFRPRE8gcmVtb3ZlIGNhY2hlXG4gICAgbG9nZ2VyID0gbmV3IExvZ2dlck1hbmFnZXIoJ0ZpZWxkcyBtYW5hZ2VyJyk7XG4gICAgbG9nZ2VyLmRlYnVnKCdjb25zdHJ1Y3RvcicpO1xuICAgIHRoaXMuX2ZpZWxkc0RlZiA9IGZpZWxkc0RlZjtcbiAgICB0aGlzLl9wb3NzaWJsZVZhbHVlc01hcCA9IHt9O1xuICAgIHBvc3NpYmxlVmFsdWVzQ29sbGVjdGlvbi5mb3JFYWNoKHB2ID0+IHtcbiAgICAgIHRoaXMuX3Bvc3NpYmxlVmFsdWVzTWFwW3B2LmlkXSA9IHB2W0ZQQy5GSUVMRF9PUFRJT05TXTtcbiAgICB9KTtcbiAgICB0aGlzLl9maWVsZFBhdGhzRW5hYmxlZFN0YXR1c01hcCA9IHt9O1xuICAgIHRoaXMuX2xhbmcgPSBjdXJyZW50TGFuZ3VhZ2UgfHwgQ29uc3RhbnRzLkxBTkdVQUdFX0VOR0xJU0g7XG4gICAgdGhpcy5fZGVmYXVsdExhbmcgPSBDb25zdGFudHMuTEFOR1VBR0VfRU5HTElTSDtcbiAgICB0aGlzLmNsZWFudXAoZmllbGRzRGVmKTtcbiAgfVxuXG4gIGNsZWFudXAoZmllbGRzRGVmKSB7XG4gICAgLy8gVE9ETyBkZWNpZGUgZWl0aGVyIHRvIGtlZXAgY2xlYW51cCAoaGVyZSBvciBhbnl3aGVyZSBlbHNlKSBvciBjaGVjayBpZiB3ZSBuZWVkIHRvIHN0YW5kYXJkaXplIEFQSVxuICAgIGZpZWxkc0RlZi5mb3JFYWNoKGZkID0+IHtcbiAgICAgIGlmIChmZC5jaGlsZHJlbikge1xuICAgICAgICB0aGlzLmNsZWFudXAoZmQuY2hpbGRyZW4pO1xuICAgICAgfVxuICAgICAgaWYgKGZkLmZpZWxkX2xhYmVsKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGZkLmZpZWxkX2xhYmVsKS5mb3JFYWNoKGxhbmcgPT4ge1xuICAgICAgICAgICAgZmQuZmllbGRfbGFiZWxbbGFuZy50b0xvd2VyQ2FzZSgpXSA9IGZkLmZpZWxkX2xhYmVsW2xhbmddO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0IGN1cnJlbnRMYW5ndWFnZUNvZGUobGFuZykge1xuICAgIHRoaXMuX2xhbmcgPSBsYW5nO1xuICB9XG5cbiAgc2V0IGRlZmF1bHRMYW5ndWFnZUNvZGUobGFuZykge1xuICAgIHRoaXMuX2RlZmF1bHRMYW5nID0gbGFuZztcbiAgfVxuXG4gIGdldCBmaWVsZHNEZWYoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkc0RlZjtcbiAgfVxuXG4gIGdldCBwb3NzaWJsZVZhbHVlc01hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zc2libGVWYWx1ZXNNYXA7XG4gIH1cblxuICBnZXRQb3NzaWJsZVZhbHVlc09wdGlvbnMoZmllbGRQYXRoKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5fcG9zc2libGVWYWx1ZXNNYXBbZmllbGRQYXRoXSk7XG4gIH1cblxuICBpc0ZpZWxkUGF0aEJ5UGFydHNFbmFibGVkKC4uLnBhdGhQYXJ0cykge1xuICAgIHJldHVybiB0aGlzLmlzRmllbGRQYXRoRW5hYmxlZChwYXRoUGFydHMuam9pbignficpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIHNwZWNpZmllZCBmaWVsZCBwYXRoIGlzIGVuYWJsZWQgaW4gQU1QIEZNXG4gICAqIEBwYXJhbSBmaWVsZFBhdGhcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzRmllbGRQYXRoRW5hYmxlZChmaWVsZFBhdGgpIHtcbiAgICBpZiAodGhpcy5fZmllbGRQYXRoc0VuYWJsZWRTdGF0dXNNYXBbZmllbGRQYXRoXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9idWlsZEZpZWxkUGF0aFN0YXR1cyhmaWVsZFBhdGgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZmllbGRQYXRoc0VuYWJsZWRTdGF0dXNNYXBbZmllbGRQYXRoXTtcbiAgfVxuXG4gIF9idWlsZEZpZWxkUGF0aFN0YXR1cyhmaWVsZFBhdGgpIHtcbiAgICBjb25zdCBwYXRoUGFydHMgPSBmaWVsZFBhdGguc3BsaXQoJ34nKTtcbiAgICBsZXQgY3VycmVudFRyZWUgPSB0aGlzLl9maWVsZHNEZWY7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IHBhdGhQYXJ0cy5zb21lKHBhcnQgPT4ge1xuICAgICAgY3VycmVudFRyZWUgPSBjdXJyZW50VHJlZS5maW5kKGZpZWxkID0+IGZpZWxkLmZpZWxkX25hbWUgPT09IHBhcnQpO1xuICAgICAgaWYgKGN1cnJlbnRUcmVlICYmICgoY3VycmVudFRyZWVbRlBDLkZJRUxEX1RZUEVdID09PSBGUEMuRklFTERfVFlQRV9MSVNUXG4gICAgICAgICYmIGN1cnJlbnRUcmVlW0ZQQy5GSUVMRF9JVEVNX1RZUEVdID09PSBGUEMuRklFTERfVFlQRV9PQkpFQ1QpXG4gICAgICAgIHx8IGN1cnJlbnRUcmVlW0ZQQy5GSUVMRF9UWVBFXSA9PT0gRlBDLkZJRUxEX1RZUEVfT0JKRUNUKSkge1xuICAgICAgICBjdXJyZW50VHJlZSA9IGN1cnJlbnRUcmVlLmNoaWxkcmVuO1xuICAgICAgfVxuICAgICAgcmV0dXJuICFjdXJyZW50VHJlZTtcbiAgICB9KTtcbiAgICB0aGlzLl9maWVsZFBhdGhzRW5hYmxlZFN0YXR1c01hcFtmaWVsZFBhdGhdID0gIWlzRGlzYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogRmluZCB0aGUgdHJhbnNsYXRpb24gZm9yIHRoZSBvcmlnaW5hbCB2YWx1ZSBmb3IgdGhlIGdpdmVuIGZpZWxkIHBhdGgsIGlmIGZvdW5kLCBvdGhlcndpc2UgcmV0dXJucyBudWxsXG4gICAqIEBwYXJhbSBmaWVsZFBhdGhcbiAgICogQHBhcmFtIG9yaWdWYWx1ZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd8bnVsbH1cbiAgICovXG4gIGdldFZhbHVlVHJhbnNsYXRpb24oZmllbGRQYXRoLCBvcmlnVmFsdWUpIHtcbiAgICAvLyBmYWxsYmFjayB0byBvcmlnaW5hbCB1bnRyYW5zbGF0ZWQgdmFsdWVcbiAgICBsZXQgdHJuVmFsdWUgPSBvcmlnVmFsdWU7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuX3Bvc3NpYmxlVmFsdWVzTWFwW2ZpZWxkUGF0aF07XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IE9iamVjdC52YWx1ZXMob3B0aW9ucykuZmluZChvcHQgPT4gb3B0LnZhbHVlID09PSBvcmlnVmFsdWUpO1xuICAgICAgaWYgKG9wdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9ucyA9IG9wdGlvblsndHJhbnNsYXRlZC12YWx1ZSddO1xuICAgICAgICBpZiAodHJhbnNsYXRpb25zKSB7XG4gICAgICAgICAgdHJuVmFsdWUgPSB0cmFuc2xhdGlvbnNbdGhpcy5fbGFuZ10gfHwgdHJhbnNsYXRpb25zW3RoaXMuX2RlZmF1bHRMYW5nXSB8fCB0cm5WYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJuVmFsdWU7XG4gIH1cblxuICBnZXRGaWVsZExhYmVsVHJhbnNsYXRpb24oZmllbGRQYXRoKSB7XG4gICAgbGV0IHRybkxhYmVsID0gbnVsbDtcbiAgICBjb25zdCBmaWVsZHNEZWYgPSB0aGlzLmdldEZpZWxkRGVmKGZpZWxkUGF0aCk7XG4gICAgaWYgKGZpZWxkc0RlZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0cm5MYWJlbCA9IGZpZWxkc0RlZi5maWVsZF9sYWJlbFt0aGlzLl9sYW5nXSB8fCBmaWVsZHNEZWYuZmllbGRfbGFiZWxbdGhpcy5fZGVmYXVsdExhbmddIHx8IG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0cm5MYWJlbDtcbiAgfVxuXG4gIGdldEZpZWxkRGVmKGZpZWxkUGF0aCkge1xuICAgIGxldCBmaWVsZHNEZWYgPSB0aGlzLl9maWVsZHNEZWY7XG4gICAgaWYgKGZpZWxkUGF0aCkge1xuICAgICAgZmllbGRQYXRoLnNwbGl0KCd+Jykuc29tZShwYXJ0ID0+IHtcbiAgICAgICAgICBpZiAoIShmaWVsZHNEZWYgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgICAgIGZpZWxkc0RlZiA9IGZpZWxkc0RlZi5jaGlsZHJlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmllbGRzRGVmID0gZmllbGRzRGVmLmZpbmQoZmQgPT4gZmQuZmllbGRfbmFtZSA9PT0gcGFydCk7XG4gICAgICAgICAgcmV0dXJuIGZpZWxkc0RlZiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGRzRGVmID0geyBjaGlsZHJlbjogZmllbGRzRGVmIH07XG4gICAgfVxuICAgIHJldHVybiBmaWVsZHNEZWY7XG4gIH1cblxuICBnZXRGaWVsZFBhdGhzQnlEZXBlbmRlbmNpZXMoZGVwZW5kZW5jaWVzKSB7XG4gICAgY29uc3QgZmllbGRQYXRocyA9IFtdO1xuICAgIHRoaXMuX2dldEZpZWxkUGF0aHNCeURlcGVuZGVuY2llcyhkZXBlbmRlbmNpZXMsIHRoaXMuX2ZpZWxkc0RlZiwgJycsIGZpZWxkUGF0aHMpO1xuICAgIHJldHVybiBmaWVsZFBhdGhzO1xuICB9XG5cbiAgX2dldEZpZWxkUGF0aHNCeURlcGVuZGVuY2llcyhkZXBlbmRlbmNpZXMsIGZpZWxkc0RlZiwgY3VycmVudFBhdGgsIGZpZWxkUGF0aHM6IEFycmF5KSB7XG4gICAgaWYgKCEoZmllbGRzRGVmIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBmaWVsZHNEZWYgPSBmaWVsZHNEZWYuY2hpbGRyZW47XG4gICAgfVxuICAgIGZpZWxkc0RlZi5mb3JFYWNoKGZkID0+IHtcbiAgICAgIGNvbnN0IGhhc0RlcGVuZGVuY3kgPSBmZC5kZXBlbmRlbmNpZXMgJiYgZmQuZGVwZW5kZW5jaWVzLnNvbWUoZGVwID0+IGRlcGVuZGVuY2llcy5pbmNsdWRlcyhkZXApKTtcbiAgICAgIGlmIChmZC5jaGlsZHJlbiB8fCBoYXNEZXBlbmRlbmN5KSB7XG4gICAgICAgIGNvbnN0IGZpZWxkUGF0aCA9IGAke2N1cnJlbnRQYXRofSR7ZmQuZmllbGRfbmFtZX1gO1xuICAgICAgICBpZiAoaGFzRGVwZW5kZW5jeSkge1xuICAgICAgICAgIGZpZWxkUGF0aHMucHVzaChmaWVsZFBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmZC5jaGlsZHJlbikge1xuICAgICAgICAgIHRoaXMuX2dldEZpZWxkUGF0aHNCeURlcGVuZGVuY2llcyhkZXBlbmRlbmNpZXMsIGZkLmNoaWxkcmVuLCBgJHtmaWVsZFBhdGh9fmAsIGZpZWxkUGF0aHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRWYWx1ZShvYmplY3QsIGZpZWxkUGF0aCwgZ2V0T3B0aW9uVHJhbnNsYXRpb24pIHtcbiAgICByZXR1cm4gRmllbGRzTWFuYWdlci5nZXRWYWx1ZShvYmplY3QsIGZpZWxkUGF0aCwgZ2V0T3B0aW9uVHJhbnNsYXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGdldFZhbHVlKG9iamVjdCwgZmllbGRQYXRoLCBnZXRPcHRpb25UcmFuc2xhdGlvbikge1xuICAgIGNvbnN0IHBhcnRzID0gZmllbGRQYXRoID8gZmllbGRQYXRoLnNwbGl0KCd+JykgOiBbXTtcbiAgICBsZXQgdmFsdWUgPSBvYmplY3Q7XG4gICAgcGFydHMuc29tZShwYXJ0ID0+IHtcbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSBbXTtcbiAgICAgICAgdmFsdWUuZm9yRWFjaChjdXJyZW50ID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gY3VycmVudFtwYXJ0XTtcbiAgICAgICAgICBpZiAobmV3RWxlbWVudCAhPT0gdW5kZWZpbmVkICYmIG5ld0VsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaChuZXdFbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YWx1ZSA9IG5ld0xpc3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlW3BhcnRdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUubGVuZ3RoID09PSAwO1xuICAgIH0pO1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgbGV0IHZhbHVlcyA9IFtdLmNvbmNhdCh2YWx1ZSk7XG4gICAgICB2YWx1ZXMgPSB2YWx1ZXMubWFwKHZhbCA9PiB7XG4gICAgICAgIGlmICh2YWwudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdldE9wdGlvblRyYW5zbGF0aW9uKHZhbCwgdGhpcy5fbGFuZywgdGhpcy5fZGVmYXVsdExhbmcpO1xuICAgICAgfSk7XG4gICAgICB2YWx1ZSA9IHZhbHVlIGluc3RhbmNlb2YgQXJyYXkgPyB2YWx1ZXMgOiB2YWx1ZXNbMF07XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IFZhbHVlQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL1ZhbHVlQ29uc3RhbnRzJztcblxuY29uc3QgQ0xJRU5UX0NIQU5HRV9JRCA9ICdhbXAtb2ZmbGluZS1jb250YWN0LWNoYW5nZS1pZCc7XG5jb25zdCBDTElFTlRfQ0hBTkdFX0lEX1BSRUZJWCA9ICdhbXAtb2ZmbGluZS1jb250YWN0LWlkJztcbmNvbnN0IE5BTUUgPSAnbmFtZSc7XG5jb25zdCBMQVNUX05BTUUgPSAnbGFzdF9uYW1lJztcbmNvbnN0IFRJVExFID0gJ3RpdGxlJztcbmNvbnN0IE9SR0FOSVpBVElPTl9OQU1FID0gJ29yZ2FuaXphdGlvbl9uYW1lJztcbmNvbnN0IEZVTkNUSU9OID0gJ2Z1bmN0aW9uJztcbmNvbnN0IE9GRklDRV9BRERSRVNTID0gJ29mZmljZV9hZGRyZXNzJztcbmNvbnN0IENSRUFUT1IgPSAnY3JlYXRvcic7XG5jb25zdCBPUkdBTklTQVRJT05fQ09OVEFDVFMgPSAnb3JnYW5pc2F0aW9uX2NvbnRhY3RzJztcbmNvbnN0IE9SR0FOSVNBVElPTiA9ICdvcmdhbmlzYXRpb24nO1xuY29uc3QgRU1BSUwgPSAnZW1haWwnO1xuY29uc3QgVkFMVUUgPSAndmFsdWUnO1xuY29uc3QgUEhPTkUgPSAncGhvbmUnO1xuY29uc3QgRVhURU5TSU9OX1ZBTFVFID0gJ2V4dGVuc2lvbl92YWx1ZSc7XG5jb25zdCBUWVBFID0gJ3R5cGUnO1xuY29uc3QgRkFYID0gJ2ZheCc7XG5cbmNvbnN0IFRNUF9GT1JNX0lEID0gJ2Zvcm0taWQnO1xuY29uc3QgVE1QX1VOSVFVRV9JRCA9ICd1bmlxdWVJZCc7XG5jb25zdCBUTVBfSFlEUkFURUQgPSAnaHlkcmF0ZWQnO1xuY29uc3QgVE1QX0VSUk9SUyA9ICdlcnJvcnMnO1xuY29uc3QgVE1QX0NPTlRBQ1RfTE9BREVEID0gJ2lzQ29udGFjdExvYWRlZCc7XG5jb25zdCBUTVBfQ09OVEFDVF9MT0FESU5HID0gJ2lzQ29udGFjdExvYWRpbmcnO1xuY29uc3QgVE1QX0VOVElUWV9WQUxJREFUT1IgPSBWYWx1ZUNvbnN0YW50cy5UTVBfRU5USVRZX1ZBTElEQVRPUjtcbmNvbnN0IFRNUF9GSUVMRFMgPSBbVE1QX0ZPUk1fSUQsIFRNUF9VTklRVUVfSUQsIFRNUF9IWURSQVRFRCwgVE1QX0VSUk9SUywgVE1QX0VOVElUWV9WQUxJREFUT1IsXG4gIFRNUF9DT05UQUNUX0xPQURFRCwgVE1QX0NPTlRBQ1RfTE9BRElOR107XG5cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0LmZyZWV6ZSh7XG4gIENMSUVOVF9DSEFOR0VfSUQsXG4gIENMSUVOVF9DSEFOR0VfSURfUFJFRklYLFxuICBOQU1FLFxuICBMQVNUX05BTUUsXG4gIFRJVExFLFxuICBPUkdBTklaQVRJT05fTkFNRSxcbiAgRlVOQ1RJT04sXG4gIE9GRklDRV9BRERSRVNTLFxuICBDUkVBVE9SLFxuICBPUkdBTklTQVRJT05fQ09OVEFDVFMsXG4gIE9SR0FOSVNBVElPTixcbiAgRU1BSUwsXG4gIFZBTFVFLFxuICBQSE9ORSxcbiAgRVhURU5TSU9OX1ZBTFVFLFxuICBUWVBFLFxuICBGQVgsXG4gIFRNUF9GT1JNX0lELFxuICBUTVBfVU5JUVVFX0lELFxuICBUTVBfSFlEUkFURUQsXG4gIFRNUF9FUlJPUlMsXG4gIFRNUF9DT05UQUNUX0xPQURFRCxcbiAgVE1QX0NPTlRBQ1RfTE9BRElORyxcbiAgVE1QX0VOVElUWV9WQUxJREFUT1IsXG4gIFRNUF9GSUVMRFNcbn0pO1xuIiwiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuaW1wb3J0IEFjdGl2aXR5Q29uc3RhbnRzIGZyb20gJy4uL3V0aWwvQWN0aXZpdHlDb25zdGFudHMnO1xuaW1wb3J0IEVycm9yQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cy9FcnJvckNvbnN0YW50cyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL0NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnJlbmN5UmF0ZXNNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoY3VycmVuY3lSYXRlcywgYmFzZUN1cnJlbmN5LCB0cmFuc2xhdGUsIGRhdGVVdGlscywgZXJyb3JOb3RpZmljYXRpb25IZWxwZXIpIHtcbiAgICB0aGlzLl9jdXJyZW5jeVJhdGVzID0gY3VycmVuY3lSYXRlcztcbiAgICB0aGlzLl9iYXNlQ3VycmVuY3kgPSBiYXNlQ3VycmVuY3k7XG4gICAgdGhpcy5fY3Vycm5jaWVzV2l0aEV4Y2hhbmdlUmF0ZXMgPSB0aGlzLl9nZXRDdXJyZW5jaWVzV2l0aEV4Y2hhbmdlUmF0ZXMoKTtcbiAgICB0aGlzLl90cmFuc2xhdGUgPSB0cmFuc2xhdGU7XG4gICAgdGhpcy5fZGF0ZVV0aWxzID0gZGF0ZVV0aWxzO1xuICAgIHRoaXMuX2Vycm9yTm90aWZpY2F0aW9uSGVscGVyID0gZXJyb3JOb3RpZmljYXRpb25IZWxwZXI7XG4gIH1cblxuICAvKipcbiAgICogU2V0IG9mIGN1cnJlbmNpZXMgdGhhdCBoYXMgYXQgbGVhc3Qgb25lIGV4Y2hhbmdlIHJhdGVcbiAgICogQHJldHVybiB7U2V0PGFueT4gfCAqfVxuICAgKi9cbiAgZ2V0IGN1cnJlbmNpZXNXaXRoRXhjaGFuZ2VSYXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY3Vycm5jaWVzV2l0aEV4Y2hhbmdlUmF0ZXM7XG4gIH1cblxuICAvKipcbiAgICogQ3VycmVuY3kgY29udmVyc2lvbiB1dGlsaXR5LiBJZiB3ZSBoYXZlIHRoZSBkaXJlY3QgcmF0ZSBpdCB3aWxsIGNvbnZlcnQgZnJvbSBjdXJyZW5jeUZyb20gdG8gY3VycmVuY3lUbyBpbiB0aGVcbiAgICogZ2l2ZW4gZGF0ZS4gSWYgd2UgZG9uJ3QgaGF2ZSB0aGUgc2FpZCBjdXJyZW5jeSBpdCB3aWxsIHRyeSB0byBzZWFyY2ggdGhlIGludmVyc2UgcmF0ZSBhbmQgdXNlIDEveC4gSWYgdGhlIGludmVyc2VcbiAgICogcmF0ZSBpcyBhbHNvIG5vdCBBdmFpbGFibGUgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd25cbiAgICogQHBhcmFtIGN1cnJlbmN5RnJvbSBjdXJyZW5jeSBjb2RlIGZyb20gdGhlIGN1cnJlbmN5IHdlIGFyZSBjb252ZXJ0aW5nIGZyb21cbiAgICogQHBhcmFtIGN1cnJlbmN5VG8gY3VycmVuY3kgY29kZSBmcm9tIHRoZSBjdXJyZW5jeSB3ZSBhcmUgY29udmVydGluZyB0b1xuICAgKiBAcGFyYW0gZGF0ZVRvRmluZCBkYXRlIGZvciB3aGljaCB3ZSBhcmUgZG9pbmcgdGhlIGNvbnZlcnNpb24uIEl0IGlzIGV4cGVjdGVkIGluIHl5eXktbW0tZGRcbiAgICogQHJldHVybnMgeyp8UHJvbWlzZS48VFJlc3VsdD59XG4gICAqL1xuICBjb252ZXJ0Q3VycmVuY3koY3VycmVuY3lGcm9tLCBjdXJyZW5jeVRvLCBkYXRlVG9GaW5kLCBmaXhlZEV4Y2hhbmdlUmF0ZSkge1xuICAgIGlmIChjdXJyZW5jeUZyb20gPT09IGN1cnJlbmN5VG8pIHtcbiAgICAgIHJldHVybiBDb25zdGFudHMuUkFURV9TQU1FX0NVUlJFTkNZO1xuICAgIH1cbiAgICBpZiAoZml4ZWRFeGNoYW5nZVJhdGUgJiYgZml4ZWRFeGNoYW5nZVJhdGUgPiAwKSB7XG4gICAgICByZXR1cm4gKHRoaXMuY29udmVydEN1cnJlbmN5KHRoaXMuX2Jhc2VDdXJyZW5jeSwgY3VycmVuY3lUbywgZGF0ZVRvRmluZCwgbnVsbCkgL1xuICAgICAgICBmaXhlZEV4Y2hhbmdlUmF0ZSk7XG4gICAgfVxuICAgIGNvbnN0IHRpbWVEYXRlVG9GaW5kID0gKG5ldyBEYXRlKGAke2RhdGVUb0ZpbmR9ICR7Q29uc3RhbnRzLkNVUlJFTkNZX0hPVVJ9YCkpLmdldFRpbWUoKTtcbiAgICBpZiAodGhpcy5fY3VycmVuY3lSYXRlcykge1xuICAgICAgY29uc3QgY3VycmVuY2llc1RvU2VhcmNoRGlyZWN0ID0gdGhpcy5fY3VycmVuY3lSYXRlcy5maW5kKChpdGVtKSA9PlxuICAgICAgICBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS5mcm9tID09PSBjdXJyZW5jeUZyb20gJiYgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0udG8gPT09IGN1cnJlbmN5VG9cbiAgICAgICk7XG4gICAgICBpZiAoY3VycmVuY2llc1RvU2VhcmNoRGlyZWN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEV4Y2hhbmdlUmF0ZShjdXJyZW5jaWVzVG9TZWFyY2hEaXJlY3QsIHRpbWVEYXRlVG9GaW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRpcmVjdCBub3QgZm91bmRcbiAgICAgICAgY29uc3QgY3VycmVuY2llc1RvU2VhcmNoSW52ZXJzZSA9XG4gICAgICAgICAgdGhpcy5fY3VycmVuY3lSYXRlcy5maW5kKChpdGVtKSA9PlxuICAgICAgICAgICAgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0uZnJvbSA9PT0gY3VycmVuY3lUbyAmJiBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS50byA9PT1cbiAgICAgICAgICAgIGN1cnJlbmN5RnJvbSk7XG4gICAgICAgIGlmIChjdXJyZW5jaWVzVG9TZWFyY2hJbnZlcnNlKSB7XG4gICAgICAgICAgcmV0dXJuIDEgLyB0aGlzLmdldEV4Y2hhbmdlUmF0ZShjdXJyZW5jaWVzVG9TZWFyY2hJbnZlcnNlLCB0aW1lRGF0ZVRvRmluZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29udmVydFZpYUJhc2VDdXJyZW5jeShjdXJyZW5jeUZyb20sIGN1cnJlbmN5VG8sIHRpbWVEYXRlVG9GaW5kKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyB0aGlzLl9nZXRDdXJyZW5jeUVycm9yKCdDdXJyZW5jeVJhdGVzTm90SW5pdGlhbGl6ZWQnKTtcbiAgICB9XG4gIH1cblxuICBjb252ZXJ0RnVuZGluZ0RldGFpbHNUb0N1cnJlbmN5KGZ1bmRpbmdEZXRhaWxzLCBjdXJyZW5jeVRvKSB7XG4gICAgbGV0IHRvdGFsID0gMDtcbiAgICBmdW5kaW5nRGV0YWlscy5mb3JFYWNoKGZkID0+IHtcbiAgICAgIHRvdGFsICs9IHRoaXMuY29udmVydFRyYW5zYWN0aW9uQW1vdW50VG9DdXJyZW5jeShmZCwgY3VycmVuY3lUbyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdG90YWw7XG4gIH1cblxuICBjb252ZXJ0VHJhbnNhY3Rpb25BbW91bnRUb0Jhc2VDdXJyZW5jeShmdW5kaW5nRGV0YWlsKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udmVydFRyYW5zYWN0aW9uQW1vdW50VG9DdXJyZW5jeShmdW5kaW5nRGV0YWlsLCB0aGlzLl9iYXNlQ3VycmVuY3kpO1xuICB9XG5cbiAgY29udmVydEFtb3VudFRvQ3VycmVuY3koYW1vdW50LCBjdXJyZW5jeUZyb20sIGRhdGUsIGZpeGVkRXhjaGFuZ2VSYXRlLCBjdXJyZW5jeVRvKSB7XG4gICAgY29uc3QgY3VycmVuY3lSYXRlID0gdGhpcy5jb252ZXJ0Q3VycmVuY3koY3VycmVuY3lGcm9tLCBjdXJyZW5jeVRvLFxuICAgICAgdGhpcy5fZGF0ZVV0aWxzLmZvcm1hdERhdGVGb3JBUEkoZGF0ZSksIGZpeGVkRXhjaGFuZ2VSYXRlKTtcbiAgICByZXR1cm4gYW1vdW50ICogY3VycmVuY3lSYXRlO1xuICB9XG5cbiAgY29udmVydFRyYW5zYWN0aW9uQW1vdW50VG9DdXJyZW5jeShmdW5kaW5nRGV0YWlsLCBjdXJyZW5jeVRvKSB7XG4gICAgY29uc3QgZml4ZWRFeGNoYW5nZVJhdGUgPSBmdW5kaW5nRGV0YWlsW0FjdGl2aXR5Q29uc3RhbnRzLkZJWEVEX0VYQ0hBTkdFX1JBVEVdO1xuICAgIGNvbnN0IGN1cnJlbmN5RnJvbSA9IGZ1bmRpbmdEZXRhaWxbQWN0aXZpdHlDb25zdGFudHMuQ1VSUkVOQ1ldLnZhbHVlO1xuICAgIGNvbnN0IHRyYW5zYWN0aW9uRGF0ZSA9IGZ1bmRpbmdEZXRhaWxbQWN0aXZpdHlDb25zdGFudHMuVFJBTlNBQ1RJT05fREFURV07XG4gICAgY29uc3QgdHJhbnNhY3Rpb25BbW91bnQgPSBmdW5kaW5nRGV0YWlsW0FjdGl2aXR5Q29uc3RhbnRzLlRSQU5TQUNUSU9OX0FNT1VOVF07XG4gICAgcmV0dXJuIHRoaXMuY29udmVydEFtb3VudFRvQ3VycmVuY3kodHJhbnNhY3Rpb25BbW91bnQsIGN1cnJlbmN5RnJvbSwgdHJhbnNhY3Rpb25EYXRlLCBmaXhlZEV4Y2hhbmdlUmF0ZSxcbiAgICAgIGN1cnJlbmN5VG8pO1xuICB9XG5cbiAgZ2V0RXhjaGFuZ2VSYXRlKGN1cnJlbmNpZXNUb1NlYXJjaCwgdGltZURhdGVUb0ZpbmQpIHtcbiAgICBsZXQgbG93ZXJFbmQgPSAwO1xuICAgIGxldCBoaWdoZXJFbmQgPSBjdXJyZW5jaWVzVG9TZWFyY2gucmF0ZXMubGVuZ3RoIC0gMTtcbiAgICB3aGlsZSAobG93ZXJFbmQgPCBoaWdoZXJFbmQpIHtcbiAgICAgIGNvbnN0IG1pZGRsZSA9IE1hdGguZmxvb3IoKGxvd2VyRW5kICsgaGlnaGVyRW5kKSAvIDIpO1xuICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IE1hdGguYWJzKChuZXcgRGF0ZShcbiAgICAgICAgYCR7Y3VycmVuY2llc1RvU2VhcmNoLnJhdGVzW21pZGRsZV0uZGF0ZX0gICR7Q29uc3RhbnRzLkNVUlJFTkNZX0hPVVJ9YCkpXG4gICAgICAgIC0gdGltZURhdGVUb0ZpbmQpO1xuICAgICAgY29uc3QgZGlmZmVyZW5jZTEgPSBNYXRoLmFicygobmV3IERhdGUoXG4gICAgICAgIGAke2N1cnJlbmNpZXNUb1NlYXJjaC5yYXRlc1ttaWRkbGUgKyAxXS5kYXRlfSAgJHtDb25zdGFudHMuQ1VSUkVOQ1lfSE9VUn1gKSlcbiAgICAgICAgLSB0aW1lRGF0ZVRvRmluZCk7XG4gICAgICBpZiAoZGlmZmVyZW5jZTEgPD0gZGlmZmVyZW5jZSkge1xuICAgICAgICBsb3dlckVuZCA9IG1pZGRsZSArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoaWdoZXJFbmQgPSBtaWRkbGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW5jaWVzVG9TZWFyY2gucmF0ZXNbaGlnaGVyRW5kXS5yYXRlO1xuICB9XG5cbiAgX2dldEN1cnJlbmN5RXJyb3IoZXJyb3JNZXNhZ2UpIHtcbiAgICBjb25zdCBub3RpZkVycm9yQ3VycmVuY3kgPSB0aGlzLl9lcnJvck5vdGlmaWNhdGlvbkhlbHBlci5jcmVhdGVOb3RpZmljYXRpb24oe1xuICAgICAgbWVzc2FnZTogdGhpcy5fdHJhbnNsYXRlKGVycm9yTWVzYWdlKSxcbiAgICAgIG9yaWdpbjogRXJyb3JDb25zdGFudHMuTk9USUZJQ0FUSU9OX09SSUdJTl9DVVJSRU5DWV9NQU5BR0VSXG4gICAgfSk7XG4gICAgcmV0dXJuIG5vdGlmRXJyb3JDdXJyZW5jeTtcbiAgfVxuXG4gIGNvbnZlcnRWaWFCYXNlQ3VycmVuY3koY3VycmVuY3lGcm9tLCBjdXJyZW5jeVRvLCB0aW1lRGF0ZVRvRmluZCkge1xuICAgIGNvbnN0IHJhdGVGcm9tVG9CYXNlID0gdGhpcy5fY3VycmVuY3lSYXRlcy5maW5kKChpdGVtKSA9PlxuICAgICAgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0uZnJvbSA9PT0gY3VycmVuY3lGcm9tICYmIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLnRvID09PVxuICAgICAgdGhpcy5fYmFzZUN1cnJlbmN5XG4gICAgKTtcbiAgICBjb25zdCByYXRlQmFzZVRvVG8gPSB0aGlzLl9jdXJyZW5jeVJhdGVzLmZpbmQoKGl0ZW0pID0+XG4gICAgICBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS5mcm9tID09PSB0aGlzLl9iYXNlQ3VycmVuY3kgJiYgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0udG8gPT09XG4gICAgICBjdXJyZW5jeVRvXG4gICAgKTtcbiAgICBpZiAocmF0ZUZyb21Ub0Jhc2UgJiYgcmF0ZUJhc2VUb1RvKSB7XG4gICAgICAvLyBpZiB3ZSBoYXZlIGJvdGggY3VycmVuY2llcyB3ZSBqdXN0IHJldHVybiB0aGUgcHJvZHVjdCBvZiBlY2ggcmF0ZVxuICAgICAgcmV0dXJuIHRoaXMuZ2V0RXhjaGFuZ2VSYXRlKHJhdGVGcm9tVG9CYXNlLCB0aW1lRGF0ZVRvRmluZCkgKiB0aGlzLmdldEV4Y2hhbmdlUmF0ZShyYXRlQmFzZVRvVG8sIHRpbWVEYXRlVG9GaW5kKTtcbiAgICB9IGVsc2UgaWYgKHJhdGVGcm9tVG9CYXNlKSB7XG4gICAgICAvLyBpZiBlaXRoZXIgb2YgdGhlbSBpcyBub3QgZm91bmQgd2UgdHJ5IHRvIGZpbmQgdGhlIGludmVyc2VcbiAgICAgIC8vIHdlIGdldCB0aGUgaW52ZXJzZSBvZiByYXRlQmFzZVRvVG9cbiAgICAgIGNvbnN0IHJhdGVUb1RvQmFzZSA9IHRoaXMuX2N1cnJlbmN5UmF0ZXMuZmluZCgoaXRlbSkgPT5cbiAgICAgICAgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0uZnJvbSA9PT0gY3VycmVuY3lUbyAmJiBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS50byA9PT1cbiAgICAgICAgdGhpcy5fYmFzZUN1cnJlbmN5XG4gICAgICApO1xuICAgICAgaWYgKHJhdGVUb1RvQmFzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFeGNoYW5nZVJhdGUocmF0ZUZyb21Ub0Jhc2UsIHRpbWVEYXRlVG9GaW5kKVxuICAgICAgICAgICogKDEgLyB0aGlzLmdldEV4Y2hhbmdlUmF0ZShyYXRlVG9Ub0Jhc2UsIHRpbWVEYXRlVG9GaW5kKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gRXJyb3JDb25zdGFudHMuUkFURV9DVVJSRU5DWV9OT1RfRk9VTkQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyYXRlQmFzZVRvVG8pIHtcbiAgICAgIGNvbnN0IHJhdGVCYXNlVG9Gcm9tID0gdGhpcy5fY3VycmVuY3lSYXRlcy5maW5kKChpdGVtKSA9PlxuICAgICAgICBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS5mcm9tID09PSB0aGlzLl9iYXNlQ3VycmVuY3kgJiYgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0udG8gPT09XG4gICAgICAgIGN1cnJlbmN5RnJvbVxuICAgICAgKTtcbiAgICAgIC8vIHdlIHRyeSB0byBnZXQgdGhlIGludmVyc2Ugb2YgcmF0ZUZyb21Ub0Jhc2VcbiAgICAgIGlmIChyYXRlQmFzZVRvRnJvbSkge1xuICAgICAgICByZXR1cm4gKDEgLyB0aGlzLmdldEV4Y2hhbmdlUmF0ZShyYXRlQmFzZVRvRnJvbSwgdGltZURhdGVUb0ZpbmQpKVxuICAgICAgICAgICogdGhpcy5nZXRFeGNoYW5nZVJhdGUocmF0ZUJhc2VUb1RvLCB0aW1lRGF0ZVRvRmluZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gRXJyb3JDb25zdGFudHMuUkFURV9DVVJSRU5DWV9OT1RfRk9VTkQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBFcnJvckNvbnN0YW50cy5SQVRFX0NVUlJFTkNZX05PVF9GT1VORDtcbiAgICB9XG4gIH1cblxuICBfZ2V0Q3VycmVuY2llc1dpdGhFeGNoYW5nZVJhdGVzKCkge1xuICAgIGNvbnN0IGNzID0gbmV3IFNldCgpO1xuICAgIGlmICh0aGlzLl9jdXJyZW5jeVJhdGVzKSB7XG4gICAgICB0aGlzLl9jdXJyZW5jeVJhdGVzLmZvckVhY2goZXhjaGFuZ2VSYXRlcyA9PiB7XG4gICAgICAgIGNzLmFkZChleGNoYW5nZVJhdGVzW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS5mcm9tKTtcbiAgICAgICAgY3MuYWRkKGV4Y2hhbmdlUmF0ZXNbQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLnRvKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY3M7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIEZQQyBmcm9tICcuLi8uLi91dGlscy9GaWVsZFBhdGhDb25zdGFudHMnO1xuaW1wb3J0IEZpZWxkc01hbmFnZXIgZnJvbSAnLi9GaWVsZHNNYW5hZ2VyJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vLi4vdXRpbHMvQ29uc3RhbnRzJztcbmltcG9ydCBBY3Rpdml0eUNvbnN0YW50cyBmcm9tICcuLi91dGlsL0FjdGl2aXR5Q29uc3RhbnRzJztcbmltcG9ydCBDdXJyZW5jeVJhdGVzTWFuYWdlciBmcm9tICcuLi91dGlsL0N1cnJlbmN5UmF0ZXNNYW5hZ2VyJztcblxuXG4vKipcbiAqIFBvc3NpYmxlIFZhbHVlcyBtYW5hZ2VyIHRoYXQgYWxsb3dzIHRvIGZpbGwgaW4gYWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhbmQgdHJhbnNmb3JtYXRpb25zXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc3NpYmxlVmFsdWVzTWFuYWdlciB7XG4gIHN0YXRpYyBfbGFuZ1N0YXRlID0ge1xuICAgIGxhbmc6IENvbnN0YW50cy5MQU5HVUFHRV9FTkdMSVNILFxuICAgIGRlZmF1bHRMYW5nOiBDb25zdGFudHMuTEFOR1VBR0VfRU5HTElTSFxuICB9O1xuXG4gIHN0YXRpYyBfbG9nZ2VyO1xuXG4gIHN0YXRpYyBzZXRMYW5nU3RhdGUobGFuZ1N0YXRlKSB7XG4gICAgUG9zc2libGVWYWx1ZXNNYW5hZ2VyLl9sYW5nU3RhdGUgPSBsYW5nU3RhdGU7XG4gIH1cblxuICBzdGF0aWMgc2V0TG9nZ2VyKExvZ2dlcikge1xuICAgIFBvc3NpYmxlVmFsdWVzTWFuYWdlci5fbG9nZ2VyID0gbmV3IExvZ2dlcignUG9zc2libGUgdmFsdWVzIG1hbmFnZXInKTtcbiAgfVxuICBzdGF0aWMgYnVpbGRGb3JtYXR0ZWRIaWVyYXJjaGljYWxWYWx1ZXMob3B0aW9ucykge1xuICAgIC8vIFRPRE8gb3B0aW1pemVcbiAgICBjb25zdCBoT3B0aW9ucyA9IHt9O1xuICAgIE9iamVjdC52YWx1ZXMob3B0aW9ucykuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgaE9wdGlvbnNbb3B0aW9uLmlkXSA9IFBvc3NpYmxlVmFsdWVzTWFuYWdlci5idWlsZEhpZXJhcmNoaWNhbERhdGEob3B0aW9ucywgb3B0aW9uLmlkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaE9wdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgYnVpbGRIaWVyYXJjaGljYWxEYXRhKG9wdGlvbnMsIHNlbGVjdGVkSWQpIHtcbiAgICBjb25zdCBvcHRpb24gPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zW3NlbGVjdGVkSWRdKTtcbiAgICBjb25zdCB2YWx1ZVBhcnRzID0gUG9zc2libGVWYWx1ZXNNYW5hZ2VyLmdldEhpZXJhcmNoaWNhbFZhbHVlKG9wdGlvbnMsIHNlbGVjdGVkSWQpO1xuICAgIG9wdGlvbltBY3Rpdml0eUNvbnN0YW50cy5ISUVSQVJDSElDQUxfVkFMVUVdID0gUG9zc2libGVWYWx1ZXNNYW5hZ2VyLmZvcm1hdFZhbHVlUGFydHModmFsdWVQYXJ0cyk7XG4gICAgb3B0aW9uW0FjdGl2aXR5Q29uc3RhbnRzLkhJRVJBUkNISUNBTF9WQUxVRV9ERVBUSF0gPSAodmFsdWVQYXJ0cyAmJiB2YWx1ZVBhcnRzIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgIHZhbHVlUGFydHMubGVuZ3RoIDogMDtcbiAgICByZXR1cm4gb3B0aW9uO1xuICB9XG5cbiAgc3RhdGljIGdldEhpZXJhcmNoaWNhbFZhbHVlKG9wdGlvbnMsIHNlbGVjdGVkSWQpIHtcbiAgICBjb25zdCBuYW1lUGFydHMgPSBbXTtcbiAgICBsZXQgY3VycmVudCA9IG9wdGlvbnNbc2VsZWN0ZWRJZF07XG4gICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgIG5hbWVQYXJ0cy5wdXNoKFBvc3NpYmxlVmFsdWVzTWFuYWdlci5nZXRPcHRpb25UcmFuc2xhdGlvbihjdXJyZW50KSk7XG4gICAgICBjdXJyZW50ID0gb3B0aW9uc1tjdXJyZW50LnBhcmVudElkXTtcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVQYXJ0cztcbiAgfVxuXG4gIHN0YXRpYyBmb3JtYXRWYWx1ZVBhcnRzKHZhbHVlUGFydHMpIHtcbiAgICByZXR1cm4gKHZhbHVlUGFydHMgJiYgdmFsdWVQYXJ0cyBpbnN0YW5jZW9mIEFycmF5KSA/IGBbJHt2YWx1ZVBhcnRzLnJldmVyc2UoKS5qb2luKCddWycpfV1gIDogdmFsdWVQYXJ0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWxscyBoaWVyYXJjaGljYWwgZGVwdGggb2YgZWFjaCBvcHRpb25cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIHN0YXRpYyBmaWxsSGllcmFyY2hpY2FsRGVwdGgob3B0aW9ucykge1xuICAgIE9iamVjdC52YWx1ZXMob3B0aW9ucykuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgUG9zc2libGVWYWx1ZXNNYW5hZ2VyLl9maWxsSGllcmFyY2hpY2FsRGVwdGgob3B0aW9ucywgb3B0aW9uKTtcbiAgICB9KTtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBfZmlsbEhpZXJhcmNoaWNhbERlcHRoKG9wdGlvbnMsIG9wdGlvbikge1xuICAgIGlmICghb3B0aW9uKSB7XG4gICAgICBQb3NzaWJsZVZhbHVlc01hbmFnZXIuX2xvZ2dlci5lcnJvcihgb3B0aW9uIGlzIHVuc3BlY2lmaWVkOiAke29wdGlvbn1gKTtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBsZXQgZGVwdGggPSBvcHRpb25bQWN0aXZpdHlDb25zdGFudHMuSElFUkFSQ0hJQ0FMX1ZBTFVFX0RFUFRIXTtcbiAgICBpZiAoZGVwdGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gU28gZmFyIGl0IGlzIGJhc2VkIG9uIHRoZSBjdXJyZW50IGxvY2F0aW9ucyBleHRyYSBpbmZvIGFwcHJvYWNoXG4gICAgICBpZiAob3B0aW9uLnBhcmVudElkKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IG9wdGlvbnNbb3B0aW9uLnBhcmVudElkXTtcbiAgICAgICAgZGVwdGggPSAxICsgUG9zc2libGVWYWx1ZXNNYW5hZ2VyLl9maWxsSGllcmFyY2hpY2FsRGVwdGgob3B0aW9ucywgcGFyZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlcHRoID0gMDtcbiAgICAgIH1cbiAgICAgIG9wdGlvbltBY3Rpdml0eUNvbnN0YW50cy5ISUVSQVJDSElDQUxfVkFMVUVfREVQVEhdID0gZGVwdGg7XG4gICAgfVxuICAgIHJldHVybiBkZXB0aDtcbiAgfVxuXG4gIHN0YXRpYyBmaW5kT3B0aW9uKG9wdGlvbnMsIGlkKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMob3B0aW9ucykuZmluZChvID0+IG8uaWQgPT09IGlkKTtcbiAgfVxuXG4gIHN0YXRpYyBmaW5kT3B0aW9uQnlWYWx1ZShvcHRpb25zLCB2YWx1ZSkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKG9wdGlvbnMpLmZpbmQobyA9PiBvLnZhbHVlID09PSB2YWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0T3B0aW9uVHJhbnNsYXRpb24ob3B0aW9uKSB7XG4gICAgbGV0IHJlc1ZhbCA9IG9wdGlvbi52YWx1ZTtcbiAgICBjb25zdCB0cmFuc2xhdGlvbnMgPSBvcHRpb25bJ3RyYW5zbGF0ZWQtdmFsdWUnXTtcbiAgICBpZiAodHJhbnNsYXRpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGxhbmdTdGF0ZSA9IFBvc3NpYmxlVmFsdWVzTWFuYWdlci5fbGFuZ1N0YXRlO1xuICAgICAgcmVzVmFsID0gdHJhbnNsYXRpb25zW2xhbmdTdGF0ZS5sYW5nXSB8fCB0cmFuc2xhdGlvbnNbbGFuZ1N0YXRlLmRlZmF1bHRMYW5nXSB8fCByZXNWYWw7XG4gICAgfVxuICAgIHJldHVybiByZXNWYWw7XG4gIH1cblxuICBzdGF0aWMgc2V0VmlzaWJpbGl0eShvcHRpb25zLCBmaWVsZFBhdGgsIGN1cnJlbmN5UmF0ZXNNYW5hZ2VyOiBDdXJyZW5jeVJhdGVzTWFuYWdlciwgZmlsdGVycywgaXNPUkZpbHRlciA9IGZhbHNlLFxuICAgIHNlbGVjdGVkSWQpIHtcbiAgICBjb25zdCBpc0xvY2F0aW9ucyA9IEZQQy5MT0NBVElPTl9QQVRIID09PSBmaWVsZFBhdGg7XG4gICAgY29uc3QgaXNDdXJyZW5jeSA9IEZQQy5QQVRIU19GT1JfQ1VSUkVOQ1kuaGFzKGZpZWxkUGF0aCk7XG4gICAgb3B0aW9ucyA9IHsgLi4ub3B0aW9ucyB9O1xuICAgIE9iamVjdC52YWx1ZXMob3B0aW9ucykuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgb3B0aW9uLnZpc2libGUgPSAhaXNPUkZpbHRlcjtcbiAgICAgIGlmIChpc0xvY2F0aW9ucykge1xuICAgICAgICBvcHRpb24uZGlzcGxheUhpZXJhcmNoaWNhbFZhbHVlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoaXNDdXJyZW5jeSkge1xuICAgICAgICBvcHRpb25bRlBDLkZJRUxEX09QVElPTl9VU0FCTEVdID0gUG9zc2libGVWYWx1ZXNNYW5hZ2VyLmlzQ3VycmVuY3lPcHRpb25Vc2FibGUob3B0aW9uLCBjdXJyZW5jeVJhdGVzTWFuYWdlcik7XG4gICAgICAgIGlmICghb3B0aW9uW0ZQQy5GSUVMRF9PUFRJT05fVVNBQkxFXSkge1xuICAgICAgICAgIG9wdGlvbi52aXNpYmxlID0gb3B0aW9uLmlkID09PSBzZWxlY3RlZElkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGZpbHRlcnMpIHtcbiAgICAgIGZpbHRlcnMuZm9yRWFjaChmaWx0ZXIgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXJCeSA9IGZpbHRlci52YWx1ZTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhvcHRpb25zKS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9uRGF0YVRvQ2hlY2sgPSBGaWVsZHNNYW5hZ2VyLmdldFZhbHVlKG9wdGlvbiwgZmlsdGVyLnBhdGgpO1xuICAgICAgICAgIGlmICgoaXNPUkZpbHRlciB8fCBvcHRpb24udmlzaWJsZSkgJiYgb3B0aW9uRGF0YVRvQ2hlY2sgJiYgKFxuICAgICAgICAgICAgKG9wdGlvbkRhdGFUb0NoZWNrIGluc3RhbmNlb2YgQXJyYXkgJiYgb3B0aW9uRGF0YVRvQ2hlY2suaW5jbHVkZXMoZmlsdGVyQnkpKSB8fFxuICAgICAgICAgICAgKG9wdGlvbkRhdGFUb0NoZWNrID09PSBmaWx0ZXJCeSkpKSB7XG4gICAgICAgICAgICBvcHRpb24udmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc09SRmlsdGVyKSB7XG4gICAgICAgICAgICAvLyBEbyBub3RoaW5nLCBrZWVwIGl0IHZpc2libGUvaW52aXNpYmxlLlxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcHRpb24udmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgaXNDdXJyZW5jeU9wdGlvblVzYWJsZShvcHRpb24sIGN1cnJlbmN5UmF0ZXNNYW5hZ2VyOiBDdXJyZW5jeVJhdGVzTWFuYWdlcikge1xuICAgIGNvbnN0IGhhc0V4Y2hhbmdlUmF0ZXMgPSBjdXJyZW5jeVJhdGVzTWFuYWdlci5jdXJyZW5jaWVzV2l0aEV4Y2hhbmdlUmF0ZXMuaGFzKG9wdGlvbi52YWx1ZSk7XG4gICAgY29uc3QgaXNBY3RpdmUgPSBvcHRpb24uZXh0cmFfaW5mbyAmJiBvcHRpb24uZXh0cmFfaW5mby5hY3RpdmU7XG4gICAgcmV0dXJuIGlzQWN0aXZlICYmIGhhc0V4Y2hhbmdlUmF0ZXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0VHJlZVNvcnRlZE9wdGlvbnNMaXN0KG9wdGlvbnNPYmosIHJldmVyc2VTb3J0T3B0aW9ucykge1xuICAgIGNvbnN0IGFkZGVkID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IG9wdGlvbnNMaXN0ID0gW107XG4gICAgY29uc3QgaWRzU3RhY2sgPSBPYmplY3QudmFsdWVzKG9wdGlvbnNPYmopLmZpbHRlcihvID0+ICFvLnBhcmVudElkKS5zb3J0KHJldmVyc2VTb3J0T3B0aW9ucylcbiAgICAgIC5tYXAobyA9PiBvLmlkKTtcbiAgICB3aGlsZSAoaWRzU3RhY2subGVuZ3RoKSB7XG4gICAgICBjb25zdCBpZCA9IGlkc1N0YWNrLnBvcCgpO1xuICAgICAgaWYgKCFhZGRlZC5oYXMoaWQpKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IG9wdGlvbnNPYmpbaWRdO1xuICAgICAgICBpZiAob3B0aW9uLnJldmVyc2VTb3J0ZWRDaGlsZHJlbikge1xuICAgICAgICAgIGlkc1N0YWNrLnB1c2goLi4ub3B0aW9uLnJldmVyc2VTb3J0ZWRDaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgYWRkZWQuYWRkKGlkKTtcbiAgICAgICAgb3B0aW9uc0xpc3QucHVzaChvcHRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3B0aW9uc0xpc3Q7XG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmNvbnN0IEZFQVRVUkVfTUFOQUdFUiA9ICdGZWF0dXJlIG1hbmFnZXInO1xuXG4vKipcbiAqIEZlYXR1cmUgTWFuYWdlclxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGZWF0dXJlTWFuYWdlciB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBzdGF0aWMgX2N1cnJlbnRGTSA9IG5ldyBGZWF0dXJlTWFuYWdlcigpO1xuXG4gIGNvbnN0cnVjdG9yKGZtVHJlZSwgTG9nZ2VyTWFuYWdlcikge1xuICAgIHRoaXMuX2ZtVHJlZSA9IGZtVHJlZTtcbiAgICBpZiAoTG9nZ2VyTWFuYWdlcikge1xuICAgICAgdGhpcy5sb2dnZXJNYW5hZ2VyID0gTG9nZ2VyTWFuYWdlcjtcbiAgICB9XG4gIH1cbiAgc2V0IGZtVHJlZShmbVRyZWUpIHtcbiAgICB0aGlzLl9mbVRyZWUgPSBmbVRyZWU7XG4gIH1cbiAgc2V0IGxvZ2dlck1hbmFnZXIoTG9nZ2VyTWFuYWdlcikge1xuICAgIHRoaXMuX2xvZ2dlck1hbmFnZXIgPSBuZXcgTG9nZ2VyTWFuYWdlcihGRUFUVVJFX01BTkFHRVIpO1xuICB9XG5cbiAgc3RhdGljIHNldExvZ2dlck1hbmFnZXIoTG9nZ2VyTWFuYWdlcikge1xuICAgIEZlYXR1cmVNYW5hZ2VyLl9jdXJyZW50Rk0ubG9nZ2VyTWFuYWdlciA9IExvZ2dlck1hbmFnZXI7XG4gIH1cbiAgc3RhdGljIHNldEZNVHJlZShmbVRyZWUpIHtcbiAgICBGZWF0dXJlTWFuYWdlci5fY3VycmVudEZNLmZtVHJlZSA9IGZtVHJlZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGdpdmVuIEZNIHBhdGggaXMgZnVsbHkgZW5hYmxlZCBvciBvbmx5IGxhc3Qgc2VnbWVudCBpcyBlbmFibGVkXG4gICAqIEBwYXJhbSBmbVBhdGggdGhlIEZNIHBhdGgsIGUuZy4gJy9QUk9KRUNUIE1BTkFHRU1FTlQvRnVuZGluZy9GdW5kaW5nIEluZm9ybWF0aW9uL0RlbGl2ZXJ5IHJhdGUnXG4gICAqIEBwYXJhbSBvbmx5TGFzdFNlZ21lbnQgc3BlY2lmaWVzIGlmIHRvIGNoZWNrIGlmIG9ubHkgdGhlIGxhc3Qgc2VnbWVudCBpcyBlbmFibGVkICh0aGUgQU1QIGJlaGF2aW9yIGZvciBzb21lIGNhc2VzKVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzRk1TZXR0aW5nRW5hYmxlZChmbVBhdGgsIG9ubHlMYXN0U2VnbWVudCkge1xuICAgIHJldHVybiBGZWF0dXJlTWFuYWdlci5fY3VycmVudEZNLmlzRk1TZXR0aW5nRW5hYmxlZChmbVBhdGgsIG9ubHlMYXN0U2VnbWVudCk7XG4gIH1cblxuICBzdGF0aWMgaGFzRk1TZXR0aW5nKGZtUGF0aCkge1xuICAgIHJldHVybiBGZWF0dXJlTWFuYWdlci5fY3VycmVudEZNLmhhc0ZNU2V0dGluZyhmbVBhdGgpO1xuICB9XG5cbiAgaXNGTVNldHRpbmdFbmFibGVkKGZtUGF0aCwgb25seUxhc3RTZWdtZW50KSB7XG4gICAgdGhpcy5fbG9nZ2VyTWFuYWdlci5kZWJ1ZygnaXNGTVNldHRpbmdFbmFibGVkJyk7XG4gICAgaWYgKHRoaXMuX2ZtVHJlZSkge1xuICAgICAgbGV0IGxhc3RGTVN1YlRyZWUgPSB0aGlzLl9mbVRyZWU7XG4gICAgICBjb25zdCBzZWdtZW50cyA9IHRoaXMuX2dldFBhdGhTZWdtZW50cyhmbVBhdGgpO1xuICAgICAgY29uc3QgZm91bmRMYXN0Rk1TdWJUcmVlID0gc2VnbWVudHMuZXZlcnkoc2VnbWVudCA9PiB7XG4gICAgICAgIGxhc3RGTVN1YlRyZWUgPSBsYXN0Rk1TdWJUcmVlW3NlZ21lbnRdO1xuICAgICAgICByZXR1cm4gbGFzdEZNU3ViVHJlZSAhPT0gdW5kZWZpbmVkICYmIChsYXN0Rk1TdWJUcmVlLl9fZW5hYmxlZCB8fCBvbmx5TGFzdFNlZ21lbnQpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZm91bmRMYXN0Rk1TdWJUcmVlICYmIGxhc3RGTVN1YlRyZWUuX19lbmFibGVkO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBoYXNGTVNldHRpbmcoZm1QYXRoKSB7XG4gICAgY29uc3QgZm1TZXR0aW5nID0gdGhpcy5maW5kRk1TZXR0aW5nKGZtUGF0aCk7XG4gICAgcmV0dXJuIGZtU2V0dGluZyAmJiBmbVNldHRpbmcuX19lbmFibGVkICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBmaW5kRk1TZXR0aW5nKGZtUGF0aCkge1xuICAgIGNvbnN0IHNlZ21lbnRzID0gdGhpcy5fZ2V0UGF0aFNlZ21lbnRzKGZtUGF0aCk7XG4gICAgcmV0dXJuIHNlZ21lbnRzLnJlZHVjZSgoY3VycmVudEZNU2V0dGluZywgc2VnbWVudCkgPT4gY3VycmVudEZNU2V0dGluZyAmJiBjdXJyZW50Rk1TZXR0aW5nW3NlZ21lbnRdXG4gICAgICAsIHRoaXMuX2ZtVHJlZSB8fCB7fSk7XG4gIH1cblxuICBzZXRGTVNldHRpbmcoZm1QYXRoLCBlbmFibGVkKSB7XG4gICAgaWYgKHRoaXMuX2ZtVHJlZSkge1xuICAgICAgY29uc3Qgc2VnbWVudHMgPSB0aGlzLl9nZXRQYXRoU2VnbWVudHMoZm1QYXRoKTtcbiAgICAgIGNvbnN0IGxhc3RGTVN1YlRyZWUgPSBzZWdtZW50cy5yZWR1Y2UoKGN1cnJlbnRGTVRyZWUsIHNlZ21lbnQpID0+IHtcbiAgICAgICAgbGV0IHNlZ21lbnRGTSA9IGN1cnJlbnRGTVRyZWVbc2VnbWVudF07XG4gICAgICAgIGlmIChzZWdtZW50Rk0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHNlZ21lbnRGTSA9IHt9O1xuICAgICAgICAgIGN1cnJlbnRGTVRyZWVbc2VnbWVudF0gPSBzZWdtZW50Rk07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlZ21lbnRGTTtcbiAgICAgIH0sIHRoaXMuX2ZtVHJlZSk7XG4gICAgICBsYXN0Rk1TdWJUcmVlLl9fZW5hYmxlZCA9IGVuYWJsZWQ7XG4gICAgfVxuICB9XG5cbiAgX2dldFBhdGhTZWdtZW50cyhmbVBhdGgpIHtcbiAgICAvLyBpZ25vcmUgZmlyc3QgXCIvXCIgdG8gZXhjbHVkZSBlbXB0eSBzdHJpbmcgZnJvbSB0aGUgc3BsaXRcbiAgICByZXR1cm4gZm1QYXRoLnN1YnN0cmluZygxKS5zcGxpdCgnLycpO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBPdmVybGF5VHJpZ2dlciwgVG9vbHRpcCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmxldCBsb2dnZXIgPSBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUExhYmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZG9udFRyYW5zbGF0ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgbGFiZWxDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKiBkZWNvcmF0b3I6IFByb3BUeXBlcy5mdW5jLCAvLyBUT0RPOiBUbyBiZSBpbXBsZW1lbnRlZC4gKi9cbiAgICBzZXBhcmF0b3I6IFByb3BUeXBlcy5ib29sLFxuICAgIHRvb2x0aXA6IFByb3BUeXBlcy5zdHJpbmdcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IExvZ2dlciB9ID0gdGhpcy5wcm9wcztcbiAgICBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdBUCBMYWJlbCcpO1xuICAgIGxvZ2dlci5kZWJ1ZygnY29uc3RydWN0b3InKTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbGFiZWwgPSAodGhpcy5wcm9wcy5kb250VHJhbnNsYXRlID09PSB0cnVlID8gdGhpcy5wcm9wcy5sYWJlbCA6IHRyYW5zbGF0ZSh0aGlzLnByb3BzLmxhYmVsKSk7XG4gICAgY29uc3QgbGFiZWxDbGFzcyA9ICh0aGlzLnByb3BzLmxhYmVsQ2xhc3MgPyB0aGlzLnByb3BzLmxhYmVsQ2xhc3MgOiAnJyk7XG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17bGFiZWxDbGFzc30+PHNwYW4+e2xhYmVsfTwvc3Bhbj57dGhpcy5wcm9wcy5zZXBhcmF0b3IgPyA8aHIgLz4gOiAnJ308L2Rpdj4pO1xuICB9XG5cbiAgdG9vbHRpcCgpIHtcbiAgICBjb25zdCB7IHRvb2x0aXAsIGRvbnRUcmFuc2xhdGUsIHRyYW5zbGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gPFRvb2x0aXAgaWQ9XCJ0b29sdGlwXCI+e2RvbnRUcmFuc2xhdGUgPyB0b29sdGlwIDogdHJhbnNsYXRlKHRoaXMucHJvcHMudG9vbHRpcCl9PC9Ub29sdGlwPjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy50b29sdGlwKSB7XG4gICAgICByZXR1cm4gKDxPdmVybGF5VHJpZ2dlciBwbGFjZW1lbnQ9XCJyaWdodFwiIG92ZXJsYXk9e3RoaXMudG9vbHRpcCgpfT5cbiAgICAgICAge3RoaXMuZ2V0Q29udGVudCgpfVxuICAgICAgPC9PdmVybGF5VHJpZ2dlcj4pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRDb250ZW50KCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL0FjdGl2aXR5UHJldmlldy5jc3MnO1xuXG5sZXQgbG9nZ2VyID0gbnVsbDtcblxuLyoqXG4gKiBTaW1wbGUgRmllbGQgY29tcG9uZW50IHRoYXQgY29uc2lzdHMgb2YgYSBmaWVsZCB0aXRsZSBhbmQgZmllbGQgdmFsdWVcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG4gICAgaW5saW5lOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB1c2VJbm5lckhUTUw6IFByb3BUeXBlcy5ib29sLFxuICAgIGZpZWxkQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmllbGROYW1lQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmllbGRWYWx1ZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlcGFyYXRvcjogUHJvcFR5cGVzLmJvb2xcbiAgfTtcblxuICAvKipcbiAgICogR2V0cyBhbiBpbnN0YW5jZSBvZiBTaW1wbGUgRmllbGRcbiAgICogQHBhcmFtIHRybkxhYmVsIHRoZSBsYWJlbCB0byB0cmFuc2xhdGUgYW5kIHVzZSBhcyBhIHRpdGxlLiBUaGlzIGxhYmVsIGlzIGFsc28gdXNlZCBhcyB0aGUgY29tcG9uZW50IGtleS5cbiAgICogQHBhcmFtIHZhbHVlIHRoZSBmaWVsZCB2YWx1ZVxuICAgKiBAcGFyYW0gaW5saW5lIHNob3cgdGl0bGUgYW5kIHZhbHVlIGluIHRoZSBzYW1lIHJvdy5cbiAgICogQHBhcmFtIHNlcGFyYXRvciBhZGQgb3Igbm90IGFuIDxocj4gdGFnLlxuICAgKiBAcGFyYW0gbmFtZUNsYXNzIGNzcyBjbGFzcyBmb3IgdGhlIGZpZWxkIGxhYmVsXG4gICAqIEBwYXJhbSB2YWx1ZUNsYXNzIGNzcyBjbGFzcyBmb3IgdGhlIGZpZWxkIHZhbHVlXG4gICAqIEBwYXJhbSB0cmFuc2xhdGUgdGhlIHRyYW5zbGF0aW9uIGZ1bmN0aW9uXG4gICAqIEBwYXJhbSBsb2dnZXIgdGhlIExvZ2dlck1hbmFnZXJcbiAgICogQHJldHVybiB7U2ltcGxlRmllbGR9XG4gICAqL1xuICBzdGF0aWMgaW5zdGFuY2UodHJuTGFiZWwsIHZhbHVlLCBpbmxpbmUgPSBmYWxzZSwgc2VwYXJhdG9yID0gZmFsc2UsIG5hbWVDbGFzcywgdmFsdWVDbGFzcywgdHJhbnNsYXRlLCBsb2dnZXIpIHtcbiAgICByZXR1cm4gKDxBUEZpZWxkXG4gICAgICBrZXk9e3RybkxhYmVsfSB0aXRsZT17dHJhbnNsYXRlKHRybkxhYmVsKX0gdmFsdWU9e3ZhbHVlfSBpbmxpbmU9e2lubGluZX0gc2VwYXJhdG9yPXtzZXBhcmF0b3J9XG4gICAgICBmaWVsZE5hbWVDbGFzcz17bmFtZUNsYXNzfSBmaWVsZFZhbHVlQ2xhc3M9e3ZhbHVlQ2xhc3N9IHRyYW5zbGF0ZT17dHJhbnNsYXRlfSBMb2dnZXI9e2xvZ2dlcn0gLz4pO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBMb2dnZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgbG9nZ2VyID0gbmV3IExvZ2dlcignQVAgZmllbGQnKTtcbiAgICBsb2dnZXIubG9nKCdjb25zdHJ1Y3RvcicpO1xuICAgIHRoaXMudXNlU2VwYXJhdG9yID0gdGhpcy5wcm9wcy5zZXBhcmF0b3IgIT09IGZhbHNlO1xuICAgIHRoaXMuZGlzcGxheUNsYXNzID0gdGhpcy5wcm9wcy5maWVsZENsYXNzIHx8ICh0aGlzLnByb3BzLmlubGluZSA9PT0gdHJ1ZSA/IHN0eWxlcy5pbmxpbmUgOiBzdHlsZXMuYmxvY2spO1xuICB9XG5cbiAgX2dldFZhbHVlKCkge1xuICAgIGNvbnN0IHsgdHJhbnNsYXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBgJHt0aGlzLnByb3BzLmZpZWxkVmFsdWVDbGFzc30gJHt0aGlzLmRpc3BsYXlDbGFzc31gO1xuICAgIC8vIFRvIGhhbmRsZSBib29sZWFuIGZpZWxkcyB3ZSBkb250IHdhbnQgdG8gc2hvdyAnZmFsc2UnIGFzICdObyBEYXRhJy5cbiAgICBjb25zdCB2YWx1ZSA9ICh0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMucHJvcHMudmFsdWUgPT09IGZhbHNlKSA/IHRoaXMucHJvcHMudmFsdWUgOiB0cmFuc2xhdGUoJ05vIERhdGEnKTtcbiAgICBsZXQgZGlzcGxheVZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgaWYgKHZhbHVlWzBdIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgIGRpc3BsYXlWYWx1ZSA9IFtdO1xuICAgICAgICB2YWx1ZS5mb3JFYWNoKHYgPT4gZGlzcGxheVZhbHVlLnB1c2godikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGxheVZhbHVlID0gdmFsdWUuc29ydCgpXG4gICAgICAgICAgLmpvaW4oJywgJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgZGlzcGxheVZhbHVlID0gdmFsdWUgPT09IHRydWUgPyB0cmFuc2xhdGUoJ1llcycpIDogdHJhbnNsYXRlKCdObycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwbGF5VmFsdWUgPSAodGhpcy5wcm9wcy5pbmxpbmUgJiYgdGhpcy5wcm9wcy52YWx1ZSBpbnN0YW5jZW9mIFN0cmluZykgPyBgJHt2YWx1ZX0gYCA6IHZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy51c2VJbm5lckhUTUwpIHtcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkaXNwbGF5VmFsdWUgfX0gLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+e2Rpc3BsYXlWYWx1ZX08L2Rpdj47XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBgJHt0aGlzLnByb3BzLmZpZWxkTmFtZUNsYXNzfSAke3RoaXMuZGlzcGxheUNsYXNzfWA7XG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17dGhpcy5kaXNwbGF5Q2xhc3N9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9Pnt0aGlzLnByb3BzLnRpdGxlfTwvZGl2PlxuICAgICAge3RoaXMuX2dldFZhbHVlKCl9XG4gICAgICB7dGhpcy51c2VTZXBhcmF0b3IgPyA8aHIgLz4gOiAnJ31cbiAgICA8L2Rpdj4pO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vQWN0aXZpdHlQcmV2aWV3LmNzcyc7XG5pbXBvcnQgVUlVdGlscyBmcm9tICcuLi8uLi8uLi91dGlscy9VSVV0aWxzJztcblxubGV0IGxvZ2dlciA9IG51bGw7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBjb252ZXJ0aW5nIGNvbnRlbnQgdG8gdGFibGUgZm9ybVxuICogQGF1dGhvciBBbnlhIE1hcnNoYWxsXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxpZnkgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29udGVudDogUHJvcFR5cGVzLmFueSxcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMubnVtYmVyXG4gIH07XG5cbiAgLyoqXG4gICAqIFRha2VzIGFuIGFycmF5IGFuZCB0dXJucyBpdCBpbnRvIHRhYmxlIHJvd3MgYW5kIGNvbHVtbnMuXG4gICAqIEBhdXRob3IgQW55YSBNYXJzaGFsbFxuICAgKiBAcGFyYW0gY29udGVudCBjb250ZW50IGZvciB0YWJsZVxuICAgKiBAcGFyYW0gY29scyBudW1iZXIgb2YgY29sdW1uc1xuICAgKi9cbiAgc3RhdGljIGFkZFJvd3MoY29udGVudCwgY29scykge1xuICAgIC8vIFJlbW92ZSB1bmRlZmluZWQgY2VsbHMuXG4gICAgY29udGVudCA9IGNvbnRlbnQuZmlsdGVyKGMgPT4gYyk7XG4gICAgLy8gRGVjcmVhc2UgbnVtYmVyIG9mIGNvbHMgaWYgd2UgZG9udCBoYXZlIGVub3VnaCBlbGVtZW50cy5cbiAgICBpZiAoY29udGVudC5sZW5ndGggPCBjb2xzKSB7XG4gICAgICBjb2xzID0gY29udGVudC5sZW5ndGg7XG4gICAgfVxuICAgIGNvbnN0IHJvd3MgPSBNYXRoLmNlaWwoY29udGVudC5sZW5ndGggLyBjb2xzKTtcbiAgICBjb25zdCB0YWJsZUNvbnRlbnQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICBjb25zdCByb3dDb250ZW50ID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHM7IGorKykge1xuICAgICAgICByb3dDb250ZW50LnB1c2goPHRkIGtleT17VUlVdGlscy5zdHJpbmdUb1VuaXF1ZUlkKCl9Pntjb250ZW50LnBvcCgpfTwvdGQ+KTtcbiAgICAgIH1cbiAgICAgIHRhYmxlQ29udGVudC5wdXNoKDx0ciBrZXk9e1VJVXRpbHMuc3RyaW5nVG9VbmlxdWVJZCgpfT57cm93Q29udGVudH08L3RyPik7XG4gICAgfVxuICAgIHJldHVybiB0YWJsZUNvbnRlbnQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IExvZ2dlciB9ID0gdGhpcy5wcm9wcztcbiAgICBsb2dnZXIgPSBuZXcgTG9nZ2VyKCd0YWJsaWZ5Jyk7XG4gICAgbG9nZ2VyLmxvZygnY29uc3RydWN0b3InKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5wcm9wcy5jb2x1bW5zID49IHRoaXMucHJvcHMuY29udGVudC5sZW5ndGggPyB0aGlzLnByb3BzLmNvbnRlbnQubGVuZ3RoIDogdGhpcy5wcm9wcy5jb2x1bW5zO1xuICAgIGNvbnN0IGNlbGxXaWR0aCA9IGAkeygxMDAgLyBjb2x1bW5zKX0lYDtcbiAgICBjb25zdCBjZWxsd2lkdGhTdHlsZSA9IHtcbiAgICAgIHdpZHRoOiBjZWxsV2lkdGhcbiAgICB9O1xuICAgIGNvbnN0IHJvd3MgPSBNYXRoLmNlaWwodGhpcy5wcm9wcy5jb250ZW50Lmxlbmd0aCAvIGNvbHVtbnMpO1xuICAgIGNvbnN0IHRhYmxlQ29udGVudCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICBjb25zdCByb3dDb250ZW50ID0gW107XG4gICAgICByb3dDb250ZW50LnB1c2goPGRpdiBrZXk9e1VJVXRpbHMuc3RyaW5nVG9VbmlxdWVJZCgpfSBzdHlsZT17Y2VsbHdpZHRoU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50YWJsaWZ5X291dGVyX2NlbGx9PlxuICAgICAgICB7dGhpcy5wcm9wcy5jb250ZW50LnBvcCgpfTwvZGl2Pik7XG4gICAgICBmb3IgKGxldCBqID0gMTsgaiA8IHRoaXMucHJvcHMuY29sdW1ucyAmJiB0aGlzLnByb3BzLmNvbnRlbnQubGVuZ3RoID4gMDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IFVJVXRpbHMuc3RyaW5nVG9VbmlxdWVJZCgpO1xuICAgICAgICByb3dDb250ZW50LnB1c2goPGRpdiBrZXk9e2tleX0gc3R5bGU9e2NlbGx3aWR0aFN0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy50YWJsaWZ5X2lubmVyX2NlbGx9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNvbnRlbnQucG9wKCl9PC9kaXY+KTtcbiAgICAgIH1cbiAgICAgIHRhYmxlQ29udGVudC5wdXNoKDxkaXYga2V5PXtVSVV0aWxzLnN0cmluZ1RvVW5pcXVlSWQoKX0gY2xhc3NOYW1lPXtzdHlsZXMuZmxleH0+e3Jvd0NvbnRlbnR9PC9kaXY+KTtcbiAgICB9XG4gICAgcmV0dXJuICg8ZGl2PlxuICAgICAge3RhYmxlQ29udGVudH1cbiAgICA8L2Rpdj4pO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL0FjdGl2aXR5UHJldmlldy5jc3MnO1xuXG5sZXQgbG9nZ2VyID0gbnVsbDtcblxuLyoqXG4gKiBQZXJjZW50YWdlIEZpZWxkIGNvbXBvbmVudFxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUFBlcmNlbnRhZ2VGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICB0aXRsZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgTG9nZ2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHJhd051bWJlclRvRm9ybWF0dGVkU3RyaW5nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBMb2dnZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgbG9nZ2VyID0gbmV3IExvZ2dlcignQVAgcGVyY2VudGFnZSBmaWVsZCcpO1xuICAgIGxvZ2dlci5sb2coJ2NvbnN0cnVjdG9yJyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByYXdOdW1iZXJUb0Zvcm1hdHRlZFN0cmluZyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBwZXJjZW50YWdlID0gdGhpcy5wcm9wcy52YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMucHJvcHMudmFsdWUgIT09IG51bGxcbiAgICAgID8gYCR7cmF3TnVtYmVyVG9Gb3JtYXR0ZWRTdHJpbmcodGhpcy5wcm9wcy52YWx1ZSwgdHJ1ZSl9JWAgOiBudWxsO1xuICAgIHJldHVybiAoPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17dGhpcy5wcm9wcy50aXRsZUNsYXNzfT57dGhpcy5wcm9wcy50aXRsZX0gPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHt0aGlzLnByb3BzLnZhbHVlQ2xhc3N9ICR7c3R5bGVzLmFsaWduUmlnaHR9YH0+e3BlcmNlbnRhZ2V9PC9zcGFuPlxuICAgIDwvZGl2Pik7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEFQRmllbGQgZnJvbSAnLi9BUEZpZWxkLmpzeCc7XG5pbXBvcnQgQVBQZXJjZW50YWdlRmllbGQgZnJvbSAnLi9BUFBlcmNlbnRhZ2VGaWVsZC5qc3gnO1xuaW1wb3J0IFRhYmxpZnkgZnJvbSAnLi9UYWJsaWZ5LmpzeCc7XG5pbXBvcnQgQWN0aXZpdHlDb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy91dGlsL0FjdGl2aXR5Q29uc3RhbnRzJztcbmltcG9ydCBGaWVsZHNNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvZmllbGQvRmllbGRzTWFuYWdlcic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL0FjdGl2aXR5UHJldmlldy5jc3MnO1xuaW1wb3J0IEZlYXR1cmVNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvdXRpbC9GZWF0dXJlTWFuYWdlcic7XG5pbXBvcnQgUG9zc2libGVWYWx1ZXNNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvZmllbGQvUG9zc2libGVWYWx1ZXNNYW5hZ2VyJztcbmltcG9ydCBVSVV0aWxzIGZyb20gJy4uLy4uLy4uL3V0aWxzL1VJVXRpbHMnO1xuXG5sZXQgbG9nZ2VyID0gbnVsbDtcblxuLyoqXG4gKiBBY3Rpdml0eSBQcmV2aWV3IFBlcmNlbnRhZ2UgTGlzdCB0eXBlIHNlY3Rpb25cbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuY29uc3QgQVBQZXJjZW50YWdlTGlzdCA9IChsaXN0RmllbGQsIHZhbHVlRmllbGQsIHBlcmNlbnRhZ2VGaWVsZCwgbGlzdFRpdGxlID0gbnVsbCkgPT4gY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFjdGl2aXR5OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgYWN0aXZpdHlGaWVsZHNNYW5hZ2VyOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihGaWVsZHNNYW5hZ2VyKS5pc1JlcXVpcmVkLFxuICAgIGZpZWxkTmFtZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZpZWxkVmFsdWVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwZXJjZW50VGl0bGVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwZXJjZW50VmFsdWVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0YWJsaWZ5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGZtUGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBnZXRJdGVtVGl0bGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIExvZ2dlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB0cmFuc2xhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IExvZ2dlciB9ID0gdGhpcy5wcm9wcztcbiAgICBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdBUCBwZXJjZW50YWdlIGxpc3QnKTtcbiAgICBsb2dnZXIuZGVidWcoJ2NvbnN0cnVjdG9yJyk7XG4gIH1cblxuICBnZXRJdGVtVGl0bGUoaXRlbSkge1xuICAgIGlmICh0aGlzLnByb3BzLmdldEl0ZW1UaXRsZSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZ2V0SXRlbVRpdGxlKGl0ZW0pO1xuICAgIH1cbiAgICBjb25zdCBvYmogPSBpdGVtW3ZhbHVlRmllbGRdO1xuICAgIHJldHVybiBvYmpbQWN0aXZpdHlDb25zdGFudHMuSElFUkFSQ0hJQ0FMX1ZBTFVFXSA/XG4gICAgICBvYmpbQWN0aXZpdHlDb25zdGFudHMuSElFUkFSQ0hJQ0FMX1ZBTFVFXSA6XG4gICAgICBQb3NzaWJsZVZhbHVlc01hbmFnZXIuZ2V0T3B0aW9uVHJhbnNsYXRpb24ob2JqKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0cmFuc2xhdGUsIGFjdGl2aXR5RmllbGRzTWFuYWdlciwgcGVyY2VudFRpdGxlQ2xhc3MsIGZtUGF0aCwgYWN0aXZpdHksIGNvbHVtbnMsIHRhYmxpZnlcbiAgICAgICwgcGVyY2VudFZhbHVlQ2xhc3MsIGZpZWxkTmFtZUNsYXNzLCBmaWVsZFZhbHVlQ2xhc3MsIExvZ2dlciwgcmF3TnVtYmVyVG9Gb3JtYXR0ZWRTdHJpbmdcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0aXRsZSA9IGxpc3RUaXRsZSA/IHRyYW5zbGF0ZShsaXN0VGl0bGUpIDogbnVsbDtcbiAgICBsZXQgaXRlbXMgPSBhY3Rpdml0eVtsaXN0RmllbGRdO1xuICAgIGxldCBjb250ZW50ID0gbnVsbDtcbiAgICBsZXQgaXNMaXN0RW5hYmxlZCA9IGFjdGl2aXR5RmllbGRzTWFuYWdlci5pc0ZpZWxkUGF0aEVuYWJsZWQobGlzdEZpZWxkKSA9PT0gdHJ1ZTtcbiAgICBpZiAoZm1QYXRoKSB7XG4gICAgICBpc0xpc3RFbmFibGVkID0gRmVhdHVyZU1hbmFnZXIuaXNGTVNldHRpbmdFbmFibGVkKGZtUGF0aCkgPyBpc0xpc3RFbmFibGVkIDogZmFsc2U7XG4gICAgfVxuICAgIGlmIChpc0xpc3RFbmFibGVkKSB7XG4gICAgICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIGl0ZW1zID0gaXRlbXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgICBpdGVtVGl0bGU6IHRoaXMuZ2V0SXRlbVRpdGxlKGl0ZW0pLFxuICAgICAgICAgIHBlcmNlbnRhZ2U6IGl0ZW1bcGVyY2VudGFnZUZpZWxkXVxuICAgICAgICB9KSlcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5pdGVtVGl0bGUubG9jYWxlQ29tcGFyZShiLml0ZW1UaXRsZSkpO1xuICAgICAgICBjb250ZW50ID0gaXRlbXMubWFwKCh7IGl0ZW1UaXRsZSwgcGVyY2VudGFnZSB9KSA9PlxuICAgICAgICAgIDxBUFBlcmNlbnRhZ2VGaWVsZFxuICAgICAgICAgICAga2V5PXtVSVV0aWxzLnN0cmluZ1RvVW5pcXVlSWQoaXRlbVRpdGxlKX0gdGl0bGU9e2l0ZW1UaXRsZX0gdmFsdWU9e3BlcmNlbnRhZ2V9XG4gICAgICAgICAgICB0aXRsZUNsYXNzPXtwZXJjZW50VGl0bGVDbGFzc30gdmFsdWVDbGFzcz17cGVyY2VudFZhbHVlQ2xhc3N9IHRyYW5zbGF0ZT17dHJhbnNsYXRlfVxuICAgICAgICAgICAgTG9nZ2VyPXtMb2dnZXJ9IHJhd051bWJlclRvRm9ybWF0dGVkU3RyaW5nPXtyYXdOdW1iZXJUb0Zvcm1hdHRlZFN0cmluZ30gLz5cbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHRhYmxpZnkpIHtcbiAgICAgICAgICBjb250ZW50ID0gPFRhYmxpZnkgY29udGVudD17Y29udGVudH0gY29sdW1ucz17Y29sdW1uc30gTG9nZ2VyPXtMb2dnZXJ9IC8+O1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQgPSAoPEFQRmllbGRcbiAgICAgICAgICBrZXk9e2xpc3RGaWVsZH0gdGl0bGU9e3RpdGxlfSB2YWx1ZT17Y29udGVudH0gc2VwYXJhdG9yPXtmYWxzZX0gaW5saW5lPXt0YWJsaWZ5ID09PSB0cnVlfVxuICAgICAgICAgIGZpZWxkTmFtZUNsYXNzPXtmaWVsZE5hbWVDbGFzc30gZmllbGRWYWx1ZUNsYXNzPXtmaWVsZFZhbHVlQ2xhc3N9XG4gICAgICAgICAgdHJhbnNsYXRlPXt0cmFuc2xhdGV9IExvZ2dlcj17TG9nZ2VyfSAvPik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZW50ID0gKDxBUEZpZWxkXG4gICAgICAgICAga2V5PXtsaXN0RmllbGR9IHRpdGxlPXt0aXRsZX0gdmFsdWU9e3RyYW5zbGF0ZSgnTm8gRGF0YScpfSBzZXBhcmF0b3I9e2ZhbHNlfVxuICAgICAgICAgIGlubGluZT17dGFibGlmeSA9PT0gdHJ1ZX1cbiAgICAgICAgICBmaWVsZE5hbWVDbGFzcz17ZmllbGROYW1lQ2xhc3N9IGZpZWxkVmFsdWVDbGFzcz17c3R5bGVzLm5vZGF0YX1cbiAgICAgICAgICB0cmFuc2xhdGU9e3RyYW5zbGF0ZX0gTG9nZ2VyPXtMb2dnZXJ9IC8+KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgQVBQZXJjZW50YWdlTGlzdDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEZpZWxkUGF0aENvbnN0YW50cyBmcm9tICcuLi8uLi8uLi91dGlscy9GaWVsZFBhdGhDb25zdGFudHMnO1xuaW1wb3J0IEZpZWxkc01hbmFnZXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9maWVsZC9GaWVsZHNNYW5hZ2VyJztcbmltcG9ydCBGZWF0dXJlTWFuYWdlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL3V0aWwvRmVhdHVyZU1hbmFnZXInO1xuaW1wb3J0IFBvc3NpYmxlVmFsdWVzTWFuYWdlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2ZpZWxkL1Bvc3NpYmxlVmFsdWVzTWFuYWdlcic7XG5pbXBvcnQgQVBGaWVsZCBmcm9tICcuLi9jb21wb25lbnRzL0FQRmllbGQuanN4JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vQWN0aXZpdHlQcmV2aWV3LmNzcyc7XG5pbXBvcnQgVUlVdGlscyBmcm9tICcuLi8uLi8uLi91dGlscy9VSVV0aWxzJztcblxubGV0IGxvZ2dlciA9IG51bGw7XG5cbi8qKlxuICogR2VuZXJpYyBhY3Rpdml0eSBwcmV2aWV3IHNlY3Rpb24gY2xhc3NcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuLy8gY29uc3QgU2VjdGlvbiA9IChDb21wb3NlZFNlY3Rpb24sIFNlY3Rpb25UaXRsZSA9IG51bGwsIHVzZUVuY2Fwc3VsYXRlSGVhZGVyID0gdHJ1ZSwgc0lEKSA9PiBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG5jb25zdCBTZWN0aW9uID0gKENvbXBvc2VkU2VjdGlvbiwgcGFyYW1zKSA9PiBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGl0bGVEZXRhaWxzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgc2VjdGlvblBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGl0bGVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBncm91cENsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbXBvc2VkQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmllbGROYW1lQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmllbGRWYWx1ZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZtUGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmaWVsZENsYXNzOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH07XG5cbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBhY3Rpdml0eTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGFjdGl2aXR5RmllbGRzTWFuYWdlcjogUHJvcFR5cGVzLmluc3RhbmNlT2YoRmllbGRzTWFuYWdlcikuaXNSZXF1aXJlZCxcbiAgICBjb250YWN0RmllbGRzTWFuYWdlcjogUHJvcFR5cGVzLmluc3RhbmNlT2YoRmllbGRzTWFuYWdlciksXG4gICAgY29udGFjdHNCeUlkczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGFjdGl2aXR5RnVuZGluZ1RvdGFsczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLCAvLyBXaWxsIGNoYW5nZSB0aGlzIGlmIEFjdGl2aXR5RnVuZGluZ1RvdGFscyBpcyBtaWdyYXRlZFxuICAgIC8vIFByb3BUeXBlcy5pbnN0YW5jZU9mKHBhcmFtcy5BY3Rpdml0eUZ1bmRpbmdUb3RhbHMpLmlzUmVxdWlyZWQsXG4gICAgYWN0aXZpdHlXb3Jrc3BhY2U6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBhY3Rpdml0eVdTTWFuYWdlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHJlc291cmNlUmVkdWNlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIExvZ2dlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdHJhbnNsYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBEYXRlVXRpbHM6IFByb3BUeXBlcy5mdW5jXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0aXRsZUNsYXNzOiBzdHlsZXMuc2VjdGlvbl90aXRsZV9jbGFzcyxcbiAgICBncm91cENsYXNzOiBzdHlsZXMuc2VjdGlvbl9ncm91cF9jbGFzcyxcbiAgICBmaWVsZE5hbWVDbGFzczogc3R5bGVzLnNlY3Rpb25fZmllbGRfbmFtZSxcbiAgICBmaWVsZFZhbHVlQ2xhc3M6IHN0eWxlcy5zZWN0aW9uX2ZpZWxkX3ZhbHVlXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgaWYgKHRoaXMuY29udGV4dCkge1xuICAgICAgcGFyYW1zLkxvZ2dlciA9IHRoaXMuY29udGV4dC5Mb2dnZXI7XG4gICAgICBwYXJhbXMuRGF0ZVV0aWxzID0gdGhpcy5jb250ZXh0LkRhdGVVdGlscztcbiAgICAgIHBhcmFtcy50cmFuc2xhdGUgPSB0aGlzLmNvbnRleHQudHJhbnNsYXRlO1xuICAgIH1cbiAgICBwYXJhbXMudXNlRW5jYXBzdWxhdGVIZWFkZXIgPSAhcGFyYW1zLnVzZUVuY2Fwc3VsYXRlSGVhZGVyID8gdHJ1ZSA6IHBhcmFtcy51c2VFbmNhcHN1bGF0ZUhlYWRlcjtcbiAgICBsb2dnZXIgPSBuZXcgcGFyYW1zLkxvZ2dlcignQVAgc2VjdGlvbicpO1xuICAgIGxvZ2dlci5kZWJ1ZygnY29uc3RydWN0b3InKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIGZpZWxkIGRhdGEgaWYgaXQgaXMgZW5hYmxlZCBpbiBGTS4gSWYgcmVuYWJsZWQsIGJ1dCB2YWx1ZSBpcyBub3QgYXZhaWxhYmxlLCB0aGVuIGl0IHdpbGwgbm90IGJlIHJlbmRlcmVkLFxuICAgKiB1bmxlc3MgaXQgaXMgcmVxdWVzdGVkIHZpYSBzaG93SWZOb3RBdmFpbGFibGUgZmxhZy5cbiAgICogQHBhcmFtIHBhdGggZmllbGQgcGF0aFxuICAgKiBAcGFyYW0gc2hvd0lmTm90QXZhaWxhYmxlIGZsYWcgdG8gZm9yY2libHkgZGlzcGxheSB0aGUgZmllbGQgd2hlbiBubyB2YWx1ZSBpcyBwcm92aWRlZFxuICAgKiBAcGFyYW0gTkFPcHRpb25zIG9wdGlvbmFsIHNldCBvZiB2YWx1ZXMgdGhhdCBzaG91bGQgYmUgdHJlYXRlZCBhcyB1bmRlZmluZWRcbiAgICogQHBhcmFtIGlubGluZSBvcHRpb25hbCBmbGFnIHRvIHJlbmRlciBuYW1lIGFuZCB2YWx1ZXMgb24gdGhlIHNhbWUgbGluZVxuICAgKiBAcGFyYW0gcGFyZW50IG9wdGlvbmFsIG9iamVjdCB3aGVyZSB3ZSBsb29rIGZvciB0aGUgcGF0aCAoaW5zdGVhZCBvZiB0aGUgYWN0aXZpdHkgcm9vdCkuXG4gICAqIEBwYXJhbSBmaWVsZHNNYW5hZ2VyIChvcHRpb25hbCkgY3VzdG9tIGZpZWxkcyBtYW5hZ2VyLiBBY3Rpdml0eSBGaWVsZHMgTWFuYWdlciB1c2VkIGJ5IGRlZmF1bHQuXG4gICAqIEByZXR1cm4ge251bGx8QVBGaWVsZH1cbiAgICovXG4gIGJ1aWxkU2ltcGxlRmllbGQocGF0aCwgc2hvd0lmTm90QXZhaWxhYmxlLCBOQU9wdGlvbnM6IFNldCwgaW5saW5lID0gZmFsc2UsIHBhcmVudCA9IG51bGwsIGZpZWxkc01hbmFnZXIgPSBudWxsXG4gICAgLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgb3B0aW9uc18gPSBvcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IGZtUGF0aCA9IEZpZWxkUGF0aENvbnN0YW50cy5BQ1RJVklUWV9GSUVMRFNfRk1fUEFUSFtwYXRoXTtcbiAgICBmaWVsZHNNYW5hZ2VyID0gZmllbGRzTWFuYWdlciB8fCB0aGlzLmNvbnRleHQuYWN0aXZpdHlGaWVsZHNNYW5hZ2VyO1xuICAgIGlmIChmaWVsZHNNYW5hZ2VyLmlzRmllbGRQYXRoRW5hYmxlZChwYXRoKVxuICAgICAgJiYgKCFmbVBhdGggfHwgRmVhdHVyZU1hbmFnZXIuaXNGTVNldHRpbmdFbmFibGVkKGZtUGF0aCwgZmFsc2UpKSkge1xuICAgICAgY29uc3QgdGl0bGUgPSAob3B0aW9uc18ubm9UaXRsZSA/ICcnIDogZmllbGRzTWFuYWdlci5nZXRGaWVsZExhYmVsVHJhbnNsYXRpb24ocGF0aCkpO1xuICAgICAgbGV0IHZhbHVlUGF0aCA9IHBhdGg7XG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIGNvbnN0IGZpZWxkUGF0aFBhcnRzID0gcGF0aC5zcGxpdCgnficpO1xuICAgICAgICB2YWx1ZVBhdGggPSBmaWVsZFBhdGhQYXJ0c1tmaWVsZFBhdGhQYXJ0cy5sZW5ndGggLSAxXTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFsdGVybmF0ZVBhdGggPSBGaWVsZFBhdGhDb25zdGFudHMuQUxURVJOQVRFX1ZBTFVFX1BBVEhbdmFsdWVQYXRoXTtcbiAgICAgIGxldCB2YWx1ZSA9IGZpZWxkc01hbmFnZXIuZ2V0VmFsdWUocGFyZW50IHx8IHRoaXMuY29udGV4dC5hY3Rpdml0eSwgdmFsdWVQYXRoLFxuICAgICAgICBQb3NzaWJsZVZhbHVlc01hbmFnZXIuZ2V0T3B0aW9uVHJhbnNsYXRpb24pO1xuICAgICAgaWYgKCh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSAmJiBhbHRlcm5hdGVQYXRoKSB7XG4gICAgICAgIHZhbHVlID0gZmllbGRzTWFuYWdlci5nZXRWYWx1ZSh0aGlzLmNvbnRleHQuYWN0aXZpdHksIGFsdGVybmF0ZVBhdGgsXG4gICAgICAgICAgUG9zc2libGVWYWx1ZXNNYW5hZ2VyLmdldE9wdGlvblRyYW5zbGF0aW9uKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZpZWxkRGVmID0gZmllbGRzTWFuYWdlci5nZXRGaWVsZERlZihwYXRoKTtcbiAgICAgIGlmIChmaWVsZERlZi5maWVsZF90eXBlID09PSBGaWVsZFBhdGhDb25zdGFudHMuRklFTERfVFlQRV9EQVRFKSB7XG4gICAgICAgIHZhbHVlID0gcGFyYW1zLkRhdGVVdGlscy5jcmVhdGVGb3JtYXR0ZWREYXRlKHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoZmllbGREZWYuZmllbGRfdHlwZSA9PT0gRmllbGRQYXRoQ29uc3RhbnRzLkZJRUxEX1RZUEVfVElNRVNUQU1QKSB7XG4gICAgICAgIC8vIG1hdGNoaW5nIEFQIG9ubGluZSB0byBmb3JtYXQgYXMgZGF0ZSBmb3Igbm93XG4gICAgICAgIHZhbHVlID0gcGFyYW1zLkRhdGVVdGlscy5jcmVhdGVGb3JtYXR0ZWREYXRlKHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgIXZhbHVlLmxlbmd0aCkge1xuICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgICB2YWx1ZSA9IE5BT3B0aW9ucyAmJiBOQU9wdGlvbnMuaGFzKHZhbHVlKSA/IG51bGwgOiB2YWx1ZTtcblxuICAgICAgY29uc3QgcmUgPSAvXlxccz8kLzsgLy8gY2hlY2sgZm9yIHdoaXRlc3BhY2VcbiAgICAgIGlmIChyZS50ZXN0KHZhbHVlKSkgdmFsdWUgPSB2YWx1ZS50cmltKCk7IC8vIGNoZWNrIGZvciB3aGl0ZXNwYWNlXG4gICAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHZhbHVlID0gcGFyYW1zLnRyYW5zbGF0ZSgnTm8gRGF0YScpO1xuICAgICAgfVxuICAgICAgaWYgKHNob3dJZk5vdEF2YWlsYWJsZSA9PT0gdHJ1ZSB8fCAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgY29uc3QgdXNlSW5uZXJIVE1MID0gRmllbGRQYXRoQ29uc3RhbnRzLlJJQ0hfVEVYVF9GSUVMRFMuaGFzKHBhdGgpO1xuICAgICAgICByZXR1cm4gKDxBUEZpZWxkXG4gICAgICAgICAga2V5PXtVSVV0aWxzLnN0cmluZ1RvVW5pcXVlSWQocGF0aCl9IHRpdGxlPXt0aXRsZX0gdmFsdWU9e3ZhbHVlfSB1c2VJbm5lckhUTUw9e3VzZUlubmVySFRNTH1cbiAgICAgICAgICBpbmxpbmU9e2lubGluZX1cbiAgICAgICAgICBzZXBhcmF0b3I9e2ZhbHNlfVxuICAgICAgICAgIGZpZWxkQ2xhc3M9e29wdGlvbnNfLmZpZWxkQ2xhc3MgfHwgdGhpcy5wcm9wcy5maWVsZENsYXNzfVxuICAgICAgICAgIGZpZWxkTmFtZUNsYXNzPXt0aGlzLnByb3BzLmZpZWxkTmFtZUNsYXNzfVxuICAgICAgICAgIGZpZWxkVmFsdWVDbGFzcz17b3B0aW9uc18uZmllbGRWYWx1ZUNsYXNzIHx8IHRoaXMucHJvcHMuZmllbGRWYWx1ZUNsYXNzfVxuICAgICAgICAgIHRyYW5zbGF0ZT17cGFyYW1zLnRyYW5zbGF0ZX0gTG9nZ2VyPXtwYXJhbXMuTG9nZ2VyfSAvPik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLnNlY3Rpb25QYXRoICYmICF0aGlzLmNvbnRleHQuYWN0aXZpdHlGaWVsZHNNYW5hZ2VyLmlzRmllbGRQYXRoRW5hYmxlZCh0aGlzLnByb3BzLnNlY3Rpb25QYXRoKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmZtUGF0aCAmJiAhRmVhdHVyZU1hbmFnZXIuaXNGTVNldHRpbmdFbmFibGVkKHRoaXMucHJvcHMuZm1QYXRoKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGNvbXBvc2VkU2VjdGlvbiA9ICg8Q29tcG9zZWRTZWN0aW9uXG4gICAgICB7Li4udGhpcy5wcm9wc30gey4uLnRoaXMuc3RhdGV9IHsuLi50aGlzLmNvbnRleHR9IGJ1aWxkU2ltcGxlRmllbGQ9e3RoaXMuYnVpbGRTaW1wbGVGaWVsZC5iaW5kKHRoaXMpfSAvPik7XG4gICAgaWYgKHBhcmFtcy51c2VFbmNhcHN1bGF0ZUhlYWRlciA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBjb21wb3NlZFNlY3Rpb247XG4gICAgfVxuICAgIC8vIFRPRE8gaXRlcmF0aW9uIDIrIHNlY3Rpb24gdG9nZ2xlIChUREMgYmFzZWQgb24gZGVzZ2luICsgVkcpXG4gICAgcmV0dXJuICg8ZGl2IGtleT17cGFyYW1zLlNlY3Rpb25UaXRsZX0gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmdyb3VwQ2xhc3N9IGlkPXtwYXJhbXMuc0lEfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnRpdGxlQ2xhc3N9PlxuICAgICAgICA8c3Bhbj57cGFyYW1zLnRyYW5zbGF0ZShwYXJhbXMuU2VjdGlvblRpdGxlKX0gPC9zcGFuPjxzcGFuPnt0aGlzLnByb3BzLnRpdGxlRGV0YWlsc308L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNvbXBvc2VkQ2xhc3N9PlxuICAgICAgICB7Y29tcG9zZWRTZWN0aW9ufVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEFjdGl2aXR5Q29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvdXRpbC9BY3Rpdml0eUNvbnN0YW50cyc7XG5pbXBvcnQgRmVhdHVyZU1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy91dGlsL0ZlYXR1cmVNYW5hZ2VyJztcbmltcG9ydCBWYWx1ZUNvbnN0YW50cyBmcm9tICcuLi8uLi8uLi91dGlscy9WYWx1ZUNvbnN0YW50cyc7XG5pbXBvcnQgRmVhdHVyZU1hbmFnZXJDb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy91dGlsL0ZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzJztcbmltcG9ydCBGaWVsZFBhdGhDb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvRmllbGRQYXRoQ29uc3RhbnRzJztcblxuaW1wb3J0IEZpZWxkc01hbmFnZXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9maWVsZC9GaWVsZHNNYW5hZ2VyJztcbmltcG9ydCBQb3NzaWJsZVZhbHVlc01hbmFnZXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9maWVsZC9Qb3NzaWJsZVZhbHVlc01hbmFnZXInO1xuaW1wb3J0IEFQRmllbGQgZnJvbSAnLi4vY29tcG9uZW50cy9BUEZpZWxkLmpzeCc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24uanN4JztcblxuXG5sZXQgbG9nZ2VyID0gbnVsbDtcblxuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuXG4vKipcbiAqIEZ1bmRpbmcgVG90YWxzIFN1bW1hcnkgc2VjdGlvblxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5jbGFzcyBGdW5kaW5nU3VtbWFyeSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWN0aXZpdHlGaWVsZHNNYW5hZ2VyOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihGaWVsZHNNYW5hZ2VyKS5pc1JlcXVpcmVkLFxuICAgIGFjdGl2aXR5RnVuZGluZ1RvdGFsczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLCAvLyBQcm9wVHlwZXMuaW5zdGFuY2VPZihBY3Rpdml0eUZ1bmRpbmdUb3RhbHMpLmlzUmVxdWlyZWQsXG4gICAgZmllbGROYW1lQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmllbGRWYWx1ZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIExvZ2dlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB0cmFuc2xhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgRGF0ZVV0aWxzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBMb2dnZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgbG9nZ2VyID0gbmV3IExvZ2dlcignRnVuZGluZyBzdW1tYXJ5Jyk7XG4gICAgbG9nZ2VyLmRlYnVnKCdjb25zdHJ1Y3RvcicpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkcyBcIkZ1bmRpbmcgSW5mb3JtYXRpb25cIiBzZWN0aW9uIGJ5IGZvbGxvd2luZyBBTVAgQWN0aXZpdHkgUHJldmlldyBydWxlc1xuICAgKiBAcmV0dXJuIHtTZWN0aW9ufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2J1aWxkRnVuZGluZ0luZm9ybWF0aW9uKCkge1xuICAgIGNvbnN0IG1lYXN1cmVzVG90YWxzID0ge307XG4gICAgY29uc3QgeyBhY3Rpdml0eUZpZWxkc01hbmFnZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGFjRW5hYmxlZCA9IGZhbHNlO1xuICAgIGxldCBhZEVuYWJsZWQgPSBmYWxzZTtcbiAgICAvLyBDb21taXRtZW50cywgRGlzYnVyc2VtZW50cywgRXhwZW5kaXR1cmVzXG4gICAgRmllbGRQYXRoQ29uc3RhbnRzLlRSQU5TQUNUSU9OX1RZUEVTLmZvckVhY2godHJuVHlwZSA9PiB7XG4gICAgICBpZiAoYWN0aXZpdHlGaWVsZHNNYW5hZ2VyLmlzRmllbGRQYXRoQnlQYXJ0c0VuYWJsZWQoQWN0aXZpdHlDb25zdGFudHMuRlVORElOR1MsIHRyblR5cGUpKSB7XG4gICAgICAgIGNvbnN0IHRybkFkak9wdFBhdGggPSBgJHtBY3Rpdml0eUNvbnN0YW50cy5GVU5ESU5HU31+JHt0cm5UeXBlfX4ke0FjdGl2aXR5Q29uc3RhbnRzLkFESlVTVE1FTlRfVFlQRX1gO1xuICAgICAgICBjb25zdCBhdE9wdGlvbnMgPSBhY3Rpdml0eUZpZWxkc01hbmFnZXIuZ2V0UG9zc2libGVWYWx1ZXNPcHRpb25zKHRybkFkak9wdFBhdGgpO1xuICAgICAgICBhY0VuYWJsZWQgPSBhY0VuYWJsZWQgfHxcbiAgICAgICAgICAodHJuVHlwZSA9PT0gQWN0aXZpdHlDb25zdGFudHMuQ09NTUlUTUVOVFMgJiYgISFhdE9wdGlvbnMuZmluZChvID0+IG8udmFsdWUgPT09IFZhbHVlQ29uc3RhbnRzLkFDVFVBTCkpO1xuICAgICAgICBhZEVuYWJsZWQgPSBhZEVuYWJsZWQgfHxcbiAgICAgICAgICAodHJuVHlwZSA9PT0gQWN0aXZpdHlDb25zdGFudHMuRElTQlVSU0VNRU5UUyAmJiAhIWF0T3B0aW9ucy5maW5kKG8gPT4gby52YWx1ZSA9PT0gVmFsdWVDb25zdGFudHMuQUNUVUFMKSk7XG4gICAgICAgIC8vIEFjdHVhbCwgUGxhbm5lZFxuICAgICAgICBhdE9wdGlvbnMuZm9yRWFjaChhZGpUeXBlID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucHJvcHMuYWN0aXZpdHlGdW5kaW5nVG90YWxzLmdldFRvdGFscyhhZGpUeXBlLmlkLCB0cm5UeXBlLCB7fSk7XG4gICAgICAgICAgbWVhc3VyZXNUb3RhbHNbYCR7YWRqVHlwZS52YWx1ZX0gJHt0cm5UeXBlfWBdID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIE90aGVyIG1lYXN1cmVzOiBcIlVuYWxsb2NhdGVkIERpc2J1cnNlbWVudHNcIi5cbiAgICBjb25zdCBhZGpUeXBlQWN0dWFsVHJuID0gdGhpcy5wcm9wcy5hY3Rpdml0eUZpZWxkc01hbmFnZXIuZ2V0VmFsdWUoRmllbGRQYXRoQ29uc3RhbnRzLkRJU0JVUlNFTUVOVFNfUEFUSCxcbiAgICAgIFZhbHVlQ29uc3RhbnRzLkFDVFVBTCxcbiAgICAgIFBvc3NpYmxlVmFsdWVzTWFuYWdlci5nZXRPcHRpb25UcmFuc2xhdGlvbik7XG4gICAgY29uc3QgZXhwZW5kaXR1cmVzQXJlRW5hYmxlZCA9IGFjdGl2aXR5RmllbGRzTWFuYWdlci5pc0ZpZWxkUGF0aEJ5UGFydHNFbmFibGVkKEFjdGl2aXR5Q29uc3RhbnRzLkZVTkRJTkdTLFxuICAgICAgQWN0aXZpdHlDb25zdGFudHMuRVhQRU5ESVRVUkVTKTtcbiAgICBpZiAoYWRqVHlwZUFjdHVhbFRybiAmJiBleHBlbmRpdHVyZXNBcmVFbmFibGVkKSB7XG4gICAgICBjb25zdCB1YiA9IFZhbHVlQ29uc3RhbnRzLlVOQUxMT0NBVEVEX0RJU0JVUlNFTUVOVFM7XG4gICAgICBtZWFzdXJlc1RvdGFsc1t1Yl0gPSB0aGlzLnByb3BzLmFjdGl2aXR5RnVuZGluZ1RvdGFscy5nZXRUb3RhbHModWIsIHt9KTtcbiAgICB9XG4gICAgLy8gT3RoZXIgbWVhc3VyZXM6IFwiVG90YWwgTVRFRiBQcm9qZWN0aW9uc1wiLlxuICAgIGlmIChGZWF0dXJlTWFuYWdlci5pc0ZNU2V0dGluZ0VuYWJsZWQoRmVhdHVyZU1hbmFnZXJDb25zdGFudHMuTVRFRl9QUk9KRUNUSU9OUykpIHtcbiAgICAgIG1lYXN1cmVzVG90YWxzW1ZhbHVlQ29uc3RhbnRzLk1URUZfUFJPSkVDVElPTlNdID0gdGhpcy5wcm9wcy5hY3Rpdml0eUZ1bmRpbmdUb3RhbHMuZ2V0TVRFRlRvdGFsKCk7XG4gICAgfVxuICAgIC8vIE90aGVyIG1lYXN1cmVzOiBcIkRlbGl2ZXJ5IHJhdGVcIi5cbiAgICBpZiAoRmVhdHVyZU1hbmFnZXIuaXNGTVNldHRpbmdFbmFibGVkKEZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzLkFDVElWSVRZX0RFTElWRVJZX1JBVEUpKSB7XG4gICAgICBjb25zdCBhY3R1YWxDb21taXRtZW50cyA9IG1lYXN1cmVzVG90YWxzW2Ake1ZhbHVlQ29uc3RhbnRzLkFDVFVBTH0gJHtBY3Rpdml0eUNvbnN0YW50cy5DT01NSVRNRU5UU31gXTtcbiAgICAgIGNvbnN0IGFjdHVhbERpc2J1cnNlbWVudHMgPSBtZWFzdXJlc1RvdGFsc1tgJHtWYWx1ZUNvbnN0YW50cy5BQ1RVQUx9ICR7QWN0aXZpdHlDb25zdGFudHMuRElTQlVSU0VNRU5UU31gXTtcbiAgICAgIGxldCB2YWx1ZSA9IDA7XG4gICAgICBpZiAoYWN0dWFsQ29tbWl0bWVudHMgJiYgYWN0dWFsRGlzYnVyc2VtZW50cyAmJiBhY0VuYWJsZWQgJiYgYWRFbmFibGVkKSB7XG4gICAgICAgIHZhbHVlID0gKGFjdHVhbERpc2J1cnNlbWVudHMgLyBhY3R1YWxDb21taXRtZW50cykgKiAxMDA7XG4gICAgICB9XG4gICAgICBtZWFzdXJlc1RvdGFsc1tWYWx1ZUNvbnN0YW50cy5ERUxJVkVSWV9SQVRFXSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9idWlsZFRvdGFsRmllbGRzKG1lYXN1cmVzVG90YWxzKTtcbiAgfVxuXG4gIF9idWlsZFRvdGFsRmllbGRzKG1lYXN1cmVzVG90YWxzKSB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbWVhc3VyZXNPcmRlciA9IFtcbiAgICAgIHsgdHJuOiBWYWx1ZUNvbnN0YW50cy5BQ1RVQUxfQ09NTUlUTUVOVFMsIHRvdGFsOiB0cnVlIH0sXG4gICAgICB7IHRybjogVmFsdWVDb25zdGFudHMuUExBTk5FRF9DT01NSVRNRU5UUywgdG90YWw6IHRydWUgfSxcbiAgICAgIHsgdHJuOiBWYWx1ZUNvbnN0YW50cy5BQ1RVQUxfRElTQlVSU0VNRU5UUywgdG90YWw6IHRydWUgfSxcbiAgICAgIHsgdHJuOiBWYWx1ZUNvbnN0YW50cy5QTEFOTkVEX0RJU0JVUlNFTUVOVFMsIHRvdGFsOiB0cnVlIH0sXG4gICAgICB7IHRybjogVmFsdWVDb25zdGFudHMuQUNUVUFMX0VYUEVORElUVVJFUywgdG90YWw6IHRydWUgfSxcbiAgICAgIHsgdHJuOiBWYWx1ZUNvbnN0YW50cy5VTkFMTE9DQVRFRF9ESVNCVVJTRU1FTlRTLCB0b3RhbDogZmFsc2UgfSxcbiAgICAgIHsgdHJuOiBWYWx1ZUNvbnN0YW50cy5QTEFOTkVEX0VYUEVORElUVVJFUywgdG90YWw6IHRydWUgfSxcbiAgICAgIHsgdHJuOiBWYWx1ZUNvbnN0YW50cy5NVEVGX1BST0pFQ1RJT05TLCB0b3RhbDogdHJ1ZSB9LFxuICAgICAgeyB0cm46IFZhbHVlQ29uc3RhbnRzLkRFTElWRVJZX1JBVEUsIHRvdGFsOiBmYWxzZSwgaXNQZXJjZW50YWdlOiB0cnVlIH1dO1xuICAgIGNvbnN0IGZ1bmRpbmdJbmZvU3VtbWFyeSA9IFtdO1xuICAgIG1lYXN1cmVzT3JkZXIuZm9yRWFjaChtZWFzdXJlID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IG1lYXN1cmVzVG90YWxzW21lYXN1cmUudHJuXTtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5wcm9wcy5hY3Rpdml0eUZ1bmRpbmdUb3RhbHMuZm9ybWF0QW1vdW50KHZhbHVlLCBtZWFzdXJlLmlzUGVyY2VudGFnZSk7XG4gICAgICAgIGxldCB0aXRsZSA9IG1lYXN1cmUudHJuO1xuICAgICAgICBpZiAobWVhc3VyZS50b3RhbCkge1xuICAgICAgICAgIHRpdGxlID0gYFRvdGFsICR7dGl0bGV9YDtcbiAgICAgICAgfVxuICAgICAgICB0aXRsZSA9IHRyYW5zbGF0ZSh0aXRsZSk7XG4gICAgICAgIGNvbnN0IGtleSA9IGBTdW1tYXJ5LVRvdGFsLSR7bWVhc3VyZS50cm59YDtcbiAgICAgICAgZnVuZGluZ0luZm9TdW1tYXJ5LnB1c2goPEFQRmllbGRcbiAgICAgICAgICBrZXk9e2tleX0gdGl0bGU9e3RpdGxlfSB2YWx1ZT17dmFsdWV9IHNlcGFyYXRvcj17ZmFsc2V9XG4gICAgICAgICAgZmllbGROYW1lQ2xhc3M9e3RoaXMucHJvcHMuZmllbGROYW1lQ2xhc3N9IGZpZWxkVmFsdWVDbGFzcz17dGhpcy5wcm9wcy5maWVsZFZhbHVlQ2xhc3N9XG4gICAgICAgICAgdHJhbnNsYXRlPXt0cmFuc2xhdGV9IExvZ2dlcj17dGhpcy5wcm9wcy5Mb2dnZXJ9IC8+KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuZGluZ0luZm9TdW1tYXJ5O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2Pnt0aGlzLl9idWlsZEZ1bmRpbmdJbmZvcm1hdGlvbigpfTwvZGl2PjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uKEZ1bmRpbmdTdW1tYXJ5LCB7XG4gIFNlY3Rpb25UaXRsZTogJ2Z1bmRpbmdJbmZvcm1hdGlvbidcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQWN0aXZpdHlDb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy91dGlsL0FjdGl2aXR5Q29uc3RhbnRzJztcbmltcG9ydCBWYWx1ZUNvbnN0YW50cyBmcm9tICcuLi8uLi8uLi91dGlscy9WYWx1ZUNvbnN0YW50cyc7XG5pbXBvcnQgRmllbGRzTWFuYWdlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2ZpZWxkL0ZpZWxkc01hbmFnZXInO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uLmpzeCc7XG5cbmxldCBsb2dnZXIgPSBudWxsO1xuXG4vKipcbiAqIElkZW50aWZpY2F0aW9uIHNlY3Rpb25cbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuY2xhc3MgQVBJZGVudGlmaWNhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYnVpbGRTaW1wbGVGaWVsZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBhY3Rpdml0eUZpZWxkc01hbmFnZXI6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEZpZWxkc01hbmFnZXIpLmlzUmVxdWlyZWQsXG4gICAgYWN0aXZpdHk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBMb2dnZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IExvZ2dlciB9ID0gdGhpcy5wcm9wcztcbiAgICBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdBUCBJZGVudGlmaWNhdGlvbicpO1xuICAgIGxvZ2dlci5kZWJ1ZygnY29uc3RydWN0b3InKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGJ1aWxkU2ltcGxlRmllbGQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZmllbGRQYXRocyA9IFtBY3Rpdml0eUNvbnN0YW50cy5TVEFUVVNfUkVBU09OLCBBY3Rpdml0eUNvbnN0YW50cy5UWVBFX09GX0NPT1BFUkFUSU9OLFxuICAgICAgQWN0aXZpdHlDb25zdGFudHMuVFlQRV9PRl9JTVBMRU1FTlRBVElPTiwgQWN0aXZpdHlDb25zdGFudHMuTU9EQUxJVElFUywgQWN0aXZpdHlDb25zdGFudHMuT0JKRUNUSVZFLFxuICAgICAgQWN0aXZpdHlDb25zdGFudHMuREVTQ1JJUFRJT04sIEFjdGl2aXR5Q29uc3RhbnRzLlBST0pFQ1RfQ09NTUVOVFMsIEFjdGl2aXR5Q29uc3RhbnRzLlJFU1VMVFMsXG4gICAgICBBY3Rpdml0eUNvbnN0YW50cy5MRVNTT05TX0xFQVJORUQsIEFjdGl2aXR5Q29uc3RhbnRzLlBST0pFQ1RfSU1QQUNULCBBY3Rpdml0eUNvbnN0YW50cy5BQ1RJVklUWV9TVU1NQVJZLFxuICAgICAgQWN0aXZpdHlDb25zdGFudHMuQ09ORElUSU9OQUxJVElFUywgQWN0aXZpdHlDb25zdGFudHMuUFJPSkVDVF9NQU5BR0VNRU5ULFxuICAgICAgQWN0aXZpdHlDb25zdGFudHMuQlVER0VUX0NPREVfUFJPSkVDVF9JRCwgQWN0aXZpdHlDb25zdGFudHMuQV9DX0NIQVBURVIsIEFjdGl2aXR5Q29uc3RhbnRzLkNSSVNfTlVNQkVSLFxuICAgICAgQWN0aXZpdHlDb25zdGFudHMuQUNUSVZJVFlfQlVER0VULCBBY3Rpdml0eUNvbnN0YW50cy5HT1ZFUk5NRU5UX0FHUkVFTUVOVF9OVU1CRVIsXG4gICAgICBBY3Rpdml0eUNvbnN0YW50cy5HT1ZFUk5NRU5UX0FQUFJPVkFMX1BST0NFRFVSRVMsIEFjdGl2aXR5Q29uc3RhbnRzLkpPSU5UX0NSSVRFUklBLFxuICAgICAgQWN0aXZpdHlDb25zdGFudHMuSFVNQU5JVEFSSUFOX0FJRF07XG4gICAgLy8gU2hvdyBidWRnZXQgZXh0cmFzIGZpZWxkcyBsaWtlIG1pbmlzdHJ5X2NvZGUsIGV0YyBvbmx5IHdoZW4gYWN0aXZpdHlfYnVkZ2V0IGlzIGVuYWJsZWQgYW5kIGhhcyB2YWx1ZSAnT24gQnVkZ2V0Jy5cbiAgICBpZiAodGhpcy5wcm9wcy5hY3Rpdml0eUZpZWxkc01hbmFnZXIuaXNGaWVsZFBhdGhFbmFibGVkKEFjdGl2aXR5Q29uc3RhbnRzLkFDVElWSVRZX0JVREdFVClcbiAgICAgICYmIHRoaXMucHJvcHMuYWN0aXZpdHlbQWN0aXZpdHlDb25zdGFudHMuQUNUSVZJVFlfQlVER0VUXVxuICAgICAgJiYgdGhpcy5wcm9wcy5hY3Rpdml0eVtBY3Rpdml0eUNvbnN0YW50cy5BQ1RJVklUWV9CVURHRVRdLnZhbHVlID09PSBWYWx1ZUNvbnN0YW50cy5PTl9CVURHRVQpIHtcbiAgICAgIGZpZWxkUGF0aHMucHVzaChBY3Rpdml0eUNvbnN0YW50cy5JTkRJUkVDVF9PTl9CVURHRVQpO1xuICAgICAgZmllbGRQYXRocy5wdXNoKEFjdGl2aXR5Q29uc3RhbnRzLkZZKTtcbiAgICAgIGZpZWxkUGF0aHMucHVzaChBY3Rpdml0eUNvbnN0YW50cy5NSU5JU1RSWV9DT0RFKTtcbiAgICAgIGZpZWxkUGF0aHMucHVzaChBY3Rpdml0eUNvbnN0YW50cy5QUk9KRUNUX0NPREUpO1xuICAgIH1cbiAgICBmaWVsZFBhdGhzLnB1c2goLi4uW0FjdGl2aXR5Q29uc3RhbnRzLkZJTkFOQ0lBTF9JTlNUUlVNRU5ULCBBY3Rpdml0eUNvbnN0YW50cy5JQVRJX0lERU5USUZJRVJdKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge2ZpZWxkUGF0aHMubWFwKGZpZWxkUGF0aCA9PiBidWlsZFNpbXBsZUZpZWxkKGZpZWxkUGF0aCwgdHJ1ZSkpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uKEFQSWRlbnRpZmljYXRpb24sIHsgU2VjdGlvblRpdGxlOiAnSWRlbnRpZmljYXRpb24nLFxuICB1c2VFbmNhcHN1bGF0ZUhlYWRlcjogdHJ1ZSxcbiAgc0lEOiAnQVBJZGVudGlmaWNhdGlvbidcbn0pO1xuIiwiLyoqIFdTIHZhbGlkYXRpb24gKiovXG5jb25zdCBXU19WQUxJREFUSU9OX09GRiA9ICd2YWxpZGF0aW9uT2ZmJztcbmNvbnN0IFdTX1ZBTElEQVRJT05fQUxMX0VESVQgPSAnYWxsRWRpdHMnO1xuY29uc3QgV1NfVkFMSURBVElPTl9ORVdfT05MWSA9ICduZXdPbmx5JztcbmNvbnN0IFdTX1ZBTElEQVRJT05fRklFTEQgPSAndmFsaWRhdGlvbic7XG5jb25zdCBDUk9TU19URUFNX1ZBTElEQVRJT04gPSAnaXMtY3Jvc3MtdGVhbS12YWxpZGF0aW9uJztcbmNvbnN0IFdTX0FDQ0VTU19UWVBFX01BTkFHRU1FTlQgPSAnTWFuYWdlbWVudCc7XG5jb25zdCBXU19BQ0NFU1NfVFlQRV9URUFNID0gJ1RlYW0nO1xuXG4vKiogUm9sZXMgKGZyb20gV29ya3NwYWNlTWVtYmVyUm9sZUNvbnN0YW50cy5qYXZhKSAqKi9cbmNvbnN0IFJPTEVfVEVBTV9NRU1CRVJfV1NfTUFOQUdFUiA9IDE7XG5jb25zdCBST0xFX1RFQU1fTUVNQkVSX1dTX01FTUJFUiA9IDI7XG5jb25zdCBST0xFX1RFQU1fTUVNQkVSX1dTX0FQUFJPVkVSID0gMztcblxuLyoqIE90aGVyIGZpZWxkcyAqKi9cbmNvbnN0IFdPUktTUEFDRV9JRCA9ICd3b3Jrc3BhY2UtaWQnO1xuY29uc3QgUk9MRV9JRCA9ICdyb2xlLWlkJztcbmNvbnN0IFdPUktTUEFDRV9MRUFEX0lEID0gJ3dvcmtzcGFjZS1sZWFkLWlkJztcbmNvbnN0IEFDQ0VTU19UWVBFID0gJ2FjY2Vzcy10eXBlJztcbmNvbnN0IElTX0NPTVBVVEVEID0gJ2lzLWNvbXB1dGVkJztcbmNvbnN0IElTX1BSSVZBVEUgPSAnaXMtcHJpdmF0ZSc7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIFdTX1ZBTElEQVRJT05fT0ZGLFxuICBXU19WQUxJREFUSU9OX0FMTF9FRElULFxuICBXU19WQUxJREFUSU9OX05FV19PTkxZLFxuICBXU19WQUxJREFUSU9OX0ZJRUxELFxuICBDUk9TU19URUFNX1ZBTElEQVRJT04sXG4gIFdTX0FDQ0VTU19UWVBFX01BTkFHRU1FTlQsXG4gIFdTX0FDQ0VTU19UWVBFX1RFQU0sXG4gIFJPTEVfVEVBTV9NRU1CRVJfV1NfTUFOQUdFUixcbiAgUk9MRV9URUFNX01FTUJFUl9XU19NRU1CRVIsXG4gIFJPTEVfVEVBTV9NRU1CRVJfV1NfQVBQUk9WRVIsXG4gIFdPUktTUEFDRV9JRCxcbiAgUk9MRV9JRCxcbiAgV09SS1NQQUNFX0xFQURfSUQsXG4gIEFDQ0VTU19UWVBFLFxuICBJU19DT01QVVRFRCxcbiAgSVNfUFJJVkFURSxcbn0pO1xuIiwiLyogVXNlciBjb25zdGFudHMgKi9cbmNvbnN0IEZJUlNUX05BTUUgPSAnZmlyc3QtbmFtZSc7XG5jb25zdCBMQVNUX05BTUUgPSAnbGFzdC1uYW1lJztcbmNvbnN0IEVNQUlMID0gJ2VtYWlsJztcblxuLyogVGVhbSBtZW1iZXIgY29uc3RhbnRzICovXG5jb25zdCBURUFNX01FTUJFUl9VU0VSX0lEID0gJ3VzZXItaWQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5mcmVlemUoe1xuICBGSVJTVF9OQU1FLFxuICBMQVNUX05BTUUsXG4gIEVNQUlMLFxuICBURUFNX01FTUJFUl9VU0VSX0lELFxufSk7XG5cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEFjdGl2aXR5Q29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvdXRpbC9BY3Rpdml0eUNvbnN0YW50cyc7XG5pbXBvcnQgRmllbGRzTWFuYWdlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2ZpZWxkL0ZpZWxkc01hbmFnZXInO1xuaW1wb3J0IFBvc3NpYmxlVmFsdWVzTWFuYWdlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2ZpZWxkL1Bvc3NpYmxlVmFsdWVzTWFuYWdlcic7XG5pbXBvcnQgQVBGaWVsZCBmcm9tICcuLi9jb21wb25lbnRzL0FQRmllbGQuanN4JztcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vU2VjdGlvbi5qc3gnO1xuaW1wb3J0IFdvcmtzcGFjZUNvbnN0YW50cyBmcm9tICcuLi8uLi8uLi91dGlscy9jb25zdGFudHMvV29ya3NwYWNlQ29uc3RhbnRzJztcbmltcG9ydCBVc2VyQ29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbnN0YW50cy9Vc2VyQ29uc3RhbnRzJztcblxubGV0IGxvZ2dlciA9IG51bGw7XG5cbi8qKlxuICogQWRkaXRpb25hbCBJbmZvIHN1bW1hcnkgc2VjdGlvblxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZWNzdVxuICovXG5jbGFzcyBBZGRpdGlvbmFsSW5mbyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWN0aXZpdHk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBhY3Rpdml0eVdvcmtzcGFjZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGFjdGl2aXR5V1NNYW5hZ2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgYnVpbGRTaW1wbGVGaWVsZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBmaWVsZE5hbWVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmaWVsZFZhbHVlQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWN0aXZpdHlGaWVsZHNNYW5hZ2VyOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihGaWVsZHNNYW5hZ2VyKS5pc1JlcXVpcmVkLFxuICAgIExvZ2dlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB0cmFuc2xhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IExvZ2dlciB9ID0gdGhpcy5wcm9wcztcbiAgICBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdBUCBBZGRpdGlvbmFsIGluZm8nKTtcbiAgICBsb2dnZXIuZGVidWcoJ2NvbnN0cnVjdG9yJyk7XG4gIH1cblxuICBfZ2V0V29ya3NwYWNlTGVhZERhdGEoKSB7XG4gICAgY29uc3QgeyBhY3Rpdml0eVdTTWFuYWdlciB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWFjdGl2aXR5V1NNYW5hZ2VyKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGAke2FjdGl2aXR5V1NNYW5hZ2VyW1VzZXJDb25zdGFudHMuRklSU1RfTkFNRV19ICR7YWN0aXZpdHlXU01hbmFnZXJbVXNlckNvbnN0YW50cy5MQVNUX05BTUVdfSAke2FjdGl2aXR5V1NNYW5hZ2VyW1VzZXJDb25zdGFudHMuRU1BSUxdfWA7XG4gIH1cblxuICBfYnVpbGRBZGRpdGlvbmFsSW5mbygpIHtcbiAgICBjb25zdCB7XG4gICAgICB0cmFuc2xhdGUsIGFjdGl2aXR5V29ya3NwYWNlLCBhY3Rpdml0eUZpZWxkc01hbmFnZXIsIGJ1aWxkU2ltcGxlRmllbGQsXG4gICAgICBmaWVsZE5hbWVDbGFzcywgZmllbGRWYWx1ZUNsYXNzLCBhY3Rpdml0eSwgTG9nZ2VyXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYWRkaXRpb25hbEluZm8gPSBbXTtcbiAgICBjb25zdCB0ZWFtTmFtZSA9IGFjdGl2aXR5RmllbGRzTWFuYWdlci5nZXRWYWx1ZShhY3Rpdml0eSwgQWN0aXZpdHlDb25zdGFudHMuVEVBTSxcbiAgICAgIFBvc3NpYmxlVmFsdWVzTWFuYWdlci5nZXRPcHRpb25UcmFuc2xhdGlvbik7XG4gICAgLy8gbm8gbmVlZCB0byBleHBvcnQgcmVwZWF0aW5nIHRyYW5zbGF0aW9uIGZvciB0aGUgYWNjZXNzIHR5cGUgdGhyb3VnaCB3b3Jrc3BhY2VzIEVQXG4gICAgY29uc3QgYWNjZXNzVHlwZSA9IHRyYW5zbGF0ZShhY3Rpdml0eVdvcmtzcGFjZVtXb3Jrc3BhY2VDb25zdGFudHMuQUNDRVNTX1RZUEVdKTtcbiAgICBjb25zdCBpc0NvbXB1dGVkVGVhbSA9IGFjdGl2aXR5V29ya3NwYWNlW1dvcmtzcGFjZUNvbnN0YW50cy5JU19DT01QVVRFRF0gPT09IHRydWUgPyB0cmFuc2xhdGUoJ1llcycpIDogdHJhbnNsYXRlKCdObycpO1xuXG4gICAgLy8gVE9ETzogdGhlIHJpZ2h0IHZhbHVlIGFzIGRlZmluZWQgaW4gQU1QLTI1NDAzIHdpbGwgYmUgc2hvd24gYWZ0ZXIgQU1QLTI2Mjk1LlxuICAgIGFkZGl0aW9uYWxJbmZvLnB1c2goYnVpbGRTaW1wbGVGaWVsZChBY3Rpdml0eUNvbnN0YW50cy5DUkVBVEVEX0JZLCB0cnVlKSk7XG4gICAgYWRkaXRpb25hbEluZm8ucHVzaChidWlsZFNpbXBsZUZpZWxkKEFjdGl2aXR5Q29uc3RhbnRzLkNSRUFURURfT04sIHRydWUpKTtcbiAgICBhZGRpdGlvbmFsSW5mby5wdXNoKGJ1aWxkU2ltcGxlRmllbGQoQWN0aXZpdHlDb25zdGFudHMuTU9ESUZJRURfQlksIHRydWUpKTtcbiAgICBhZGRpdGlvbmFsSW5mby5wdXNoKGJ1aWxkU2ltcGxlRmllbGQoQWN0aXZpdHlDb25zdGFudHMuTU9ESUZJRURfT04sIHRydWUpKTtcbiAgICBhZGRpdGlvbmFsSW5mby5wdXNoKEFQRmllbGQuaW5zdGFuY2UoJ2NyZWF0ZWRJbldvcmtzcGFjZScsIGAke3RlYW1OYW1lfSAtICR7YWNjZXNzVHlwZX1gLFxuICAgICAgZmFsc2UsIGZhbHNlLCBmaWVsZE5hbWVDbGFzcywgZmllbGRWYWx1ZUNsYXNzLCB0cmFuc2xhdGUsIExvZ2dlcikpO1xuXG4gICAgYWRkaXRpb25hbEluZm8ucHVzaChBUEZpZWxkLmluc3RhbmNlKCd3b3Jrc3BhY2VNYW5hZ2VyJywgdGhpcy5fZ2V0V29ya3NwYWNlTGVhZERhdGEoKSxcbiAgICAgIGZhbHNlLCBmYWxzZSwgZmllbGROYW1lQ2xhc3MsIGZpZWxkVmFsdWVDbGFzcywgdHJhbnNsYXRlLCBMb2dnZXIpKTtcblxuICAgIGFkZGl0aW9uYWxJbmZvLnB1c2goQVBGaWVsZC5pbnN0YW5jZSgnY29tcHV0YXRpb24nLCBpc0NvbXB1dGVkVGVhbSxcbiAgICAgIGZhbHNlLCBmYWxzZSwgZmllbGROYW1lQ2xhc3MsIGZpZWxkVmFsdWVDbGFzcywgdHJhbnNsYXRlLCBMb2dnZXIpKTtcblxuICAgIHJldHVybiBhZGRpdGlvbmFsSW5mbztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdj57dGhpcy5fYnVpbGRBZGRpdGlvbmFsSW5mbygpfTwvZGl2PjtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb24oQWRkaXRpb25hbEluZm8sIHtcbiAgU2VjdGlvblRpdGxlOiAnYWRkaXRpb25hbEluZm8nXG59KTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUYWJsaWZ5IGZyb20gJy4uL2NvbXBvbmVudHMvVGFibGlmeS5qc3gnO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uLmpzeCc7XG5pbXBvcnQgRmllbGRzTWFuYWdlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2ZpZWxkL0ZpZWxkc01hbmFnZXInO1xuaW1wb3J0IEFjdGl2aXR5Q29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvdXRpbC9BY3Rpdml0eUNvbnN0YW50cyc7XG5pbXBvcnQgUG9zc2libGVWYWx1ZXNNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvZmllbGQvUG9zc2libGVWYWx1ZXNNYW5hZ2VyJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vQWN0aXZpdHlQcmV2aWV3LmNzcyc7XG5pbXBvcnQgRmllbGRQYXRoQ29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL3V0aWxzL0ZpZWxkUGF0aENvbnN0YW50cyc7XG5cbmxldCBsb2dnZXIgPSBudWxsO1xuXG4vKipcbiAqIE9yZ2FuaXphdGlvbnMgYW5kIHByb2plY3QgaWRzIHNlY3Rpb25cbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuY29uc3QgQVBJbnRlcm5hbElkc1NlY3Rpb24gPSAoaXNTZXBhcmF0ZVNlY3Rpb24pID0+IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhY3Rpdml0eTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGFjdGl2aXR5RmllbGRzTWFuYWdlcjogUHJvcFR5cGVzLmluc3RhbmNlT2YoRmllbGRzTWFuYWdlcikuaXNSZXF1aXJlZCxcbiAgICBzaG93SWZFbXB0eTogUHJvcFR5cGVzLmJvb2wsIC8qIG9ubHkgbWFrZXMgc2Vuc2UgaWYgaXNTZXBhcmF0ZVNlY3Rpb24gaXMgdHJ1ZSwgd2lsbCByZW5kZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiB0aGVyZSBhcmUgbm8gb3JnIGlkcyovXG4gICAgTG9nZ2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHRyYW5zbGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgTG9nZ2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0FQIEludGVybmFsIGlkcycpO1xuICAgIGxvZ2dlci5sb2coJ2NvbnN0cnVjdG9yJyk7XG4gIH1cblxuICBfZ2V0QWN0SW50ZXJuYWxJZENvbnRlbnQoYWN0SW50SWQsIHNob3dJbnRlcm5hbElkKSB7XG4gICAgbGV0IGludElkO1xuICAgIGlmIChzaG93SW50ZXJuYWxJZCkge1xuICAgICAgaW50SWQgPSA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50YWJsZVZhbHVlfT57YWN0SW50SWQuaW50ZXJuYWxfaWR9PC9zcGFuPjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYga2V5PXthY3RJbnRJZC5vcmdhbml6YXRpb24udmFsdWV9PlxuICAgICAgICA8c3Bhbj5beyBhY3RJbnRJZC5vcmdhbml6YXRpb24udmFsdWUgfV08L3NwYW4+XG4gICAgICAgIHsgaW50SWQgfVxuICAgICAgPC9kaXY+KTtcbiAgfVxuXG4gIGJ1aWxkQ29udGVudCgpIHtcbiAgICBsZXQgb3JnSWRzO1xuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2aXR5RmllbGRzTWFuYWdlci5pc0ZpZWxkUGF0aEVuYWJsZWQoQWN0aXZpdHlDb25zdGFudHMuQUNUSVZJVFlfSU5URVJOQUxfSURTKSkge1xuICAgICAgY29uc3Qgc2hvd0ludGVybmFsSWQgPSB0aGlzLnByb3BzLmFjdGl2aXR5RmllbGRzTWFuYWdlci5pc0ZpZWxkUGF0aEVuYWJsZWQoXG4gICAgICAgIEZpZWxkUGF0aENvbnN0YW50cy5BQ1RJVklUWV9JTlRFUk5BTF9JRFNfSU5URVJOQUxfSURfUEFUSCk7XG4gICAgICBvcmdJZHMgPSBbXTtcbiAgICAgIGNvbnN0IGFjdEludElkcyA9IHRoaXMucHJvcHMuYWN0aXZpdHlGaWVsZHNNYW5hZ2VyLmdldFZhbHVlKHRoaXMucHJvcHMuYWN0aXZpdHksXG4gICAgICAgIEFjdGl2aXR5Q29uc3RhbnRzLkFDVElWSVRZX0lOVEVSTkFMX0lEUywgUG9zc2libGVWYWx1ZXNNYW5hZ2VyLmdldE9wdGlvblRyYW5zbGF0aW9uKTtcbiAgICAgIGlmIChhY3RJbnRJZHMgJiYgYWN0SW50SWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYWN0SW50SWRzLmZvckVhY2goYWN0SW50SWQgPT4gb3JnSWRzLnB1c2godGhpcy5fZ2V0QWN0SW50ZXJuYWxJZENvbnRlbnQoYWN0SW50SWQsIHNob3dJbnRlcm5hbElkKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3JnSWRzICYmIG9yZ0lkcy5sZW5ndGggPiAwID8gb3JnSWRzIDogbnVsbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRyYW5zbGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgY29udGVudCA9IHRoaXMuYnVpbGRDb250ZW50KCk7XG4gICAgaWYgKGlzU2VwYXJhdGVTZWN0aW9uID09PSB0cnVlKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgY29udGVudCBleGlzdHMgYmVmb3JlIGZvcm1hdHRpbmdcbiAgICAgIGNvbnN0IG5vRGF0YSA9IDx0cj48dGQ+e3RyYW5zbGF0ZSgnTm8gRGF0YScpfTwvdGQ+PC90cj47XG4gICAgICBjb25zdCB0YWJsZUNvbnRlbnQgPSBjb250ZW50ID9cbiAgICAgICAgVGFibGlmeS5hZGRSb3dzKGNvbnRlbnQsIEFjdGl2aXR5Q29uc3RhbnRzLkFDVElWSVRZX0lOVEVSTkFMX0lEU19DT0xTKSA6XG4gICAgICAgIG5vRGF0YTtcbiAgICAgIGNvbnRlbnQgPSA8ZGl2Pjx0YWJsZSBjbGFzc05hbWU9e3N0eWxlcy5ib3hfdGFibGV9Pjx0Ym9keT57dGFibGVDb250ZW50fTwvdGJvZHk+PC90YWJsZT48L2Rpdj47XG4gICAgfSBlbHNlIGlmIChjb250ZW50IHx8IHRoaXMucHJvcHMuc2hvd0lmRW1wdHkpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PVwiSW50ZXJuYWxJZHNGcm9tSWRlbnRpZmljYXRpb25TZWN0aW9uXCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2NvbnRlbnQgJiYgY29udGVudC5tYXAob3JnRGF0YSA9PiAoPGxpIGtleT17b3JnRGF0YS5rZXl9PntvcmdEYXRhfTwvbGk+KSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxufTtcbmNvbnN0IEFQSW50ZXJuYWxJZHMgPSBTZWN0aW9uKEFQSW50ZXJuYWxJZHNTZWN0aW9uKHRydWUpLCB7IFNlY3Rpb25UaXRsZTogJ0FnZW5jeSBJbnRlcm5hbCBJRHMnLFxuICB1c2VFbmNhcHN1bGF0ZUhlYWRlcjogdHJ1ZSxcbiAgc0lEOiAnQVBJbnRlcm5hbElkcydcbn0pO1xuZXhwb3J0IGRlZmF1bHQgQVBJbnRlcm5hbElkcztcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuLy8gaW1wb3J0IHsgQWN0aXZpdHlDb25zdGFudHMsIEZpZWxkUGF0aENvbnN0YW50cywgRmllbGRzTWFuYWdlciwgU2VjdGlvbiB9IGZyb20gJ2FtcC11aSc7XG5pbXBvcnQgQWN0aXZpdHlDb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy91dGlsL0FjdGl2aXR5Q29uc3RhbnRzJztcbmltcG9ydCBGaWVsZFBhdGhDb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvRmllbGRQYXRoQ29uc3RhbnRzJztcbmltcG9ydCBGaWVsZHNNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvZmllbGQvRmllbGRzTWFuYWdlcic7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24uanN4JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FQQ29tcG9uZW50cy5jc3MnO1xuXG5sZXQgbG9nZ2VyID0gbnVsbDtcblxuLyoqXG4gKiBAYXV0aG9yIEdhYnJpZWwgSW5jaGF1c3BlXG4gKi9cbmNsYXNzIEFQQ29tcG9uZW50cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzICovXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWN0aXZpdHk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBhY3Rpdml0eUZpZWxkc01hbmFnZXI6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEZpZWxkc01hbmFnZXIpLmlzUmVxdWlyZWQsXG4gICAgTG9nZ2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHRyYW5zbGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICByYXdOdW1iZXJUb0Zvcm1hdHRlZFN0cmluZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzICovXG5cbiAgc3RhdGljIF9leHRyYWN0WWVhcihkYXRlU3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKERhdGUucGFyc2UoZGF0ZVN0cmluZykpLmdldEZ1bGxZZWFyKCk7XG4gIH1cblxuICBzdGF0aWMgX2V4dHJhY3RHcm91cHMoZnVuZGluZywgdHJuVHlwZSkge1xuICAgIGNvbnN0IGdyb3VwcyA9IFtdO1xuICAgIGNvbnN0IGF1eEZkID0ge1xuICAgICAgYWRqVHlwZTogZnVuZGluZ1tBY3Rpdml0eUNvbnN0YW50cy5BREpVU1RNRU5UX1RZUEVdLFxuICAgICAgdHJuVHlwZSxcbiAgICAgIGtleTogZnVuZGluZy5pZCxcbiAgICAgIGN1cnJlbmN5OiBmdW5kaW5nW0FjdGl2aXR5Q29uc3RhbnRzLkNVUlJFTkNZXSxcbiAgICAgIGFtb3VudDogZnVuZGluZ1tBY3Rpdml0eUNvbnN0YW50cy5BTU9VTlRdLFxuICAgICAgeWVhcjogQVBDb21wb25lbnRzLl9leHRyYWN0WWVhcihmdW5kaW5nW0FjdGl2aXR5Q29uc3RhbnRzLlRSQU5TQUNUSU9OX0RBVEVdKVxuICAgIH07XG4gICAgY29uc3QgZ3JvdXAgPSBncm91cHMuZmluZChvID0+IG8uYWRqVHlwZS5pZCA9PT0gYXV4RmQuYWRqVHlwZS5pZFxuICAgICAgJiYgby50cm5UeXBlID09PSBhdXhGZC50cm5UeXBlXG4gICAgICAmJiBvLnllYXIgPT09IGF1eEZkLnllYXIpO1xuICAgIGlmICghZ3JvdXApIHtcbiAgICAgIGdyb3Vwcy5wdXNoKGF1eEZkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVE9ETzogd2UgbmVlZCBjdXJyZW5jeSBjb252ZXJzaW9uIGhlcmUuXG4gICAgICBncm91cC5hbW91bnQgKz0gYXV4RmQuYW1vdW50O1xuICAgIH1cbiAgICByZXR1cm4gZ3JvdXBzO1xuICB9XG5cbiAgc3RhdGljIF9idWlsZERldGFpbChjb21wb25lbnQsIHRyYW5zbGF0ZSwgcmF3TnVtYmVyVG9Gb3JtYXR0ZWRTdHJpbmcpIHtcbiAgICBjb25zdCBjb250ZW50ID0gW107XG4gICAgLy8gVE9ETzogQXBwbHkgY3VycmVuY3kgY29udmVyc2lvbiB0byBzaG93IGFsbCBmdW5kaW5ncyBpbiB0aGUgc2FtZSBjdXJyZW5jeVxuICAgIEZpZWxkUGF0aENvbnN0YW50cy5UUkFOU0FDVElPTl9UWVBFUy5mb3JFYWNoKHRyblR5cGUgPT4ge1xuICAgICAgY29uc3QgZnVuZGluZ3MgPSBjb21wb25lbnRbdHJuVHlwZV07XG4gICAgICBpZiAoZnVuZGluZ3MgJiYgZnVuZGluZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwcyA9IEFQQ29tcG9uZW50cy5fZXh0cmFjdEdyb3VwcyhmdW5kaW5ncywgdHJuVHlwZSk7XG4gICAgICAgIGdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgICAgICAvLyBUT0RPOiBBZGQgdGhlIGN1cnJlbnQgY3VycmVuY3kuXG4gICAgICAgICAgLy8gVE9ETzogVHJhbnNsYXRlIGEgc2luZ2xlIHBocmFzZSBpbnN0ZWFkIG9mIGEgY29tYmluYXRpb24gb2Ygd29yZHMgKEFNUE9GRkxJTkUtNDc3KS5cbiAgICAgICAgICBjb250ZW50LnB1c2goPHRyPlxuICAgICAgICAgICAgPHRkPntncm91cC55ZWFyfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3RyYW5zbGF0ZShgJHtncm91cC5hZGpUeXBlLnZhbHVlfSAke2dyb3VwLnRyblR5cGV9YCl9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57cmF3TnVtYmVyVG9Gb3JtYXR0ZWRTdHJpbmcoZ3JvdXAuYW1vdW50KX08L3RkPlxuICAgICAgICAgIDwvdHI+KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgdGFibGUgPSAoPGRpdj5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3N0eWxlcy50YWJsZX0+XG4gICAgICAgIDx0Ym9keT57Y29udGVudH08L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj4pO1xuICAgIHJldHVybiB0YWJsZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgTG9nZ2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0FQIENvbXBvbmVudHMnKTtcbiAgICBsb2dnZXIuZGVidWcoJ2NvbnN0cnVjdG9yJyk7XG4gIH1cblxuICBfYnVpbGRDb21wb25lbnRzKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBbXTtcbiAgICB0aGlzLnByb3BzLmFjdGl2aXR5W0FjdGl2aXR5Q29uc3RhbnRzLkNPTVBPTkVOVFNdLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMucHJvcHMuYWN0aXZpdHlGaWVsZHNNYW5hZ2VyLmlzRmllbGRQYXRoRW5hYmxlZChBY3Rpdml0eUNvbnN0YW50cy5DT01QT05FTlRfVElUTEUpKSB7XG4gICAgICAgIGNvbnRlbnQucHVzaCg8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57Y29tcG9uZW50W0FjdGl2aXR5Q29uc3RhbnRzLkNPTVBPTkVOVF9USVRMRV19PC9kaXY+KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLmFjdGl2aXR5RmllbGRzTWFuYWdlci5pc0ZpZWxkUGF0aEVuYWJsZWQoQWN0aXZpdHlDb25zdGFudHMuQ09NUE9ORU5UX1RZUEUpKSB7XG4gICAgICAgIGNvbnRlbnQucHVzaCg8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57Y29tcG9uZW50W0FjdGl2aXR5Q29uc3RhbnRzLkNPTVBPTkVOVF9UWVBFXS52YWx1ZX08L2Rpdj4pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMuYWN0aXZpdHlGaWVsZHNNYW5hZ2VyLmlzRmllbGRQYXRoRW5hYmxlZChBY3Rpdml0eUNvbnN0YW50cy5DT01QT05FTlRfREVTQ1JJUFRJT04pKSB7XG4gICAgICAgIGNvbnRlbnQucHVzaCg8ZGl2Pntjb21wb25lbnQuZGVzY3JpcHRpb259PC9kaXY+KTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQucHVzaCg8ZGl2Pnt0aGlzLnByb3BzLnRyYW5zbGF0ZSgnRmluYW5jZSBvZiB0aGUgY29tcG9uZW50Jyl9PC9kaXY+KTtcbiAgICAgIGNvbnRlbnQucHVzaChBUENvbXBvbmVudHMuX2J1aWxkRGV0YWlsKGNvbXBvbmVudCwgdGhpcy5wcm9wcy50cmFuc2xhdGUsIHRoaXMucHJvcHMucmF3TnVtYmVyVG9Gb3JtYXR0ZWRTdHJpbmcpKTtcbiAgICAgIGNvbnRlbnQucHVzaCg8aHIgLz4pO1xuICAgIH0pO1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoPGRpdj5cbiAgICAgIHt0aGlzLl9idWlsZENvbXBvbmVudHMoKX1cbiAgICA8L2Rpdj4pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb24oQVBDb21wb25lbnRzLCB7IFNlY3Rpb25UaXRsZTogJ0NvbXBvbmVudHMnXG59KTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBY3Rpdml0eUNvbnN0YW50cyBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL3V0aWwvQWN0aXZpdHlDb25zdGFudHMnO1xuaW1wb3J0IEFQRmllbGQgZnJvbSAnLi4vY29tcG9uZW50cy9BUEZpZWxkLmpzeCc7XG5pbXBvcnQgRmllbGRQYXRoQ29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL3V0aWxzL0ZpZWxkUGF0aENvbnN0YW50cyc7XG5pbXBvcnQgRmllbGRzTWFuYWdlciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2ZpZWxkL0ZpZWxkc01hbmFnZXInO1xuaW1wb3J0IFRhYmxpZnkgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJsaWZ5LmpzeCc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24uanN4JztcbmltcG9ydCBDb250YWN0Q29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvdXRpbC9Db250YWN0Q29uc3RhbnRzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vQWN0aXZpdHlQcmV2aWV3LmNzcyc7XG5cbi8qKlxuICogQWN0aXZpdHkgUHJldmlldyBDb250YWN0IHNlY3Rpb25cbiAqXG4gKiBAYXV0aG9yIE5hZGVqZGEgTWFuZHJlc2N1XG4gKi9cbmNsYXNzIEFQQ29udGFjdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWN0aXZpdHk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBhY3Rpdml0eUZpZWxkc01hbmFnZXI6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEZpZWxkc01hbmFnZXIpLmlzUmVxdWlyZWQsXG4gICAgY29udGFjdEZpZWxkc01hbmFnZXI6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEZpZWxkc01hbmFnZXIpLFxuICAgIGNvbnRhY3RzQnlJZHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgYnVpbGRTaW1wbGVGaWVsZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBnZXRBY3Rpdml0eUNvbnRhY3RJZHM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgTG9nZ2VyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0cmFuc2xhdGU6IFByb3BUeXBlcy5mdW5jXG4gIH07XG5cbiAgZ2V0SHlkcmF0ZWRDb250YWN0cygpIHtcbiAgICAvLyBDb250YWN0cyB3aWxsIGJlIGh5ZHJhdGVkIGFuZCByZWNlaXZlZCBieSBwcm9wc1xuICAgIC8vIEJvdGggaW4gYW1wX29mZmxpbmUgYW5kIGFtcF9vbmxpbmUgc28gd2UganVzdCBuZWVkIHRvIGdldFxuICAgIC8vIEFjdGl2aXR5IENvblxuICAgIGNvbnN0IHsgYWN0aXZpdHksIGNvbnRhY3RzQnlJZHMsIGdldEFjdGl2aXR5Q29udGFjdElkcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjb250YWN0SWRzID0gZ2V0QWN0aXZpdHlDb250YWN0SWRzKGFjdGl2aXR5KTtcbiAgICBjb25zdCBoeWRyYXRlZENvbnRhY3RzQnlJZHMgPSB7fTtcbiAgICBjb250YWN0SWRzLmZvckVhY2goY0lkID0+IHtcbiAgICAgIGNvbnN0IGMgPSBjb250YWN0c0J5SWRzW2NJZF0gfHwge307XG4gICAgICBpZiAoY1tDb250YWN0Q29uc3RhbnRzLlRNUF9IWURSQVRFRF0pIHtcbiAgICAgICAgaHlkcmF0ZWRDb250YWN0c0J5SWRzW2NJZF0gPSBjO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBoeWRyYXRlZENvbnRhY3RzQnlJZHM7XG4gIH1cblxuICByZW5kZXJDb250YWN0KGNvbnRhY3QpIHtcbiAgICBjb25zdCB7IGNvbnRhY3RGaWVsZHNNYW5hZ2VyLCBidWlsZFNpbXBsZUZpZWxkIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGtleT17Y29udGFjdC5pZH0gY2xhc3NOYW1lPXtzdHlsZXMucGFkZGluZ0JvdHRvbUxhcmdlfT5cbiAgICAgICAgPGRpdj57YCR7Y29udGFjdFtDb250YWN0Q29uc3RhbnRzLk5BTUVdfSAke2NvbnRhY3RbQ29udGFjdENvbnN0YW50cy5MQVNUX05BTUVdfWB9PC9kaXY+XG4gICAgICAgIHtjb250YWN0W0NvbnRhY3RDb25zdGFudHMuRU1BSUxdLm1hcChlbWFpbCA9PlxuICAgICAgICAgIGJ1aWxkU2ltcGxlRmllbGQoYCR7Q29udGFjdENvbnN0YW50cy5FTUFJTH1+XG4gICAgICAgICAgJHtDb250YWN0Q29uc3RhbnRzLlZBTFVFfWAsIHRydWUsIG51bGwsIGZhbHNlLCBlbWFpbCwgY29udGFjdEZpZWxkc01hbmFnZXIpKX1cbiAgICAgICAge2NvbnRhY3RbQ29udGFjdENvbnN0YW50cy5QSE9ORV0ubWFwKHBob25lID0+XG4gICAgICAgICAgYnVpbGRTaW1wbGVGaWVsZChgJHtDb250YWN0Q29uc3RhbnRzLlBIT05FfX5cbiAgICAgICAgICAke0NvbnRhY3RDb25zdGFudHMuVkFMVUV9YCwgdHJ1ZSwgbnVsbCwgZmFsc2UsIHBob25lLCBjb250YWN0RmllbGRzTWFuYWdlcikpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlck5vQ29udGFjdHMoKSB7XG4gICAgY29uc3QgeyBMb2dnZXIsIHRyYW5zbGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPEFQRmllbGRcbiAgICAgICAgZmllbGROYW1lQ2xhc3M9e3N0eWxlcy5oaWRkZW59IGZpZWxkVmFsdWVDbGFzcz17c3R5bGVzLm5vZGF0YX0gZmllbGRDbGFzcz17c3R5bGVzLmZsZXh9IHNlcGFyYXRvcj17ZmFsc2V9XG4gICAgICAgIHZhbHVlPXt0cmFuc2xhdGUoJ05vIERhdGEnKX0gdHJhbnNsYXRlPXt0cmFuc2xhdGV9IExvZ2dlcj17TG9nZ2VyfSAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBMb2dnZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBhY3Rpdml0eSwgYWN0aXZpdHlGaWVsZHNNYW5hZ2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGh5ZHJhdGVkQ29udGFjdHNCeUlkcyA9IHRoaXMuZ2V0SHlkcmF0ZWRDb250YWN0cygpO1xuICAgIGNvbnN0IGNvbnRhY3RHcm91cHMgPSBGaWVsZFBhdGhDb25zdGFudHMuQUNUSVZJVFlfQ09OVEFDVF9QQVRIU1xuICAgICAgLmZpbHRlcihhY3AgPT4gYWN0aXZpdHlGaWVsZHNNYW5hZ2VyLmlzRmllbGRQYXRoRW5hYmxlZChhY3ApKVxuICAgICAgLm1hcChhY3AgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGFjdGl2aXR5RmllbGRzTWFuYWdlci5nZXRGaWVsZExhYmVsVHJhbnNsYXRpb24oYWNwKTtcbiAgICAgICAgY29uc3QgY29udGFjdHMgPSAoYWN0aXZpdHlbYWNwXSB8fCBbXSkubWFwKGMgPT4ge1xuICAgICAgICAgIGNvbnN0IGh5ZHJhdGVkQyA9IGh5ZHJhdGVkQ29udGFjdHNCeUlkc1tjW0FjdGl2aXR5Q29uc3RhbnRzLkNPTlRBQ1RdLmlkXTtcbiAgICAgICAgICByZXR1cm4gaHlkcmF0ZWRDID8gdGhpcy5yZW5kZXJDb250YWN0KGh5ZHJhdGVkQykgOiBudWxsO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGNvbnRhY3RzLmxlbmd0aCA/IGNvbnRhY3RzIDogdGhpcy5yZW5kZXJOb0NvbnRhY3RzKCk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRDbGFzcyA9IGNvbnRhY3RzLmxlbmd0aCA/IHN0eWxlcy50YWJsZUNlbGwgOiBudWxsO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9XCJjb250YWN0LWdyb3VwXCI+XG4gICAgICAgICAgICA8ZGl2IGtleT1cInRpdGxlXCIgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdG9yX3RpdGxlfT57dGl0bGV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGtleT1cImNvbnRhY3RzXCIgY2xhc3NOYW1lPXtjb250ZW50Q2xhc3N9Pntjb250ZW50fTwvZGl2PlxuICAgICAgICAgIDwvZGl2Pik7XG4gICAgICB9KVxuICAgICAgLy8gVE9ETyB0YWJsaWZ5IG11c3Qgbm90IHJldmVyc2VzIHRoZSBvcmRlclxuICAgICAgLnJldmVyc2UoKTtcbiAgICByZXR1cm4gKDxUYWJsaWZ5XG4gICAgICBrZXk9XCJjb250YWN0LWluZm9cIiBjb250ZW50PXtjb250YWN0R3JvdXBzfSBjb2x1bW5zPXtBY3Rpdml0eUNvbnN0YW50cy5BQ1RJVklUWV9DT05UQUNUX0NPTFN9XG4gICAgICBMb2dnZXI9e0xvZ2dlcn0gLz4pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb24oQVBDb250YWN0LCB7IFNlY3Rpb25UaXRsZTogJ0NvbnRhY3QgSW5mb3JtYXRpb24nLFxuICB1c2VFbmNhcHN1bGF0ZUhlYWRlcjogdHJ1ZSxcbiAgc0lEOiAnQVBDb250YWN0J1xufSk7XG4iLCIvLyBEaXNhYmxlIHJ1bGUgYmVjYXVzZSBpdCBmYWlscyB3aXRoIGRlc3RydWN0aW5nIHN5bnRheC5cbi8qIGVzbGludCBcImltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcIjogMCovXG5cbmNvbnN0IFdPUktTUEFDRVNfR1JPVVBTID0gW1xuICB7IHR5cGU6ICdEb25vcicgfSxcbiAgeyB0eXBlOiAnR292ZXJubWVudCcgfSxcbiAgeyB0eXBlOiAnTGluZSBNaW5pc3RyaWVzJyB9LFxuICB7IHR5cGU6ICdPdGhlcicgfVxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKHtcbiAgV09SS1NQQUNFU19HUk9VUFNcbn0pO1xuIiwiaW1wb3J0IFRlc3RBUEZpZWxkIGZyb20gJy4vYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdEFQRmllbGQnO1xuaW1wb3J0IFRlc3RpbmdTZWN0aW9uIGZyb20gJy4vYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdGluZ1NlY3Rpb24nO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL3V0aWxzL0NvbnN0YW50cyc7XG5pbXBvcnQgQWN0aXZpdHlDb25zdGFudHMgZnJvbSAnLi9tb2R1bGVzL3V0aWwvQWN0aXZpdHlDb25zdGFudHMnO1xuaW1wb3J0IEZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzIGZyb20gJy4vbW9kdWxlcy91dGlsL0ZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzJztcbmltcG9ydCBFcnJvckNvbnN0YW50cyBmcm9tICcuL3V0aWxzL2NvbnN0YW50cy9FcnJvckNvbnN0YW50cyc7XG5pbXBvcnQgRmllbGRzTWFuYWdlciBmcm9tICcuL21vZHVsZXMvZmllbGQvRmllbGRzTWFuYWdlcic7XG5pbXBvcnQgRmllbGRQYXRoQ29uc3RhbnRzIGZyb20gJy4vdXRpbHMvRmllbGRQYXRoQ29uc3RhbnRzJztcbmltcG9ydCBWYWx1ZUNvbnN0YW50cyBmcm9tICcuL3V0aWxzL1ZhbHVlQ29uc3RhbnRzJztcbmltcG9ydCBDb250YWN0Q29uc3RhbnRzIGZyb20gJy4vbW9kdWxlcy91dGlsL0NvbnRhY3RDb25zdGFudHMnO1xuaW1wb3J0IEN1cnJlbmN5UmF0ZXNNYW5hZ2VyIGZyb20gJy4vbW9kdWxlcy91dGlsL0N1cnJlbmN5UmF0ZXNNYW5hZ2VyJztcbmltcG9ydCBQb3NzaWJsZVZhbHVlc01hbmFnZXIgZnJvbSAnLi9tb2R1bGVzL2ZpZWxkL1Bvc3NpYmxlVmFsdWVzTWFuYWdlcic7XG5pbXBvcnQgRmVhdHVyZU1hbmFnZXIgZnJvbSAnLi9tb2R1bGVzL3V0aWwvRmVhdHVyZU1hbmFnZXInO1xuaW1wb3J0IEFQTGFiZWwgZnJvbSAnLi9hY3Rpdml0eS9wcmV2aWV3L2NvbXBvbmVudHMvQVBMYWJlbC5qc3gnO1xuaW1wb3J0IEFQRmllbGQgZnJvbSAnLi9hY3Rpdml0eS9wcmV2aWV3L2NvbXBvbmVudHMvQVBGaWVsZC5qc3gnO1xuaW1wb3J0IFRhYmxpZnkgZnJvbSAnLi9hY3Rpdml0eS9wcmV2aWV3L2NvbXBvbmVudHMvVGFibGlmeS5qc3gnO1xuaW1wb3J0IEFQUGVyY2VudGFnZUZpZWxkIGZyb20gJy4vYWN0aXZpdHkvcHJldmlldy9jb21wb25lbnRzL0FQUGVyY2VudGFnZUZpZWxkLmpzeCc7XG5pbXBvcnQgQVBQZXJjZW50YWdlTGlzdCBmcm9tICcuL2FjdGl2aXR5L3ByZXZpZXcvY29tcG9uZW50cy9BUFBlcmNlbnRhZ2VMaXN0LmpzeCc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL2FjdGl2aXR5L3ByZXZpZXcvc2VjdGlvbnMvU2VjdGlvbi5qc3gnO1xuaW1wb3J0IEZ1bmRpbmdTdW1tYXJ5IGZyb20gJy4vYWN0aXZpdHkvcHJldmlldy9zZWN0aW9ucy9GdW5kaW5nU3VtbWFyeS5qc3gnO1xuaW1wb3J0IEFQSWRlbnRpZmljYXRpb24gZnJvbSAnLi9hY3Rpdml0eS9wcmV2aWV3L3NlY3Rpb25zL0FQSWRlbnRpZmljYXRpb24uanN4JztcbmltcG9ydCBVSVV0aWxzIGZyb20gJy4vdXRpbHMvVUlVdGlscyc7XG5pbXBvcnQgQWRkaXRpb25hbEluZm8gZnJvbSAnLi9hY3Rpdml0eS9wcmV2aWV3L3NlY3Rpb25zL0FkZGl0aW9uYWxJbmZvLmpzeCc7XG5pbXBvcnQgQVBJbnRlcm5hbElkcyBmcm9tICcuL2FjdGl2aXR5L3ByZXZpZXcvc2VjdGlvbnMvQVBJbnRlcm5hbElkcy5qc3gnO1xuaW1wb3J0IEFQQ29tcG9uZW50cyBmcm9tICcuL2FjdGl2aXR5L3ByZXZpZXcvc2VjdGlvbnMvQVBDb21wb25lbnRzLmpzeCc7XG5pbXBvcnQgQVBDb250YWN0IGZyb20gJy4vYWN0aXZpdHkvcHJldmlldy9zZWN0aW9ucy9BUENvbnRhY3QuanN4JztcbmltcG9ydCBVc2VyQ29uc3RhbnRzIGZyb20gJy4vdXRpbHMvY29uc3RhbnRzL1VzZXJDb25zdGFudHMnO1xuaW1wb3J0IFdvcmtzcGFjZUdyb3Vwc0NvbnN0YW50cyBmcm9tICcuL3V0aWxzL2NvbnN0YW50cy9Xb3Jrc3BhY2VHcm91cHNDb25zdGFudHMnO1xuaW1wb3J0IFdvcmtzcGFjZUNvbnN0YW50cyBmcm9tICcuL3V0aWxzL2NvbnN0YW50cy9Xb3Jrc3BhY2VDb25zdGFudHMnO1xuXG5cbmV4cG9ydCB7XG4gIFRlc3RBUEZpZWxkLCBUZXN0aW5nU2VjdGlvbiwgQ29uc3RhbnRzLCBBY3Rpdml0eUNvbnN0YW50cywgRmVhdHVyZU1hbmFnZXJDb25zdGFudHMsIEVycm9yQ29uc3RhbnRzLFxuICBDdXJyZW5jeVJhdGVzTWFuYWdlciwgRmllbGRzTWFuYWdlciwgRmllbGRQYXRoQ29uc3RhbnRzLCBWYWx1ZUNvbnN0YW50cywgUG9zc2libGVWYWx1ZXNNYW5hZ2VyLCBGZWF0dXJlTWFuYWdlcixcbiAgQVBMYWJlbCwgQVBGaWVsZCwgVGFibGlmeSwgQVBQZXJjZW50YWdlRmllbGQsIEFQUGVyY2VudGFnZUxpc3QsIFVJVXRpbHMsIFNlY3Rpb24sIEZ1bmRpbmdTdW1tYXJ5LCBBZGRpdGlvbmFsSW5mbyxcbiAgVXNlckNvbnN0YW50cywgQ29udGFjdENvbnN0YW50cywgV29ya3NwYWNlQ29uc3RhbnRzLCBXb3Jrc3BhY2VHcm91cHNDb25zdGFudHMsIEFQSWRlbnRpZmljYXRpb24sIEFQSW50ZXJuYWxJZHMsXG4gIEFQQ29tcG9uZW50cywgQVBDb250YWN0XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFRlc3RBUEZpZWxkLFxuICBUZXN0aW5nU2VjdGlvbixcbiAgQ29uc3RhbnRzLFxuICBBY3Rpdml0eUNvbnN0YW50cyxcbiAgRmVhdHVyZU1hbmFnZXJDb25zdGFudHMsXG4gIEVycm9yQ29uc3RhbnRzLFxuICBDdXJyZW5jeVJhdGVzTWFuYWdlcixcbiAgRmllbGRzTWFuYWdlcixcbiAgRmllbGRQYXRoQ29uc3RhbnRzLFxuICBWYWx1ZUNvbnN0YW50cyxcbiAgQ29udGFjdENvbnN0YW50cyxcbiAgRmVhdHVyZU1hbmFnZXIsXG4gIEFQTGFiZWwsXG4gIEFQRmllbGQsXG4gIFRhYmxpZnksXG4gIEFQUGVyY2VudGFnZUZpZWxkLFxuICBBUFBlcmNlbnRhZ2VMaXN0LFxuICBTZWN0aW9uLFxuICBGdW5kaW5nU3VtbWFyeSxcbiAgVUlVdGlscyxcbiAgQWRkaXRpb25hbEluZm8sXG4gIFVzZXJDb25zdGFudHMsXG4gIFdvcmtzcGFjZUNvbnN0YW50cyxcbiAgV29ya3NwYWNlR3JvdXBzQ29uc3RhbnRzLFxuICBBUElkZW50aWZpY2F0aW9uLFxuICBBUENvbXBvbmVudHMsXG4gIEFQSW50ZXJuYWxJZHMsXG4gIEFQQ29udGFjdFxufTtcbiJdLCJuYW1lcyI6WyJUZXN0QVBGaWVsZCIsInRybkxhYmVsIiwidmFsdWUiLCJpbmxpbmUiLCJzZXBhcmF0b3IiLCJuYW1lQ2xhc3MiLCJ2YWx1ZUNsYXNzIiwiUmVhY3QiLCJwcm9wcyIsInRyYW5zbGF0ZSIsImFtcExvZ2dlciIsImxvZyIsInVzZVNlcGFyYXRvciIsImRpc3BsYXlDbGFzcyIsImZpZWxkQ2xhc3MiLCJzdHlsZXMiLCJibG9jayIsImNsYXNzTmFtZXMiLCJmaWVsZFZhbHVlQ2xhc3MiLCJkaXNwbGF5VmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJPYmplY3QiLCJmb3JFYWNoIiwicHVzaCIsInYiLCJzb3J0Iiwiam9pbiIsIlN0cmluZyIsInVzZUlubmVySFRNTCIsIl9faHRtbCIsImZpZWxkTmFtZUNsYXNzIiwidGl0bGUiLCJfZ2V0VmFsdWUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhbnkiLCJib29sIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJUZXN0aW5nU2VjdGlvbiIsIkJBU0VfUkVTVF9VUkwiLCJDT05ORUNUSU9OX1RJTUVPVVQiLCJDT05ORUNUSU9OX0ZPUkNFRF9USU1FT1VUIiwiVElNRU9VVF9DSEVDS19JTlRFUlZBTCIsIk1BWF9SRVRSWV9BVEVNUFRTIiwiRVJST1JTX1RPX1JFVFJZIiwiRVJST1JTX05PX0FNUF9TRVJWRVIiLCJDT05ORUNUSVZJVFlfQ0hFQ0tfSU5URVJWQUwiLCJXT1JLU1BBQ0VfVVJMIiwiTE9HSU5fVVJMIiwiREVTS1RPUF9VUkwiLCJERVNLVE9QX0NVUlJFTlRfVVJMIiwiU1lOQ1VQX1JFRElSRUNUX1VSTCIsIlNZTkNVUF9ISVNUT1JZX1RBUkdFVCIsIlNZTkNVUF9TVU1NQVJZX1VSTCIsIkFDVElWSVRZX1BSRVZJRVdfVVJMIiwiQUNUSVZJVFlfRURJVF9VUkwiLCJVUERBVEVfVVJMIiwiU0VUVVBfVVJMIiwiU0VUVElOR1NfVVJMIiwiQ09MTEVDVElPTl9VU0VSUyIsIkNPTExFQ1RJT05fV09SS1BBQ0VTIiwiQ09MTEVDVElPTl9URUFNTUVNQkVSUyIsIkNPTExFQ1RJT05fQ0xJRU5UX1NFVFRJTkdTIiwiQ09MTEVDVElPTl9HTE9CQUxfU0VUVElOR1MiLCJDT0xMRUNUSU9OX0FDVElWSVRJRVMiLCJDT0xMRUNUSU9OX0ZJRUxEUyIsIkNPTExFQ1RJT05fUE9TU0lCTEVfVkFMVUVTIiwiQ09MTEVDVElPTl9TWU5DVVBfTE9HIiwiQ09MTEVDVElPTl9MQU5HUyIsIkNPTExFQ1RJT05fV1NfU0VUVElOR1MiLCJDT0xMRUNUSU9OX0NVUlJFTkNZX1JBVEVTIiwiQ09MTEVDVElPTl9GRUFUVVJFX01BTkFHRVIiLCJDT0xMRUNUSU9OX0NPTlRBQ1RTIiwiQ09MTEVDVElPTl9SRVNPVVJDRVMiLCJDT0xMRUNUSU9OX1JFUE9TSVRPUlkiLCJDT0xMRUNUSU9OX0dBWkVUVEVFUiIsIkNPTExFQ1RJT05fQ0FMRU5EQVJTIiwiQ09MTEVDVElPTl9DSEFOR0VTRVRTIiwiR0FaRVRURUVSX0RJU1RBTkNFX0RJVklERSIsIkRCX0ZJTEVfUFJFRklYIiwiREJfRklMRV9FWFRFTlNJT04iLCJEQl9DT01NT05fREFUQVNUT1JFX09QVElPTlMiLCJhdXRvbG9hZCIsImNvcnJ1cHRBbGVydFRocmVzaG9sZCIsIkRCX0FVVE9DT01QQUNUX0lOVEVSVkFMX01JTElTRUNPTkRTIiwiREJfREVGQVVMVF9RVUVSWV9MSU1JVCIsIkxBTkdVQUdFX0VOR0xJU0giLCJGU19MT0NBTEVTX0RJUkVDVE9SWSIsIkxBTkdVQUdFX01BU1RFUl9UUkFOU0xBVElPTlNfRklMRSIsIkxBTkdVQUdFX1RSQU5TTEFUSU9OU19GSUxFIiwiTEFOR1VBR0VfTkVXX1RSQU5TTEFUSU9OU19NVVNUX1NZTkMiLCJBU0FSX0RJUiIsIkFQUF9ESVJFQ1RPUlkiLCJURVNUX0RJUkVDVE9SWSIsIlNUQVRJQ19ESVIiLCJJTUFHRVNfRElSIiwiRE9DX0lDT05TIiwiREJfU1RBVElDX0RJUiIsIk1JR1JBVElPTlNfRElSIiwiSEFTSF9JVEVSQVRJT05TIiwiRElHRVNUX0FMR09SSVRITV9TSEExIiwiRElHRVNUX0FMR09SSVRITV9TSEEyNTYiLCJBQ1RJVklUWV9FRElUIiwiQUNUSVZJVFlfVklFVyIsIlNZTkNVUF9GT1JDRV9EQVlTIiwiU1lOQ1VQX0JFU1RfQkVGT1JFX0RBWVMiLCJTWU5DVVBfTk9fREFURSIsIlNZTkNVUF9UWVBFX1RSQU5TTEFUSU9OUyIsIlNZTkNVUF9UWVBFX1VTRVJTIiwiU1lOQ1VQX1RZUEVfQVNTRVRTIiwiU1lOQ1VQX1RZUEVfV09SS1NQQUNFUyIsIlNZTkNVUF9UWVBFX0dTIiwiU1lOQ1VQX1RZUEVfRVhDSEFOR0VfUkFURVMiLCJTWU5DVVBfVFlQRV9GRUFUVVJFX01BTkFHRVIiLCJTWU5DVVBfVFlQRV9XT1JLU1BBQ0VfTUVNQkVSUyIsIlNZTkNVUF9UWVBFX0FMTF9GSUVMRFMiLCJTWU5DVVBfVFlQRV9BQ1RJVklUSUVTX1BVTEwiLCJTWU5DVVBfVFlQRV9BQ1RJVklUSUVTX1BVU0giLCJTWU5DVVBfVFlQRV9BQ1RJVklUWV9GSUVMRFMiLCJTWU5DVVBfVFlQRV9BQ1RJVklUWV9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTIiwiU1lOQ1VQX1RZUEVfQ09OVEFDVFNfUFVMTCIsIlNZTkNVUF9UWVBFX0NPTlRBQ1RTX1BVU0giLCJTWU5DVVBfVFlQRV9BQ1RJVklUWV9QT1NTSUJMRV9WQUxVRVMiLCJTWU5DVVBfVFlQRV9DT05UQUNUX0ZJRUxEUyIsIlNZTkNVUF9UWVBFX0NPTlRBQ1RfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyIsIlNZTkNVUF9UWVBFX0NPTlRBQ1RfUE9TU0lCTEVfVkFMVUVTIiwiU1lOQ1VQX1RZUEVfUkVTT1VSQ0VTX1BVTEwiLCJTWU5DVVBfVFlQRV9SRVNPVVJDRVNfUFVTSCIsIlNZTkNVUF9UWVBFX1JFU09VUkNFX0ZJRUxEUyIsIlNZTkNVUF9UWVBFX1JFU09VUkNFX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMiLCJTWU5DVVBfVFlQRV9SRVNPVVJDRV9QT1NTSUJMRV9WQUxVRVMiLCJTWU5DVVBfVFlQRV9DT01NT05fUE9TU0lCTEVfVkFMVUVTIiwiU1lOQ1VQX1RZUEVfV09SS1NQQUNFX1NFVFRJTkdTIiwiU1lOQ1VQX1RZUEVfTUFQX1RJTEVTIiwiU1lOQ1VQX1RZUEVfR0FaRVRURUVSIiwiU1lOQ1VQX1RZUEVfQ0FMRU5EQVJTIiwiU1lOQ1VQX1NUQVRVU19TVUNDRVNTIiwiU1lOQ1VQX1NUQVRVU19GQUlMIiwiU1lOQ1VQX1NUQVRVU19QQVJUSUFMIiwiU1lOQ1VQX1NUQVRVU19DQU5DRUxFRCIsIlNZTkNVUF9TWU5DX1JFUVVFU1RFRF9BVCIsIlNZTkNVUF9TWU5DX1JFUVVFU1RFRF9CWSIsIlNZTkNVUF9EQVRFVElNRV9GSUVMRCIsIlNZTkNVUF9ESUZGX0xFRlRPVkVSIiwiU1lOQ1VQX0RFUEVOREVOQ1lfQ0hFQ0tfSU5URVJWQUwiLCJTWU5DVVBfREVUQUlMU19TWU5DRUQiLCJTWU5DVVBfREVUQUlMU19VTlNZTkNFRCIsIlNZTkNVUF9SRVNPVVJDRV9QVUxMX0JBVENIX1NJWkUiLCJTWU5DVVBfQUNUSVZJVElFU19QVUxMX0JBVENIX1NJWkUiLCJTWU5DVVBfQ09OVEFDVFNfUFVMTF9CQVRDSF9TSVpFIiwiQUNUSVZJVFlfU1RBVFVTX0RSQUZUIiwiQUNUSVZJVFlfU1RBVFVTX1VOVkFMSURBVEVEIiwiQUNUSVZJVFlfU1RBVFVTX1ZBTElEQVRFRCIsIkNVUlJFTkNZX0hPVVIiLCJERUZBVUxUX0NVUlJFTkNZIiwiUkFURV9TQU1FX0NVUlJFTkNZIiwiUkFURV9DVVJSRU5DWV9OT1RfRk9VTkQiLCJDVVJSRU5DWV9QQUlSIiwiVkVSU0lPTl9QQVRURVJOIiwiVkVSU0lPTl9QQVRURVJOX0dST1VQU19UT19FWFRSQUNUIiwiQU1QX0NPVU5UUllfTE9HTyIsIkFTU0VUU19ESVJFQ1RPUlkiLCJCQVNFXzY0X1BOR19QUkVGSVgiLCJUUkFOU1BBUkVOVF9GTEFHIiwiSEVMUF9QREZfRklMRU5BTUUiLCJIRUxQX0RJUiIsIkVORFNfV0lUSF9QVU5DVFVBVElPTl9SRUdFWCIsIk1BUF9USUxFU19ESVIiLCJUSUxFU19aSVBfRklMRSIsIk1BUF9NQVJLRVJfSU1BR0UiLCJNQVBfTUFSS0VSX1NIQURPVyIsIk1BUF9NQVJLRVJfQ0lSQ0xFX1JFRCIsIk1BUF9NQVJLRVJfQ0lSQ0xFX0dSRUVOIiwiUE9MWUdPTl9CQVNFX0NPTE9SIiwiREdfQ09NUEFOWV9OQU1FIiwiREdfQUREUkVTU18xIiwiREdfQUREUkVTU18yIiwiREdfQ09OVEFDVF9JTkZPIiwiTE9HX0RJUiIsIkxPR19GSUxFX05BTUUiLCJMT0dfRklMRV9FWFRFTlNJT04iLCJNRVNTQUdFX1RJTUVPVVQiLCJNRVNTQUdFX0RJU0FQUEVBUl9USU1FT1VUIiwiTUVTU0FHRV9DSEVDS19JTlRFUlZBTCIsIk1FU1NBR0VfQU5JTUFUSU9OX0RVUkFUSU9OIiwiSU5URVJOQUxfREFURV9GT1JNQVQiLCJNSU5fU1VQUE9SVEVEX1lFQVIiLCJNQVhfU1VQUE9SVEVEX1lFQVIiLCJVUERBVEVTX0RJUiIsIkNPTlRFTlRfRElTUE9TSVRJT05fSEVBREVSIiwiVVBEQVRFX1RNUF9GSUxFIiwiT1RIRVJfSUQiLCJOUl9TWU5DX0hJU1RPUllfRU5UUklFUyIsIk5SX0xPR19GSUxFUyIsIk9MRF9TWU5DX0xPR1NfRFVSQVRJT05fSVNPXzg2MDEiLCJOUl9PTERfU1lOQ19MT0dTX1RPX0tFRVBfTUlOSU1VTSIsIk1BU1RFUl9CUkFOQ0giLCJERVZFTE9QX0JSQU5DSCIsIlJFTEVBU0VfQlJBTkNIX1JFR0VYIiwiUkVMRUFTRV9CUkFOQ0hFUyIsIkRJU0FCTEVfQ0hBTkdFTE9HUyIsIm1vZHVsZSIsImZyZWV6ZSIsIlBVQkxJQ19WSUVXX0NIQU5HRV9QQVNTV09SRCIsIlBVQkxJQ19WSUVXX1RST1VCTEVfU0lHTl9JTiIsIkFDVElWSVRZX0RFTElWRVJZX1JBVEUiLCJBQ1RJVklUWV9QUk9KRUNUX0lEX0FORF9QTEFOTklORyIsIkFDVElWSVRZX0RVUkFUSU9OX09GX1BST0pFQ1QiLCJBQ1RJVklUWV9URUFNX0xFQURFUiIsIkFDVElWSVRZX1NBTUVfQVNfUFJPUE9TRURfU1RBUlRfREFURSIsIkFDVElWSVRZX1NBTUVfQVNfUFJPUE9TRURfQVBQUk9WQUxfREFURSIsIkFDVElWSVRZX0lERU5USUZJQ0FUSU9OIiwiQUNUSVZJVFlfTEFTVF9VUERBVEVEX0JZIiwiQUNUSVZJVFlfTEFTVF9VUERBVEVEX09OIiwiQUNUSVZJVFlfRlVORElORyIsIkFGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNIiwiQUNUSVZJVFlfU0VDVE9SUyIsIkFDVElWSVRZX1BSSU1BUllfU0VDVE9SUyIsIkFDVElWSVRZX1NFQ09OREFSWV9TRUNUT1JTIiwiQUNUSVZJVFlfU1RSVUNUVVJFUyIsIkFDVElWSVRZX1NUUlVDVFVSRVNfQUREX1NUUlVDVFVSRSIsIkFDVElWSVRZX09SR0FOSVpBVElPTlMiLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0RPTk9SX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfQkVORUZJQ0lBUllfQUdFTkNZIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19DT05UUkFDVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0VYRUNVVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0lNUExFTUVOVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUxBVEVEX0dPVkVSTk1FTlRfT1JHQU5JWkFUSU9OIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVAiLCJBRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19CRU5FRklDSUFSWV9BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfQ09OVFJBQ1RJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0RPTk9SX09SR0FOSVpBVElPTl9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19FWEVDVVRJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0lNUExFTUVOVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVHSU9OQUxfR1JPVVBfQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX1NFQ1RPUl9HUk9VUF9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfRlVORElOR19TRUFSQ0giLCJBQ1RJVklUWV9GVU5ESU5HX1NFQVJDSF9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9GVU5ESU5HX1NFTEVDVF9PUkdfVFlQRSIsIkFDVElWSVRZX1BST0dSQU0iLCJBQ1RJVklUWV9QTEFOTklORyIsIkFDVElWSVRZX0NPTlRBQ1QiLCJBQ1RJVklUWV9ET0NVTUVOVFNfQUREX0RPQ1VNRU5UIiwiQUNUSVZJVFlfRE9DVU1FTlRTX0FERF9XRUJMSU5LIiwiQUNUSVZJVFlfSVNTVUVTX0FERF9JU1NVRSIsIkFDVElWSVRZX0lTU1VFU19ERUxFVEVfSVNTVUUiLCJBQ1RJVklUWV9JU1NVRVNfQUREX01FQVNVUkUiLCJBQ1RJVklUWV9JU1NVRVNfREVMRVRFX01FQVNVUkUiLCJBQ1RJVklUWV9JU1NVRVNfQUREX0FDVE9SIiwiQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9BQ1RPUiIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9JTVBMRU1FTlRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1kiLCJBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRE9OT1JfT1JHQU5JWkFUSU9OIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAiLCJBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCIsIkFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSIsIkFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQ09OVFJBQ1RJTkdfQUdFTkNZIiwiQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1kiLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRVhFQ1VUSU5HX0FHRU5DWSIsIkFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAiLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfU0VDVE9SX0dST1VQIiwiQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSIsIkFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSIsIkFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0JFTkVGSUNJQVJZX0FHRU5DWSIsIkFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRUdJT05BTF9HUk9VUCIsIkFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCIsIk1URUZfUFJPSkVDVElPTlMiLCJNVEVGX1BST0pFQ1RJT05TX0FNT1VOVCIsIk1URUZfUFJPSkVDVElPTlNfQ1VSUkVOQ1kiLCJNVEVGX1BST0pFQ1RJT05TX1BST0pFQ1RJT04iLCJNVEVGX1BST0pFQ1RJT05TX0RBVEUiLCJVSVV0aWxzIiwiaGFzaCIsImkiLCJsZW5ndGgiLCJjaGFyQ29kZUF0Iiwic3RyaW5nVG9JZCIsIkRhdGUiLCJub3ciLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJ0cnVuYyIsInRleHQiLCJyZXBsYWNlIiwiY2hhciIsInRvVXBwZXJDYXNlIiwib2JqIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiQUNUSVZJVFlfQlVER0VUIiwiQUNUSVZJVFlfU1RBVFVTIiwiU1RBVFVTX1JFQVNPTiIsIkZJTkFOQ0lBTF9JTlNUUlVNRU5UIiwiVFlQRV9PRl9JTVBMRU1FTlRBVElPTiIsIk9CSkVDVElWRSIsIlJFU1VMVFMiLCJCVURHRVRfQ09ERV9QUk9KRUNUX0lEIiwiQUNUVUFMX0FQUFJPVkFMX0RBVEUiLCJGVU5ESU5HUyIsIkZVTkRJTkdfRE9OT1JfT1JHX0lEIiwiSVNfRFJBRlQiLCJPUkdfUk9MRV9PUkdfSUQiLCJBRERJVElPTkFMX0lORk8iLCJQUklNQVJZX1NFQ1RPUlMiLCJTRUNPTkRBUllfU0VDVE9SUyIsIlRFUlRJQVJZX1NFQ1RPUlMiLCJUQUdfU0VDVE9SUyIsIlNFQ1RPUiIsIlNFQ1RPUl9QRVJDRU5UQUdFIiwiRklOQU5DSU5HX0lOU1RSVU1FTlQiLCJNT0RBTElUSUVTIiwiTElORV9NSU5JU1RSWV9SQU5LIiwiR09WRVJOTUVOVF9BR1JFRU1FTlRfTlVNQkVSIiwiRlVORElOR19TVEFUVVMiLCJMT0NBVElPTlMiLCJMT0NBVElPTiIsIkxPQ0FUSU9OX1BFUkNFTlRBR0UiLCJJTVBMRU1FTlRBVElPTl9MT0NBVElPTiIsIklNUExFTUVOVEFUSU9OX0xFVkVMIiwiQVBQUk9WQUxfU1RBVFVTIiwiQVBQUk9WRURfQlkiLCJBUFBST1ZBTF9EQVRFIiwiVFlQRV9PRl9BU1NJU1RBTkNFIiwiRVhQRU5ESVRVUkVfQ0xBU1MiLCJGVU5ESU5HX0RFVEFJTFMiLCJNT0RFX09GX1BBWU1FTlQiLCJGVU5ESU5HX0NMQVNTSUZJQ0FUSU9OX0RBVEUiLCJBR1JFRU1FTlQiLCJET05PUl9PQkpFQ1RJVkUiLCJDT05ESVRJT05TIiwiQUdSRUVNRU5UX0NPREUiLCJBR1JFRU1FTlRfVElUTEUiLCJQUk9KRUNUX0NBVEVHT1JZIiwiUFJPSkVDVF9JTVBMRU1FTlRJTkdfVU5JVCIsIk9SR0FOSVpBVElPTiIsIlBFUkNFTlRBR0UiLCJBTVBfT1JHQU5JWkFUSU9OX1JPTEVfSUQiLCJST0xFIiwiRVhFQ1VUSU5HX0FHRU5DWSIsIkNPTlRSQUNUSU5HX0FHRU5DWSIsIkJFTkVGSUNJQVJZX0FHRU5DWSIsIklNUExFTUVOVElOR19BR0VOQ1kiLCJSRVNQT05TSUJMRV9PUkdBTklaQVRJT04iLCJET05PUl9PUkdBTklaQVRJT04iLCJSRUdJT05BTF9HUk9VUCIsIlNFQ1RPUl9HUk9VUCIsIkJVREdFVFMiLCJCVURHRVRfQ09ERSIsIkJVREdFVF9PUkdBTklaQVRJT05fQ09ERSIsIkFSQ0hJVkVEIiwiVFJBTlNBQ1RJT05fREFURSIsIlRSQU5TQUNUSU9OX1RZUEUiLCJDT01NSVRNRU5UUyIsIkRJU0JVUlNFTUVOVFMiLCJFWFBFTkRJVFVSRVMiLCJFU1RJTUFURURfRElTQlVSU0VNRU5UUyIsIlRSQU5TQUNUSU9OX0FNT1VOVCIsIkFESlVTVE1FTlRfVFlQRSIsIkFDVFVBTF9TVEFSVF9EQVRFIiwiUFJPUE9TRURfU1RBUlRfREFURSIsIkFDVFVBTF9DT01QTEVUSU9OX0RBVEUiLCJDT05UUkFDVElOR19EQVRFIiwiRElTQlVSU0VNRU5UX0RBVEUiLCJQUk9QT1NFRF9BUFBST1ZBTF9EQVRFIiwiT1JJR0lOQUxfQ09NUExFVElPTl9EQVRFIiwiUFJPUE9TRURfQ09NUExFVElPTl9EQVRFIiwiRklOQUxfREFURV9GT1JfRElTQlVSU0VNRU5UUyIsIkZJTkFMX0RBVEVfRk9SX0NPTlRSQUNUSU5HIiwiRUZGRUNUSVZFX0ZVTkRJTkdfREFURSIsIkZVTkRJTkdfQ0xPU0lOR19EQVRFIiwiUkFUSUZJQ0FUSU9OX0RBVEUiLCJNQVRVUklUWSIsIkxBU1RfQVVESVRfREFURSIsIlNJR05BVFVSRV9EQVRFIiwiSFVNQU5JVEFSSUFOX0FJRCIsIkRJU0FTVEVSX1JFU1BPTlNFIiwiUFJPR1JBTSIsIlBST0dSQU1fUEVSQ0VOVEFHRSIsIlBST0dSQU1fU0VUVElOR1MiLCJOQVRJT05BTF9QTEFOX09CSkVDVElWRSIsIlBSSU1BUllfUFJPR1JBTVMiLCJTRUNPTkRBUllfUFJPR1JBTVMiLCJURVJUSUFSX1BST0dSQU1TIiwiR09WRVJOTUVOVF9BUFBST1ZBTF9QUk9DRURVUkVTIiwiSk9JTlRfQ1JJVEVSSUEiLCJURUFNIiwiUkVKRUNURURfSUQiLCJJTlRFUk5BTF9JRCIsIkFNUF9JRCIsIlBST0pFQ1RfVElUTEUiLCJERVNDUklQVElPTiIsIk1PRElGSUVEX0JZIiwiTU9ESUZJRURfT04iLCJDUkVBVEVEX0JZIiwiQ1JFQVRFRF9PTiIsIkxBU1RfSU1QT1JURURfQlkiLCJDTElFTlRfQ0hBTkdFX0lEIiwiQ0xJRU5UX0NSRUFURURfT04iLCJDTElFTlRfVVBEQVRFRF9PTiIsIklTX1BVU0hFRCIsIkFDVElWSVRZX0dST1VQIiwiVkVSU0lPTiIsIlBST0pFQ1RfQ09NTUVOVFMiLCJMRVNTT05TX0xFQVJORUQiLCJQUk9KRUNUX0lNUEFDVCIsIkFDVElWSVRZX1NVTU1BUlkiLCJDT05ESVRJT05BTElUSUVTIiwiUFJPSkVDVF9NQU5BR0VNRU5UIiwiQV9DX0NIQVBURVIiLCJDUklTX05VTUJFUiIsIklBVElfSURFTlRJRklFUiIsIkFDVElWSVRZX0lOVEVSTkFMX0lEUyIsIkhJRVJBUkNISUNBTF9WQUxVRSIsIkhJRVJBUkNISUNBTF9WQUxVRV9QQVJUUyIsIkhJRVJBUkNISUNBTF9WQUxVRV9ERVBUSCIsIlBQQ19BTU9VTlQiLCJSUENfQU1PVU5UIiwiUFBDX0FOTlVBTF9CVURHRVRTIiwiQU1PVU5UIiwiQ1VSUkVOQ1kiLCJGVU5ESU5HX0RBVEUiLCJDT01QT05FTlRTIiwiVE9UQUxfTlVNQkVSX09GX0ZVTkRJTkdfU09VUkNFUyIsIlNPVVJDRV9ST0xFIiwiQU1QX0ZVTkRJTkdfSUQiLCJJU1NVRVMiLCJJU1NVRV9EQVRFIiwiSVNTVUVfTkFNRSIsIk1FQVNVUkVTIiwiTUVBU1VSRV9OQU1FIiwiTUVBU1VSRV9EQVRFIiwiQUNUT1JTIiwiQUNUT1JfTkFNRSIsIlNUUlVDVFVSRVMiLCJTVFJVQ1RVUkVTX1RJVExFIiwiU1RSVUNUVVJFU19ERVNDUklQVElPTiIsIlNUUlVDVFVSRVNfTEFUSVRVREUiLCJTVFJVQ1RVUkVTX0xPTkdJVFVERSIsIlNUUlVDVFVSRVNfQ09MT1IiLCJTVFJVQ1RVUkVTX0xBVCIsIlNUUlVDVFVSRVNfTE5HIiwiU1RSVUNUVVJFU19TSEFQRSIsIlNUUlVDVFVSRVNfUE9JTlQiLCJTVFJVQ1RVUkVTX1BPTFlHT04iLCJTVFJVQ1RVUkVTX1BPTFlMSU5FIiwiU1RSVUNUVVJFU19DT09SRElOQVRFUyIsIkNPTVBPTkVOVF9UWVBFIiwiQ09NUE9ORU5UX1RJVExFIiwiQ09NUE9ORU5UX0ZVTkRJTkciLCJDT01QT05FTlRfREVTQ1JJUFRJT04iLCJDT01QT05FTlRfT1JHQU5JWkFUSU9OIiwiRlVORElOR19BTU9VTlRfSUQiLCJFWFRSQV9JTkZPIiwiVkFMVUUiLCJBQ1JPTllNIiwiVFlQRV9PRl9DT09QRVJBVElPTiIsIkFOTlVBTF9QUk9KRUNUX0JVREdFVF9JRCIsIlRZUEUiLCJZRUFSIiwiR1JPVVBfVkVSU0lPTkVEX0ZVTkRJTkciLCJBQ1RJVkVfTElTVCIsIkFDVElWRSIsIkRFTEVHQVRFRF9DT09QRVJBVElPTiIsIkRFTEVHQVRFRF9QQVJUTkVSIiwiRklOQU5DSU5HX0lEIiwiRElTQlVSU0VNRU5UX09SREVSX0lEIiwiUExFREdFIiwiQ0FQSVRBTF9TUEVORElOR19QRVJDRU5UQUdFIiwiUkVQT1JUSU5HX0RBVEUiLCJSRUNJUElFTlRfUk9MRSIsIlJFQ0lQSUVOVF9PUkdBTklaQVRJT04iLCJURU1QT1JBTF9JRCIsIk1JTklTVFJZX0NPREUiLCJQUk9KRUNUX0NPREUiLCJGWSIsIklORElSRUNUX09OX0JVREdFVCIsIklNUExFTUVOVEFUSU9OX0xFVkVMU19FWFRSQV9JTkZPIiwiSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fRVhUUkFfSU5GTyIsIkRPTk9SX0NPTlRBQ1QiLCJQUk9KRUNUX0NPT1JESU5BVE9SX0NPTlRBQ1QiLCJTRUNUT1JfTUlOSVNUUllfQ09OVEFDVCIsIk1PRkVEX0NPTlRBQ1QiLCJJTVBMRU1FTlRJTkdfRVhFQ1VUSU5HX0FHRU5DWV9DT05UQUNUIiwiQ09OVEFDVCIsIk9SR0FOSVpBVElPTl9HUk9VUCIsIkZJWEVEX0VYQ0hBTkdFX1JBVEUiLCJQUklNQVJZX0NPTlRBQ1QiLCJBQ1RJVklUWV9ET0NVTUVOVFMiLCJET0NVTUVOVF9UWVBFIiwiSVNPMiIsIlBST0pFQ1RJT04iLCJQSVBFTElORSIsIlBST0pFQ1RJT05fREFURSIsIlNBTUVfQVNfUFJPUE9TRURfU1RBUlRfREFURV9MQUJFTCIsIlNBTUVfQVNfUFJPUE9TRURfQVBQUk9WQUxfREFURV9MQUJFTCIsIkRFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfUFJFU0VOVCIsIkRFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfVkFMSUQiLCJERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX1BSRVNFTlQiLCJERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX1ZBTElEIiwiREVQRU5ERU5DWV9QUk9KRUNUX0NPREVfT05fQlVER0VUIiwiREVQRU5ERU5DWV9PTl9CVURHRVQiLCJERVBFTkRFTkNZX1RSQU5TQUNUSU9OX1BSRVNFTlQiLCJERVBFTkRFTkNZX0NPTVBPTkVOVF9GVU5ESU5HX09SR19WQUxJRCIsIkFQX1NFQ1RJT05fSURTIiwia2V5IiwiZm1QYXRoIiwiRk1DIiwic2VjdGlvblBhdGgiLCJBQ1RJVklUWV9JTlRFUk5BTF9JRFNfQ09MUyIsIkFDVElWSVRZX1BMQU5OSU5HX0NPTFMiLCJBQ1RJVklUWV9MT0NBVElPTl9DT0xTIiwiQUNUSVZJVFlfRlVORElOR19DT0xTIiwiQUNUSVZJVFlfQ09OVEFDVF9DT0xTIiwiQVBfRlVORElOR1NfVEFCTEVfQ09MUyIsIk1VTFRJX1NFTEVDVF9NSU5fU0laRSIsIk1VTFRJX1NFTEVDVF9NQVhfU0laRSIsInRvRmllbGROYW1lcyIsImxpc3RPZk5hbWVzIiwibWFwIiwidG9GaWVsZE5hbWUiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJ0b09yaWdpbmFsTGFiZWwiLCJmaWVsZE5hbWUiLCJjYXBpdGFsaXplIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU0VDVVJJVFkiLCJOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9ORVRXT1JLIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU1lOQ1VQIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfR0VORVJBTCIsIk5PVElGSUNBVElPTl9PUklHSU5fREFUQUJBU0UiLCJOT1RJRklDQVRJT05fT1JJR0lOX0FVVEhFTlRJQ0FUSU9OIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0VfRklMVEVSIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0UiLCJOT1RJRklDQVRJT05fT1JJR0lOX1NZTkNVUF9QUk9DRVNTIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9DVVJSRU5DWV9NQU5BR0VSIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9EQVRFUyIsIk5PVElGSUNBVElPTl9PUklHSU5fQUNUSVZJVFkiLCJOT1RJRklDQVRJT05fT1JJR0lOX1JFU09VUkNFIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9JMThORVhUIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEVfQ0hFQ0siLCJOT1RJRklDQVRJT05fT1JJR0lOX1VQREFURSIsIk5PVElGSUNBVElPTl9PUklHSU5fU0VUVVAiLCJOT1RJRklDQVRJT05fT1JJR0lOX1NFVFRJTkdTIiwiTk9USUZJQ0FUSU9OX1NFVkVSSVRZX1dBUk5JTkciLCJOT1RJRklDQVRJT05fU0VWRVJJVFlfSU5GTyIsIk5PVElGSUNBVElPTl9TRVZFUklUWV9FUlJPUiIsIk5PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9NSU5PUiIsIk5PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9CTE9DS0VSIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9XUk9OR19NRVRIT0RfVVNBR0UiLCJFUlJPUl9DT0RFX05PX0NPTk5FQ1RJVklUWSIsIkVSUk9SX0NPREVfQUNDRVNTX0RFTklFRCIsIk1TR19JTlZBTElEX1VSTCIsIk1TR19USU1FT1VUIiwiTVNHX1VOS05PV05fTkVUV09SS19FUlJPUiIsIk1TR19BTVBfVU5SRUFDSEFCTEUiLCJHRU5FUkFMX0NPTk5FQ1RJT05fRVJST1JTIiwiRE9OT1JfQUdFTkNZIiwiT1JHX1JPTEVfTkFNRVMiLCJBQ1RVQUwiLCJQTEFOTkVEIiwiQUNUVUFMX0NPTU1JVE1FTlRTIiwiQWN0aXZpdHlDb25zdGFudHMiLCJBQ1RVQUxfRElTQlVSU0VNRU5UUyIsIkFDVFVBTF9FWFBFTkRJVFVSRVMiLCJQTEFOTkVEX0NPTU1JVE1FTlRTIiwiUExBTk5FRF9ESVNCVVJTRU1FTlRTIiwiUExBTk5FRF9FWFBFTkRJVFVSRVMiLCJVTkFMTE9DQVRFRF9ESVNCVVJTRU1FTlRTIiwiREVMSVZFUllfUkFURSIsIkFESlVTVE1FTlRfVFlQRVMiLCJBREpVU1RNRU5UX1RZUEVTX0FQX09SREVSIiwiTkVXX0FDVElWSVRZX0lEIiwiUFJPUE9TRURfUFJPSkVDVF9DT1NUIiwiUkVWSVNFRF9QUk9KRUNUX0NPU1QiLCJBQ1JPTllNX0RPTk9SX09SR0FOSVpBVElPTiIsIkFDUk9OWU1fRVhFQ1VUSU5HX0FHRU5DWSIsIkFDUk9OWU1fSU1QTEVNRU5USU5HX0FHRU5DWSIsIkFDUk9OWU1fQkVORUZJQ0lBUllfQUdFTkNZIiwiQUNST05ZTV9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04iLCJBUFBST1ZBTF9TVEFUVVNfQ1JFQVRFRCIsIkFQUFJPVkFMX1NUQVRVU19BUFBST1ZFRCIsIkFQUFJPVkFMX1NUQVRVU19FRElURUQiLCJBUFBST1ZBTF9TVEFUVVNfU1RBUlRFRF9BUFBST1ZFRCIsIkFQUFJPVkFMX1NUQVRVU19TVEFSVEVEIiwiQVBQUk9WQUxfU1RBVFVTX05PVF9BUFBST1ZFRCIsIkFQUFJPVkFMX1NUQVRVU19SRUpFQ1RFRCIsIk9OX0JVREdFVCIsIklOVEVSTkFUSU9OQUwiLCJDT1VOVFJZIiwiUkVMQVRFRF9ET0NVTUVOVFMiLCJUTVBfRU5USVRZX1ZBTElEQVRPUiIsIkFMV0FZU19SRVFVSVJFRCIsIkZVTkRJTkdfQUNUSVZFX0xJU1QiLCJGVU5ESU5HX1RZUEVfT0ZfQVNTSVNUQU5DRSIsIkZVTkRJTkdfREVUQUlMU19QQVRIIiwiRlVORElOR19DVVJSRU5DWV9QQVRIIiwiTVRFRl9DVVJSRU5DWV9QQVRIIiwiUFBDX0NVUlJFTkNZX1BBVEgiLCJSUENfQ1VSUkVOQ1lfUEFUSCIsIkNPTVBPTkVOVF9DVVJSRU5DWV9QQVRIIiwiRElTQlVSU0VNRU5UU19QQVRIIiwiQUNUSVZJVFlfSU5URVJOQUxfSURTX0lOVEVSTkFMX0lEX1BBVEgiLCJBQ1RJVklUWV9JTlRFUk5BTF9JRFNfT1JHQU5JWkFUSU9OX1BBVEgiLCJMT0NBVElPTl9QQVRIIiwiTkFUSU9OQUxfUExBTl9PQkpFQ1RJVkVfUEFUSCIsIlBSSU1BUllfUFJPR1JBTV9QQVRIIiwiU0VDT05EQVJZX1BST0dSQU1fUEFUSCIsIlBSSU1BUllfU0VDVE9SX1BBVEgiLCJTRUNPTkRBUllfU0VDVE9SX1BBVEgiLCJURVJUSUFSWV9TRUNUT1JfUEFUSCIsIkRPTk9SX09SR0FOSVpBVElPTlNfUEFUSCIsIlJFU1BPTlNJQkxFX09SR0FOSVpBVElPTl9CVURHRVRTX1BBVEgiLCJSRUxBVEVEX09SR1NfUEFUSFMiLCJWYWx1ZUNvbnN0YW50cyIsIm9yZ1JvbGUiLCJSRUxBVEVEX09SR1NfT1JHQU5JWkFUSU9OX1BBVEhTIiwiUklDSF9URVhUX0ZJRUxEUyIsIlNldCIsIlBBVEhTX1dJVEhfVFJFRV9TVFJVQ1RVUkUiLCJQQVRIU19XSVRIX0hJRVJBUkNISUNBTF9WQUxVRVMiLCJBQ1RJVklUWV9DT05UQUNUX1BBVEhTIiwiVFJBTlNBQ1RJT05fVFlQRVMiLCJUUkFOU0FDVElPTl9UWVBFU19PUkRFUkVEIiwiRlVORElOR19UUkFOU0FDVElPTl9UWVBFUyIsIkFESlVTVE1FTlRfVFlQRV9QQVRIUyIsInR0IiwiRlVORElOR19DVVJSRU5DWV9QQVRIUyIsIlBBVEhTX0ZPUl9BQ1RJVklUWV9DVVJSRU5DWSIsIlBBVEhTX0ZPUl9DVVJSRU5DWSIsIkRPX05PVF9IWURSQVRFX0ZJRUxEU19MSVNUIiwiQUxURVJOQVRFX1ZBTFVFX1BBVEgiLCJBQ1RJVklUWV9GSUVMRFNfRk1fUEFUSCIsIkZlYXR1cmVNYW5hZ2VyQ29uc3RhbnRzIiwiUFJFRklYX0FDVElWSVRZIiwiUFJFRklYX0NPTlRBQ1QiLCJQUkVGSVhfUkVTT1VSQ0UiLCJQUkVGSVhfQ09NTU9OIiwiUFJFRklYX0xJU1QiLCJGSUVMRF9QQVRIIiwiRklFTERfT1BUSU9OUyIsIkZJRUxEX09QVElPTl9VU0FCTEUiLCJMSVNUX01BWF9TSVpFIiwiUkVHRVhfUEFUVEVSTiIsIkZJRUxEX05BTUUiLCJGSUVMRF9MQUJFTCIsIkZJRUxEX1JFUVVJUkVEIiwiRklFTERfVU5JUVVFX0NPTlNUUkFJTlQiLCJGSUVMRF9UWVBFIiwiRklFTERfTEVOR1RIIiwiRklFTERfUEVSQ0VOVEFHRSIsIkZJRUxEX1BFUkNFTlRBR0VfQ09OU1RSQUlOVCIsIkZJRUxEX0lURU1fVFlQRSIsIkZJRUxEX0lNUE9SVEFCTEUiLCJGSUVMRF9JRF9PTkxZIiwiRklFTERfTVVMVElQTEVfVkFMVUVTX0FMTE9XRUQiLCJGSUVMRF9UUkVFX0NPTExFQ1RJT04iLCJGSUVMRF9DSElMRFJFTiIsIkZJRUxEX0RFUEVOREVOQ0lFUyIsIkZJRUxEX1RZUEVfTElTVCIsIkZJRUxEX1RZUEVfT0JKRUNUIiwiRklFTERfVFlQRV9TVFJJTkciLCJGSUVMRF9UWVBFX0xPTkciLCJGSUVMRF9UWVBFX0ZMT0FUIiwiRklFTERfVFlQRV9CT09MRUFOIiwiRklFTERfVFlQRV9EQVRFIiwiRklFTERfVFlQRV9USU1FU1RBTVAiLCJsb2dnZXIiLCJGaWVsZHNNYW5hZ2VyIiwiZmllbGRzTWFuYWdlciIsIkxvZ2dlck1hbmFnZXIiLCJuZXdGaWVsZHNNYW5hZ2VyIiwiYXNzaWduIiwiZmllbGRzRGVmIiwicG9zc2libGVWYWx1ZXNDb2xsZWN0aW9uIiwiY3VycmVudExhbmd1YWdlIiwiZGVidWciLCJfZmllbGRzRGVmIiwiX3Bvc3NpYmxlVmFsdWVzTWFwIiwicHYiLCJpZCIsIkZQQyIsIl9maWVsZFBhdGhzRW5hYmxlZFN0YXR1c01hcCIsIl9sYW5nIiwiQ29uc3RhbnRzIiwiX2RlZmF1bHRMYW5nIiwiY2xlYW51cCIsImZkIiwiY2hpbGRyZW4iLCJmaWVsZF9sYWJlbCIsImtleXMiLCJsYW5nIiwiZmllbGRQYXRoIiwidmFsdWVzIiwicGF0aFBhcnRzIiwiaXNGaWVsZFBhdGhFbmFibGVkIiwidW5kZWZpbmVkIiwiX2J1aWxkRmllbGRQYXRoU3RhdHVzIiwic3BsaXQiLCJjdXJyZW50VHJlZSIsImlzRGlzYWJsZWQiLCJzb21lIiwiZmluZCIsImZpZWxkIiwiZmllbGRfbmFtZSIsInBhcnQiLCJvcmlnVmFsdWUiLCJ0cm5WYWx1ZSIsIm9wdGlvbnMiLCJvcHRpb24iLCJvcHQiLCJ0cmFuc2xhdGlvbnMiLCJnZXRGaWVsZERlZiIsImRlcGVuZGVuY2llcyIsImZpZWxkUGF0aHMiLCJfZ2V0RmllbGRQYXRoc0J5RGVwZW5kZW5jaWVzIiwiY3VycmVudFBhdGgiLCJoYXNEZXBlbmRlbmN5IiwiaW5jbHVkZXMiLCJkZXAiLCJnZXRPcHRpb25UcmFuc2xhdGlvbiIsImdldFZhbHVlIiwicGFydHMiLCJuZXdMaXN0IiwibmV3RWxlbWVudCIsImN1cnJlbnQiLCJjb25jYXQiLCJ2YWwiLCJDTElFTlRfQ0hBTkdFX0lEX1BSRUZJWCIsIk5BTUUiLCJMQVNUX05BTUUiLCJUSVRMRSIsIk9SR0FOSVpBVElPTl9OQU1FIiwiRlVOQ1RJT04iLCJPRkZJQ0VfQUREUkVTUyIsIkNSRUFUT1IiLCJPUkdBTklTQVRJT05fQ09OVEFDVFMiLCJPUkdBTklTQVRJT04iLCJFTUFJTCIsIlBIT05FIiwiRVhURU5TSU9OX1ZBTFVFIiwiRkFYIiwiVE1QX0ZPUk1fSUQiLCJUTVBfVU5JUVVFX0lEIiwiVE1QX0hZRFJBVEVEIiwiVE1QX0VSUk9SUyIsIlRNUF9DT05UQUNUX0xPQURFRCIsIlRNUF9DT05UQUNUX0xPQURJTkciLCJUTVBfRklFTERTIiwiQ3VycmVuY3lSYXRlc01hbmFnZXIiLCJjdXJyZW5jeVJhdGVzIiwiYmFzZUN1cnJlbmN5IiwiZGF0ZVV0aWxzIiwiZXJyb3JOb3RpZmljYXRpb25IZWxwZXIiLCJfY3VycmVuY3lSYXRlcyIsIl9iYXNlQ3VycmVuY3kiLCJfY3Vycm5jaWVzV2l0aEV4Y2hhbmdlUmF0ZXMiLCJfZ2V0Q3VycmVuY2llc1dpdGhFeGNoYW5nZVJhdGVzIiwiX3RyYW5zbGF0ZSIsIl9kYXRlVXRpbHMiLCJfZXJyb3JOb3RpZmljYXRpb25IZWxwZXIiLCJjdXJyZW5jeUZyb20iLCJjdXJyZW5jeVRvIiwiZGF0ZVRvRmluZCIsImZpeGVkRXhjaGFuZ2VSYXRlIiwiY29udmVydEN1cnJlbmN5IiwidGltZURhdGVUb0ZpbmQiLCJnZXRUaW1lIiwiY3VycmVuY2llc1RvU2VhcmNoRGlyZWN0IiwiaXRlbSIsImZyb20iLCJ0byIsImdldEV4Y2hhbmdlUmF0ZSIsImN1cnJlbmNpZXNUb1NlYXJjaEludmVyc2UiLCJjb252ZXJ0VmlhQmFzZUN1cnJlbmN5IiwiX2dldEN1cnJlbmN5RXJyb3IiLCJmdW5kaW5nRGV0YWlscyIsInRvdGFsIiwiY29udmVydFRyYW5zYWN0aW9uQW1vdW50VG9DdXJyZW5jeSIsImZ1bmRpbmdEZXRhaWwiLCJhbW91bnQiLCJkYXRlIiwiY3VycmVuY3lSYXRlIiwiZm9ybWF0RGF0ZUZvckFQSSIsInRyYW5zYWN0aW9uRGF0ZSIsInRyYW5zYWN0aW9uQW1vdW50IiwiY29udmVydEFtb3VudFRvQ3VycmVuY3kiLCJjdXJyZW5jaWVzVG9TZWFyY2giLCJsb3dlckVuZCIsImhpZ2hlckVuZCIsInJhdGVzIiwibWlkZGxlIiwiZmxvb3IiLCJkaWZmZXJlbmNlIiwiYWJzIiwiZGlmZmVyZW5jZTEiLCJyYXRlIiwiZXJyb3JNZXNhZ2UiLCJub3RpZkVycm9yQ3VycmVuY3kiLCJjcmVhdGVOb3RpZmljYXRpb24iLCJFcnJvckNvbnN0YW50cyIsInJhdGVGcm9tVG9CYXNlIiwicmF0ZUJhc2VUb1RvIiwicmF0ZVRvVG9CYXNlIiwicmF0ZUJhc2VUb0Zyb20iLCJjcyIsImFkZCIsImV4Y2hhbmdlUmF0ZXMiLCJQb3NzaWJsZVZhbHVlc01hbmFnZXIiLCJsYW5nU3RhdGUiLCJfbGFuZ1N0YXRlIiwiTG9nZ2VyIiwiX2xvZ2dlciIsImhPcHRpb25zIiwiYnVpbGRIaWVyYXJjaGljYWxEYXRhIiwic2VsZWN0ZWRJZCIsInZhbHVlUGFydHMiLCJnZXRIaWVyYXJjaGljYWxWYWx1ZSIsImZvcm1hdFZhbHVlUGFydHMiLCJuYW1lUGFydHMiLCJwYXJlbnRJZCIsInJldmVyc2UiLCJfZmlsbEhpZXJhcmNoaWNhbERlcHRoIiwiZXJyb3IiLCJkZXB0aCIsInBhcmVudCIsIm8iLCJyZXNWYWwiLCJkZWZhdWx0TGFuZyIsImN1cnJlbmN5UmF0ZXNNYW5hZ2VyIiwiZmlsdGVycyIsImlzT1JGaWx0ZXIiLCJpc0xvY2F0aW9ucyIsImlzQ3VycmVuY3kiLCJoYXMiLCJ2aXNpYmxlIiwiZGlzcGxheUhpZXJhcmNoaWNhbFZhbHVlIiwiaXNDdXJyZW5jeU9wdGlvblVzYWJsZSIsImZpbHRlckJ5IiwiZmlsdGVyIiwib3B0aW9uRGF0YVRvQ2hlY2siLCJwYXRoIiwiaGFzRXhjaGFuZ2VSYXRlcyIsImN1cnJlbmNpZXNXaXRoRXhjaGFuZ2VSYXRlcyIsImlzQWN0aXZlIiwiZXh0cmFfaW5mbyIsImFjdGl2ZSIsIm9wdGlvbnNPYmoiLCJyZXZlcnNlU29ydE9wdGlvbnMiLCJhZGRlZCIsIm9wdGlvbnNMaXN0IiwiaWRzU3RhY2siLCJwb3AiLCJyZXZlcnNlU29ydGVkQ2hpbGRyZW4iLCJGRUFUVVJFX01BTkFHRVIiLCJGZWF0dXJlTWFuYWdlciIsImZtVHJlZSIsIl9mbVRyZWUiLCJsb2dnZXJNYW5hZ2VyIiwib25seUxhc3RTZWdtZW50IiwiX2xvZ2dlck1hbmFnZXIiLCJsYXN0Rk1TdWJUcmVlIiwic2VnbWVudHMiLCJfZ2V0UGF0aFNlZ21lbnRzIiwiZm91bmRMYXN0Rk1TdWJUcmVlIiwiZXZlcnkiLCJzZWdtZW50IiwiX19lbmFibGVkIiwiZm1TZXR0aW5nIiwiZmluZEZNU2V0dGluZyIsInJlZHVjZSIsImN1cnJlbnRGTVNldHRpbmciLCJlbmFibGVkIiwiY3VycmVudEZNVHJlZSIsInNlZ21lbnRGTSIsIl9jdXJyZW50Rk0iLCJpc0ZNU2V0dGluZ0VuYWJsZWQiLCJoYXNGTVNldHRpbmciLCJBUExhYmVsIiwibGFiZWwiLCJkb250VHJhbnNsYXRlIiwibGFiZWxDbGFzcyIsInRvb2x0aXAiLCJnZXRDb250ZW50IiwiQVBGaWVsZCIsIlRhYmxpZnkiLCJjb250ZW50IiwiY29scyIsImMiLCJyb3dzIiwiY2VpbCIsInRhYmxlQ29udGVudCIsInJvd0NvbnRlbnQiLCJqIiwic3RyaW5nVG9VbmlxdWVJZCIsImNvbHVtbnMiLCJjZWxsV2lkdGgiLCJjZWxsd2lkdGhTdHlsZSIsInRhYmxpZnlfb3V0ZXJfY2VsbCIsInRhYmxpZnlfaW5uZXJfY2VsbCIsImZsZXgiLCJudW1iZXIiLCJBUFBlcmNlbnRhZ2VGaWVsZCIsInJhd051bWJlclRvRm9ybWF0dGVkU3RyaW5nIiwicGVyY2VudGFnZSIsInRpdGxlQ2xhc3MiLCJhbGlnblJpZ2h0IiwiQVBQZXJjZW50YWdlTGlzdCIsImxpc3RGaWVsZCIsInZhbHVlRmllbGQiLCJwZXJjZW50YWdlRmllbGQiLCJsaXN0VGl0bGUiLCJnZXRJdGVtVGl0bGUiLCJhY3Rpdml0eUZpZWxkc01hbmFnZXIiLCJwZXJjZW50VGl0bGVDbGFzcyIsImFjdGl2aXR5IiwidGFibGlmeSIsInBlcmNlbnRWYWx1ZUNsYXNzIiwiaXRlbXMiLCJpc0xpc3RFbmFibGVkIiwiYSIsImIiLCJpdGVtVGl0bGUiLCJsb2NhbGVDb21wYXJlIiwibm9kYXRhIiwiaW5zdGFuY2VPZiIsIlNlY3Rpb24iLCJDb21wb3NlZFNlY3Rpb24iLCJwYXJhbXMiLCJjb250ZXh0IiwiRGF0ZVV0aWxzIiwidXNlRW5jYXBzdWxhdGVIZWFkZXIiLCJzaG93SWZOb3RBdmFpbGFibGUiLCJOQU9wdGlvbnMiLCJvcHRpb25zXyIsIkZpZWxkUGF0aENvbnN0YW50cyIsIm5vVGl0bGUiLCJnZXRGaWVsZExhYmVsVHJhbnNsYXRpb24iLCJ2YWx1ZVBhdGgiLCJmaWVsZFBhdGhQYXJ0cyIsImFsdGVybmF0ZVBhdGgiLCJmaWVsZERlZiIsImZpZWxkX3R5cGUiLCJjcmVhdGVGb3JtYXR0ZWREYXRlIiwicmUiLCJ0ZXN0IiwidHJpbSIsImNvbXBvc2VkU2VjdGlvbiIsInN0YXRlIiwiYnVpbGRTaW1wbGVGaWVsZCIsImJpbmQiLCJTZWN0aW9uVGl0bGUiLCJncm91cENsYXNzIiwic0lEIiwidGl0bGVEZXRhaWxzIiwiY29tcG9zZWRDbGFzcyIsIm9uZU9mVHlwZSIsImNvbnRleHRUeXBlcyIsImRlZmF1bHRQcm9wcyIsInNlY3Rpb25fdGl0bGVfY2xhc3MiLCJzZWN0aW9uX2dyb3VwX2NsYXNzIiwic2VjdGlvbl9maWVsZF9uYW1lIiwic2VjdGlvbl9maWVsZF92YWx1ZSIsIkZ1bmRpbmdTdW1tYXJ5IiwibWVhc3VyZXNUb3RhbHMiLCJhY0VuYWJsZWQiLCJhZEVuYWJsZWQiLCJpc0ZpZWxkUGF0aEJ5UGFydHNFbmFibGVkIiwidHJuVHlwZSIsInRybkFkak9wdFBhdGgiLCJhdE9wdGlvbnMiLCJnZXRQb3NzaWJsZVZhbHVlc09wdGlvbnMiLCJhY3Rpdml0eUZ1bmRpbmdUb3RhbHMiLCJnZXRUb3RhbHMiLCJhZGpUeXBlIiwiYWRqVHlwZUFjdHVhbFRybiIsImV4cGVuZGl0dXJlc0FyZUVuYWJsZWQiLCJ1YiIsImdldE1URUZUb3RhbCIsImFjdHVhbENvbW1pdG1lbnRzIiwiYWN0dWFsRGlzYnVyc2VtZW50cyIsIl9idWlsZFRvdGFsRmllbGRzIiwibWVhc3VyZXNPcmRlciIsInRybiIsImlzUGVyY2VudGFnZSIsImZ1bmRpbmdJbmZvU3VtbWFyeSIsIm1lYXN1cmUiLCJmb3JtYXRBbW91bnQiLCJfYnVpbGRGdW5kaW5nSW5mb3JtYXRpb24iLCJBUElkZW50aWZpY2F0aW9uIiwiV1NfVkFMSURBVElPTl9PRkYiLCJXU19WQUxJREFUSU9OX0FMTF9FRElUIiwiV1NfVkFMSURBVElPTl9ORVdfT05MWSIsIldTX1ZBTElEQVRJT05fRklFTEQiLCJDUk9TU19URUFNX1ZBTElEQVRJT04iLCJXU19BQ0NFU1NfVFlQRV9NQU5BR0VNRU5UIiwiV1NfQUNDRVNTX1RZUEVfVEVBTSIsIlJPTEVfVEVBTV9NRU1CRVJfV1NfTUFOQUdFUiIsIlJPTEVfVEVBTV9NRU1CRVJfV1NfTUVNQkVSIiwiUk9MRV9URUFNX01FTUJFUl9XU19BUFBST1ZFUiIsIldPUktTUEFDRV9JRCIsIlJPTEVfSUQiLCJXT1JLU1BBQ0VfTEVBRF9JRCIsIkFDQ0VTU19UWVBFIiwiSVNfQ09NUFVURUQiLCJJU19QUklWQVRFIiwiRklSU1RfTkFNRSIsIlRFQU1fTUVNQkVSX1VTRVJfSUQiLCJBZGRpdGlvbmFsSW5mbyIsImFjdGl2aXR5V1NNYW5hZ2VyIiwiVXNlckNvbnN0YW50cyIsImFjdGl2aXR5V29ya3NwYWNlIiwiYWRkaXRpb25hbEluZm8iLCJ0ZWFtTmFtZSIsImFjY2Vzc1R5cGUiLCJXb3Jrc3BhY2VDb25zdGFudHMiLCJpc0NvbXB1dGVkVGVhbSIsImluc3RhbmNlIiwiX2dldFdvcmtzcGFjZUxlYWREYXRhIiwiX2J1aWxkQWRkaXRpb25hbEluZm8iLCJBUEludGVybmFsSWRzU2VjdGlvbiIsImlzU2VwYXJhdGVTZWN0aW9uIiwiYWN0SW50SWQiLCJzaG93SW50ZXJuYWxJZCIsImludElkIiwidGFibGVWYWx1ZSIsImludGVybmFsX2lkIiwib3JnYW5pemF0aW9uIiwib3JnSWRzIiwiYWN0SW50SWRzIiwiX2dldEFjdEludGVybmFsSWRDb250ZW50IiwiYnVpbGRDb250ZW50Iiwibm9EYXRhIiwiYWRkUm93cyIsImJveF90YWJsZSIsInNob3dJZkVtcHR5Iiwib3JnRGF0YSIsIkFQSW50ZXJuYWxJZHMiLCJBUENvbXBvbmVudHMiLCJkYXRlU3RyaW5nIiwiZ2V0RnVsbFllYXIiLCJmdW5kaW5nIiwiZ3JvdXBzIiwiYXV4RmQiLCJfZXh0cmFjdFllYXIiLCJncm91cCIsInllYXIiLCJjb21wb25lbnQiLCJmdW5kaW5ncyIsIl9leHRyYWN0R3JvdXBzIiwidGFibGUiLCJkZXNjcmlwdGlvbiIsIl9idWlsZERldGFpbCIsIl9idWlsZENvbXBvbmVudHMiLCJBUENvbnRhY3QiLCJjb250YWN0c0J5SWRzIiwiZ2V0QWN0aXZpdHlDb250YWN0SWRzIiwiY29udGFjdElkcyIsImh5ZHJhdGVkQ29udGFjdHNCeUlkcyIsImNJZCIsIkNvbnRhY3RDb25zdGFudHMiLCJjb250YWN0IiwiY29udGFjdEZpZWxkc01hbmFnZXIiLCJwYWRkaW5nQm90dG9tTGFyZ2UiLCJlbWFpbCIsInBob25lIiwiaGlkZGVuIiwiZ2V0SHlkcmF0ZWRDb250YWN0cyIsImNvbnRhY3RHcm91cHMiLCJhY3AiLCJjb250YWN0cyIsImh5ZHJhdGVkQyIsInJlbmRlckNvbnRhY3QiLCJyZW5kZXJOb0NvbnRhY3RzIiwiY29udGVudENsYXNzIiwidGFibGVDZWxsIiwic2VjdG9yX3RpdGxlIiwiV09S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UCxDQUFjOzhCQUFBO3dDQUFBO3NEQUFBO2dEQUFBO3NDQUFBO2tDQUFBOzRDQUFBOzBEQUFBOzhCQUFBO3NCQUFBOzBCQUFBOzBDQUFBOzBDQUFBOzhDQUFBO3dDQUFBOzRDQUFBO3NDQUFBO3dCQUFBO3NCQUFBOzRCQUFBO29DQUFBOzRDQUFBO2dEQUFBO3dEQUFBO3dEQUFBOzhDQUFBO3NDQUFBO3dEQUFBOzhDQUFBO29DQUFBO2dEQUFBO3NEQUFBO3dEQUFBOzBDQUFBOzRDQUFBOzhDQUFBOzRDQUFBOzRDQUFBOzhDQUFBO3NEQUFBO2dDQUFBO3NDQUFBOzBEQUFBOzBFQUFBO2dEQUFBO29DQUFBOzRDQUFBO3NFQUFBO3dEQUFBOzBFQUFBO29CQUFBOzhCQUFBO2dDQUFBO3dCQUFBO3dCQUFBO3NCQUFBOzhCQUFBO2dDQUFBO2tDQUFBOzhDQUFBO2tEQUFBOzhCQUFBOzhCQUFBO3NDQUFBO2tEQUFBO2dDQUFBO29EQUFBO3NDQUFBO3dDQUFBO2dEQUFBO2dDQUFBO3dEQUFBOzBEQUFBOzhEQUFBO2dEQUFBOzBEQUFBOzBEQUFBOzBEQUFBO2dHQUFBO3NEQUFBO3NEQUFBOzRFQUFBO3dEQUFBOzhGQUFBOzBFQUFBO3dEQUFBO3dEQUFBOzBEQUFBO2dHQUFBOzRFQUFBO3dFQUFBO2dFQUFBOzhDQUFBOzhDQUFBOzhDQUFBOzhDQUFBO3dDQUFBOzhDQUFBO2dEQUFBO29EQUFBO29EQUFBOzhDQUFBOzRDQUFBO29FQUFBOzhDQUFBO2tEQUFBO2tFQUFBO3NFQUFBO2tFQUFBOzhDQUFBOzBEQUFBO3NEQUFBOzhCQUFBO29DQUFBO3dDQUFBO2tEQUFBOzhCQUFBO2tDQUFBO3NFQUFBO29DQUFBO29DQUFBO3dDQUFBO29DQUFBO3NDQUFBO29CQUFBOzBEQUFBOzhCQUFBO2dDQUFBO29DQUFBO3NDQUFBOzhDQUFBO2tEQUFBO3dDQUFBO2tDQUFBOzRCQUFBOzRCQUFBO2tDQUFBO2tCQUFBOzhCQUFBO3dDQUFBO2tDQUFBO3NEQUFBO2dEQUFBO3dEQUFBOzRDQUFBO3dDQUFBO3dDQUFBOzBCQUFBO3dEQUFB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OzBCQUFBO29EQUFBO29CQUFBO29DQUFBO29DQUFBOzBCQUFBOzhCQUFBOzRCQUFBO2tEQUFBO3dDQUFBO2tDQUFBO3NDQUFBOzBDQUFBO2dEQUFBO29DQUFBO3NDQUFBO2dEQUFBO29EQUFBO29EQUFBOzREQUFBO3dEQUFBO2dEQUFBOzRDQUFBO3NDQUFBO29CQUFBO2tDQUFBO2dDQUFBO29DQUFBO3NDQUFBO2tCQUFBO3dDQUFBO29DQUFBO2tEQUFBO29DQUFBO3dDQUFBO29DQUFBO2dFQUFBO2dDQUFBO1lBQUE7MEJBQUE7MEJBQUE7Z0JBQUE7OEJBQUE7MEJBQUE7MEJBQUE7MEJBQUE7d0JBQUE7d0JBQUE7b0NBQUE7b0NBQUE7c0NBQUE7c0NBQUE7c0JBQUE7Z0NBQUE7a0JBQUE7b0NBQUE7a0NBQUE7Z0NBQUE7b0NBQUE7b0NBQUE7d0NBQUE7MEJBQUE7MEJBQUE7a0NBQUE7OENBQUE7d0NBQUE7b0RBQUE7b0RBQUE7d0JBQUE7d0JBQUE7d0NBQUE7Z0JBQUE7b0JBQUE7NEJBQUE7d0JBQUE7a0VBQUE7MEJBQUE7Z0NBQUE7Z0JBQUE7d0JBQUE7d0JBQUE7b0JBQUE7NEJBQUE7NEJBQUE7Z0JBQUE7d0JBQUE7d0JBQUE7b0NBQUE7Z0RBQUE7MENBQUE7NENBQUE7b0NBQUE7Z0NBQUE7Z0NBQUE7b0NBQUE7b0NBQUE7d0NBQUE7MENBQUE7Z0RBQUE7Z0NBQUE7a0NBQUE7c0NBQUE7OENBQUE7Z0RBQUE7c0NBQUE7d0JBQUE7Y0FBQTtrQkFBQTswQ0FBQTtvREFBQTtZQUFBO1lBQUE7a0RBQUE7MEJBQUE7Z0JBQUE7OENBQUE7c0NBQUE7NEJBQUE7OENBQUE7Z0JBQUE7MERBQUE7Z0NBQUE7Z0NBQUE7Z0RBQUE7MEJBQUE7OEJBQUE7NEJBQUE7UUFBQTt3Q0FBQTtvRUFBQTt3RUFBQTs4QkFBQTswREFBQTtrREFBQTs4QkFBQTs4RUFBQTtrQkFBQTt3Q0FBQTswQ0FBQTtrQ0FBQTt3Q0FBQTs4QkFBQTtZQUFBO3NDQUFBO3dCQUFBO29CQUFBO2tDQUFBO3NFQUFBOzRFQUFBO2tGQUFBOzhFQUFB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
