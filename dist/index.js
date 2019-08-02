'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

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

// TODO THIS IS A SAMPLE FILE IT WILL BE DELETED

var CommonConstants = Object.freeze({
  ACTIVITY_BUDGET: 'activity_budget',
  ACTIVITY_STATUS: 'activity_status'
});

var index = { TestAPField: TestAPField, TestingSection: TestingSection, CommonConstants: CommonConstants };

exports.TestAPField = TestAPField;
exports.TestingSection = TestingSection;
exports.CommonConstants = CommonConstants;
exports.default = index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9zdHlsZS1pbmplY3QvZGlzdC9zdHlsZS1pbmplY3QuZXMuanMiLCIuLi9zcmMvYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdEFQRmllbGQuanMiLCIuLi9zcmMvYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdGluZ1NlY3Rpb24uanMiLCIuLi9zcmMvY29tbW9uRmlsZXMvQ29tbW9uQ29uc3RhbnRzLmpzIiwiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHN0eWxlSW5qZWN0KGNzcywgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSB7fTtcbiAgdmFyIGluc2VydEF0ID0gcmVmLmluc2VydEF0O1xuXG4gIGlmICghY3NzIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuOyB9XG5cbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gIGlmIChpbnNlcnRBdCA9PT0gJ3RvcCcpIHtcbiAgICBpZiAoaGVhZC5maXJzdENoaWxkKSB7XG4gICAgICBoZWFkLmluc2VydEJlZm9yZShzdHlsZSwgaGVhZC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVJbmplY3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vYWN0aXZpdHlBc3NldHMvc3R5bGVzaGVldHMvQWN0aXZpdHlQcmV2aWV3LmNzcyc7XG5cblxuLyoqXG4gKiBTaW1wbGUgRmllbGQgY29tcG9uZW50IHRoYXQgY29uc2lzdHMgb2YgYSBmaWVsZCB0aXRsZSBhbmQgZmllbGQgdmFsdWVcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdEFQRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvKipcbiAgICogR2V0cyBhbiBpbnN0YW5jZSBvZiBTaW1wbGUgRmllbGRcbiAgICogQHBhcmFtIHRybkxhYmVsIHRoZSBsYWJlbCB0byB0cmFuc2xhdGUgYW5kIHVzZSBhcyBhIHRpdGxlLiBUaGlzIGxhYmVsIGlzIGFsc28gdXNlZCBhcyB0aGUgY29tcG9uZW50IGtleS5cbiAgICogQHBhcmFtIHZhbHVlIHRoZSBmaWVsZCB2YWx1ZVxuICAgKiBAcGFyYW0gaW5saW5lIHNob3cgdGl0bGUgYW5kIHZhbHVlIGluIHRoZSBzYW1lIHJvdy5cbiAgICogQHBhcmFtIHNlcGFyYXRvciBhZGQgb3Igbm90IGFuIDxocj4gdGFnLlxuICAgKiBAcGFyYW0gbmFtZUNsYXNzIGNzcyBjbGFzcyBmb3IgdGhlIGZpZWxkIGxhYmVsXG4gICAqIEBwYXJhbSB2YWx1ZUNsYXNzIGNzcyBjbGFzcyBmb3IgdGhlIGZpZWxkIHZhbHVlXG4gICAqIEByZXR1cm4ge1NpbXBsZUZpZWxkfVxuICAgKi9cbiAgc3RhdGljIGluc3RhbmNlKHRybkxhYmVsLCB2YWx1ZSwgaW5saW5lID0gZmFsc2UsIHNlcGFyYXRvciA9IGZhbHNlLCBuYW1lQ2xhc3MsIHZhbHVlQ2xhc3MpIHtcbiAgICByZXR1cm4gKDxUZXN0QVBGaWVsZFxuICAgICAga2V5PXt0cm5MYWJlbH0gdGl0bGU9e3RoaXMucHJvcHMudHJhbnNsYXRlKHRybkxhYmVsKX0gdmFsdWU9e3ZhbHVlfSBpbmxpbmU9e2lubGluZX0gc2VwYXJhdG9yPXtzZXBhcmF0b3J9XG4gICAgICBmaWVsZE5hbWVDbGFzcz17bmFtZUNsYXNzfSBmaWVsZFZhbHVlQ2xhc3M9e3ZhbHVlQ2xhc3N9IC8+KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucHJvcHMuYW1wTG9nZ2VyLmxvZygnY29uc3RydWN0b3JlJyk7XG4gICAgdGhpcy51c2VTZXBhcmF0b3IgPSB0aGlzLnByb3BzLnNlcGFyYXRvciAhPT0gZmFsc2U7XG4gICAgdGhpcy5kaXNwbGF5Q2xhc3MgPSB0aGlzLnByb3BzLmZpZWxkQ2xhc3MgfHwgKHRoaXMucHJvcHMuaW5saW5lID09PSB0cnVlID8gc3R5bGVzLmlubGluZSA6IHN0eWxlcy5ibG9jayk7XG4gIH1cblxuICBfZ2V0VmFsdWUoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IGAke3RoaXMucHJvcHMuZmllbGRWYWx1ZUNsYXNzfSAke3RoaXMuZGlzcGxheUNsYXNzfWA7XG4gICAgLy8gVG8gaGFuZGxlIGJvb2xlYW4gZmllbGRzIHdlIGRvbnQgd2FudCB0byBzaG93ICdmYWxzZScgYXMgJ05vIERhdGEnLlxuICAgIGNvbnN0IHZhbHVlID0gKHRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5wcm9wcy52YWx1ZSA9PT0gZmFsc2UpID8gdGhpcy5wcm9wcy52YWx1ZSA6IHRoaXMucHJvcHMudHJhbnNsYXRlKCdObyBEYXRhJyk7XG4gICAgbGV0IGRpc3BsYXlWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGlmICh2YWx1ZVswXSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICBkaXNwbGF5VmFsdWUgPSBbXTtcbiAgICAgICAgdmFsdWUuZm9yRWFjaCh2ID0+IGRpc3BsYXlWYWx1ZS5wdXNoKHYpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BsYXlWYWx1ZSA9IHZhbHVlLnNvcnQoKS5qb2luKCcsICcpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGRpc3BsYXlWYWx1ZSA9IHZhbHVlID09PSB0cnVlID8gdGhpcy5wcm9wcy50cmFuc2xhdGUoJ1llcycpIDogdGhpcy5wcm9wcy50cmFuc2xhdGUoJ05vJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BsYXlWYWx1ZSA9ICh0aGlzLnByb3BzLmlubGluZSAmJiB0aGlzLnByb3BzLnZhbHVlIGluc3RhbmNlb2YgU3RyaW5nKSA/IGAke3ZhbHVlfSBgIDogdmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLnVzZUlubmVySFRNTCkge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRpc3BsYXlWYWx1ZSB9fSAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfT57ZGlzcGxheVZhbHVlfTwvZGl2PjtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IGAke3RoaXMucHJvcHMuZmllbGROYW1lQ2xhc3N9ICR7dGhpcy5kaXNwbGF5Q2xhc3N9YDtcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXt0aGlzLmRpc3BsYXlDbGFzc30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+e3RoaXMucHJvcHMudGl0bGV9PC9kaXY+XG4gICAgICB7dGhpcy5fZ2V0VmFsdWUoKX1cbiAgICAgIHt0aGlzLnVzZVNlcGFyYXRvciA/IDxociAvPiA6ICcnfVxuICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuVGVzdEFQRmllbGQucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG4gIGlubGluZTogUHJvcFR5cGVzLmJvb2wsXG4gIHVzZUlubmVySFRNTDogUHJvcFR5cGVzLmJvb2wsXG4gIGZpZWxkQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZpZWxkTmFtZUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmaWVsZFZhbHVlQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlcGFyYXRvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGFtcExvZ2dlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB0cmFuc2xhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBUZXN0QVBGaWVsZCBmcm9tICcuL1Rlc3RBUEZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdGluZ1NlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj50ZXN0aW5nIGNvbXBvbmVudDwvaDI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgdGVzdCB0cmFuc2xhdGlvbjogYERFU0tUT1AgPSB7dGhpcy5wcm9wcy50cmFuc2xhdGUoJ0RFU0tUT1AnKX1gXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHRlc3QgQVBGaWVsZDpcbiAgICAgICAgICA8VGVzdEFQRmllbGQgYW1wTG9nZ2VyPXt0aGlzLnByb3BzLmFtcExvZ2dlcn0gdHJhbnNsYXRlPXt0aGlzLnByb3BzLnRyYW5zbGF0ZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4pO1xuICB9XG59XG5UZXN0aW5nU2VjdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGFtcExvZ2dlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB0cmFuc2xhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG4iLCJcbi8vIFRPRE8gVEhJUyBJUyBBIFNBTVBMRSBGSUxFIElUIFdJTEwgQkUgREVMRVRFRFxuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5mcmVlemUoe1xuICBBQ1RJVklUWV9CVURHRVQ6ICdhY3Rpdml0eV9idWRnZXQnLFxuICBBQ1RJVklUWV9TVEFUVVM6ICdhY3Rpdml0eV9zdGF0dXMnXG59KTtcbiIsImltcG9ydCBUZXN0QVBGaWVsZCBmcm9tICcuL2FjdGl2aXR5UHJldmlldy9jb21wb25lbnRzL1Rlc3RBUEZpZWxkJztcbmltcG9ydCBUZXN0aW5nU2VjdGlvbiBmcm9tICcuL2FjdGl2aXR5UHJldmlldy9jb21wb25lbnRzL1Rlc3RpbmdTZWN0aW9uJztcbmltcG9ydCBDb21tb25Db25zdGFudHMgZnJvbSAnLi9jb21tb25GaWxlcy9Db21tb25Db25zdGFudHMnO1xuXG5leHBvcnQgeyBUZXN0QVBGaWVsZCwgVGVzdGluZ1NlY3Rpb24sIENvbW1vbkNvbnN0YW50cyB9O1xuXG5leHBvcnQgZGVmYXVsdCB7IFRlc3RBUEZpZWxkLCBUZXN0aW5nU2VjdGlvbiwgQ29tbW9uQ29uc3RhbnRzIH07XG4iXSwibmFtZXMiOlsiVGVzdEFQRmllbGQiLCJ0cm5MYWJlbCIsInZhbHVlIiwiaW5saW5lIiwic2VwYXJhdG9yIiwibmFtZUNsYXNzIiwidmFsdWVDbGFzcyIsIlJlYWN0IiwicHJvcHMiLCJ0cmFuc2xhdGUiLCJhbXBMb2dnZXIiLCJsb2ciLCJ1c2VTZXBhcmF0b3IiLCJkaXNwbGF5Q2xhc3MiLCJmaWVsZENsYXNzIiwic3R5bGVzIiwiYmxvY2siLCJjbGFzc05hbWVzIiwiZmllbGRWYWx1ZUNsYXNzIiwiZGlzcGxheVZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwiT2JqZWN0IiwiZm9yRWFjaCIsInB1c2giLCJ2Iiwic29ydCIsImpvaW4iLCJTdHJpbmciLCJ1c2VJbm5lckhUTUwiLCJfX2h0bWwiLCJmaWVsZE5hbWVDbGFzcyIsInRpdGxlIiwiX2dldFZhbHVlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYW55IiwiYm9vbCIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIiwiVGVzdGluZ1NlY3Rpb24iLCJtb2R1bGUiLCJmcmVlemUiLCJDb21tb25Db25zdGFudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxTQUFTLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO0VBQzdCLEtBQUssR0FBRyxLQUFLLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7RUFDL0IsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQzs7RUFFNUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxPQUFPLFFBQVEsS0FBSyxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUU7O0VBRXhELElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3JFLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7RUFDNUMsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7O0VBRXhCLElBQUksUUFBUSxLQUFLLEtBQUssRUFBRTtJQUN0QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7TUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQzNDLE1BQU07TUFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3pCO0dBQ0YsTUFBTTtJQUNM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
