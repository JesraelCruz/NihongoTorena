(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Nihongo\nihongo-torena\src\main.ts */"zUnb");


/***/ }),

/***/ "4lOu":
/*!*****************************************************!*\
  !*** ./src/app/game/hiragana-romaji-timer.score.ts ***!
  \*****************************************************/
/*! exports provided: HiraganaRomajiTimerScore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiraganaRomajiTimerScore", function() { return HiraganaRomajiTimerScore; });
class HiraganaRomajiTimerScore {
    constructor() {
        this.missedPoint = 50;
    }
    getPoint(lastTime, currentTime) {
        let diff = currentTime - lastTime - 1;
        diff = diff < 0 ? 0 : diff;
        const point = 100 - (10 * diff);
        return point < 20 ? 20 : point;
    }
    getMissedPoint() {
        return this.missedPoint;
    }
}


/***/ }),

/***/ "5IVi":
/*!************************************!*\
  !*** ./src/app/game/app-global.ts ***!
  \************************************/
/*! exports provided: AppGlobal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppGlobal", function() { return AppGlobal; });
/* harmony import */ var _highscore_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./highscore.list */ "p9ds");

class AppGlobal {
}
AppGlobal.gameSelected = _highscore_list__WEBPACK_IMPORTED_MODULE_0__["Games"].NoSelection;


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BYDN":
/*!**************************************************************************!*\
  !*** ./src/app/hiragana-romaji-timer/hiragana-romaji-timer.component.ts ***!
  \**************************************************************************/
/*! exports provided: HiraganaRomajiTimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiraganaRomajiTimerComponent", function() { return HiraganaRomajiTimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _game_hiragana_romaji_timer_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/hiragana-romaji-timer.game */ "wXfM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_hiragana_tile_hiragana_tile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/hiragana-tile/hiragana-tile.component */ "e7fj");
/* harmony import */ var _shared_game_menu_game_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/game-menu/game-menu.component */ "hU2R");
/* harmony import */ var _shared_game_scoreboard_game_scoreboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/game-scoreboard/game-scoreboard.component */ "ONAn");







function HiraganaRomajiTimerComponent_app_hiragana_tile_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-hiragana-tile", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function HiraganaRomajiTimerComponent_app_hiragana_tile_2_Template_app_hiragana_tile_selected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const furigana_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("furigana", furigana_r3)("isEnabled", ctx_r0.isEnabled(furigana_r3))("isVisible", ctx_r0.isVisible(furigana_r3));
} }
function HiraganaRomajiTimerComponent_app_game_menu_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-menu", 5);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nihongoGame", ctx_r1.hiraganaGame);
} }
function HiraganaRomajiTimerComponent_app_game_scoreboard_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-scoreboard", 5);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nihongoGame", ctx_r2.hiraganaGame);
} }
class HiraganaRomajiTimerComponent {
    constructor() {
        this.hiraganaGame = new _game_hiragana_romaji_timer_game__WEBPACK_IMPORTED_MODULE_1__["HiraganaRomajiTimerGame"]();
    }
    ngOnInit() { }
    get hiraganaTable() {
        return this.hiraganaGame.getTable();
    }
    isEnabled(furigana) {
        const selected = this.hiraganaGame.getSelected().filter((f) => f.romaji === furigana.romaji);
        return this.hiraganaGame.hasStarted && selected.length === 0;
    }
    isVisible(furigana) {
        const selected = this.hiraganaGame.getSelected().filter((f) => f.romaji === furigana.romaji);
        return !this.hiraganaGame.hasStarted || (this.hiraganaGame.hasStarted && selected.length > 0);
    }
    onSelect(furigana) {
        this.hiraganaGame.checkSelected(furigana);
    }
}
HiraganaRomajiTimerComponent.ɵfac = function HiraganaRomajiTimerComponent_Factory(t) { return new (t || HiraganaRomajiTimerComponent)(); };
HiraganaRomajiTimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HiraganaRomajiTimerComponent, selectors: [["app-hiragana-romaji-timer"]], decls: 5, vars: 3, consts: [[1, "d-flex"], [1, "row"], ["class", "col-1 px-0", 3, "furigana", "isEnabled", "isVisible", "selected", 4, "ngFor", "ngForOf"], [3, "nihongoGame", 4, "ngIf"], [1, "col-1", "px-0", 3, "furigana", "isEnabled", "isVisible", "selected"], [3, "nihongoGame"]], template: function HiraganaRomajiTimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HiraganaRomajiTimerComponent_app_hiragana_tile_2_Template, 1, 3, "app-hiragana-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HiraganaRomajiTimerComponent_app_game_menu_3_Template, 1, 1, "app-game-menu", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HiraganaRomajiTimerComponent_app_game_scoreboard_4_Template, 1, 1, "app-game-scoreboard", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hiraganaTable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hiraganaGame.onMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hiraganaGame.hasStarted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_hiragana_tile_hiragana_tile_component__WEBPACK_IMPORTED_MODULE_3__["HiraganaTileComponent"], _shared_game_menu_game_menu_component__WEBPACK_IMPORTED_MODULE_4__["GameMenuComponent"], _shared_game_scoreboard_game_scoreboard_component__WEBPACK_IMPORTED_MODULE_5__["GameScoreboardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXJhZ2FuYS1yb21hamktdGltZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HiraganaRomajiTimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hiragana-romaji-timer',
                templateUrl: './hiragana-romaji-timer.component.html',
                styleUrls: ['./hiragana-romaji-timer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "BtRM":
/*!*****************************************!*\
  !*** ./src/app/model/furigana.model.ts ***!
  \*****************************************/
/*! exports provided: FuriganaModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuriganaModel", function() { return FuriganaModel; });
/* harmony import */ var wanakana__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wanakana */ "kSwk");
/* harmony import */ var wanakana__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wanakana__WEBPACK_IMPORTED_MODULE_0__);

class FuriganaModel {
    constructor(romaji, hasKatakana = true, hasHiragana = true) {
        this.romaji = romaji;
        this.hasKatakana = hasKatakana;
        this.hasHiragana = hasHiragana;
    }
    static toHiragana(romaji) {
        return Object(wanakana__WEBPACK_IMPORTED_MODULE_0__["toHiragana"])(romaji, {
            customKanaMapping: {
                dzi: 'ぢ', dzu: 'づ', dzya: 'ぢゃ', dzyu: 'ぢゅ', dzyo: 'ぢょ'
            },
        });
    }
    static toKatakana(romaji) {
        return Object(wanakana__WEBPACK_IMPORTED_MODULE_0__["toKatakana"])(romaji, {
            customKanaMapping: {
                dzi: 'ヂ', dzu: 'ヅ', dzya: 'ヂャ', dzyu: 'ヂュ', dzyo: 'ヂョ',
                ē: 'エー', kē: 'ケー', sē: 'セー', tē: 'テー', nē: 'ネー', hē: 'ヘー',
                mē: 'メー', rē: 'レー', ā: 'アー', kā: 'カー', sā: 'サー', tā: 'ター',
                nā: 'ナー', hā: 'ハー', mā: 'マー', yā: 'ヤー', rā: 'ラー', wā: 'ワー'
            },
        });
    }
    get hiragana() {
        return FuriganaModel.toHiragana(this.romaji);
    }
    get katakana() {
        return FuriganaModel.toKatakana(this.romaji);
    }
    duplicate() {
        return new FuriganaModel(this.romaji, this.hasKatakana, this.hasHiragana);
    }
}


/***/ }),

/***/ "GTpk":
/*!********************************************************************************!*\
  !*** ./src/app/game/katakana-multiple-choice/katakana-multiple-choice.game.ts ***!
  \********************************************************************************/
/*! exports provided: KatakanaMultipleChoiceGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KatakanaMultipleChoiceGame", function() { return KatakanaMultipleChoiceGame; });
/* harmony import */ var _static_db_furigana_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../static-db/furigana.db */ "imSe");
/* harmony import */ var _highscore_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../highscore.list */ "p9ds");
/* harmony import */ var _hiragana_romaji_timer_score__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hiragana-romaji-timer.score */ "4lOu");
/* harmony import */ var _nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nihongo-base/nihongo-game */ "bPHt");
/* harmony import */ var _nihongo_base_nihongo_game_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nihongo-base/nihongo-game.base */ "kktn");
/* harmony import */ var _nihongo_base_nihongo_scoreboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nihongo-base/nihongo-scoreboard */ "j97u");






class KatakanaMultipleChoiceGame extends _nihongo_base_nihongo_game_base__WEBPACK_IMPORTED_MODULE_4__["NihongoGameBase"] {
    constructor() {
        super(...arguments);
        this.table = _static_db_furigana_db__WEBPACK_IMPORTED_MODULE_0__["FuriganaDb"].randomKatakana();
        this.scoreboard = new _nihongo_base_nihongo_scoreboard__WEBPACK_IMPORTED_MODULE_5__["NihongoScoreboard"](new _hiragana_romaji_timer_score__WEBPACK_IMPORTED_MODULE_2__["HiraganaRomajiTimerScore"]());
    }
    start() {
        this.selected = [];
        this.table = _static_db_furigana_db__WEBPACK_IMPORTED_MODULE_0__["FuriganaDb"].randomKatakana(20);
        this.scoreboard = new _nihongo_base_nihongo_scoreboard__WEBPACK_IMPORTED_MODULE_5__["NihongoScoreboard"](new _hiragana_romaji_timer_score__WEBPACK_IMPORTED_MODULE_2__["HiraganaRomajiTimerScore"]());
        this.status = _nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_3__["Statuses"].Started;
        this.scoreboard.start();
        this.scoreboard.setGiven(this.chooseFurigana());
        this.multipleChoice = this.getMultipleChoice();
    }
    checkSelected(chosen) {
        var _a;
        if (chosen.romaji === ((_a = this.scoreboard.givenValue) === null || _a === void 0 ? void 0 : _a.romaji)) {
            this.addSelected(chosen);
            this.scoreboard.addPoint();
            this.scoreboard.setGiven(this.chooseFurigana());
            this.multipleChoice = this.getMultipleChoice();
            if (this.table.length === this.selected.length) {
                this.status = _nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_3__["Statuses"].Completed;
                this.saveHighscore();
                this.scoreboard.stop();
            }
        }
        else {
            this.scoreboard.missed();
        }
    }
    saveHighscore() {
        const highscore = new _highscore_list__WEBPACK_IMPORTED_MODULE_1__["HighscoreModel"](this.getPoint(), this.getTimeValue(), this.getError());
        _highscore_list__WEBPACK_IMPORTED_MODULE_1__["HighscoreList"].addHighscore(highscore, _highscore_list__WEBPACK_IMPORTED_MODULE_1__["Games"].KatakanaMultiple);
    }
}


/***/ }),

/***/ "ONAn":
/*!*********************************************************************!*\
  !*** ./src/app/shared/game-scoreboard/game-scoreboard.component.ts ***!
  \*********************************************************************/
/*! exports provided: GameScoreboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameScoreboardComponent", function() { return GameScoreboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GameScoreboardComponent {
    constructor() {
        this.type = 'romaji';
    }
    ngOnInit() {
    }
    get timeBoard() {
        var _a, _b;
        return (_b = (_a = this.nihongoGame) === null || _a === void 0 ? void 0 : _a.getTime()) !== null && _b !== void 0 ? _b : '00:00:00';
    }
    get givenBoard() {
        var _a, _b, _c, _d, _e, _f;
        if (this.type === 'romaji') {
            return (_c = (_b = (_a = this.nihongoGame) === null || _a === void 0 ? void 0 : _a.getGiven()) === null || _b === void 0 ? void 0 : _b.romaji) !== null && _c !== void 0 ? _c : '';
        }
        else {
            return (_f = (_e = (_d = this.nihongoGame) === null || _d === void 0 ? void 0 : _d.getGiven()) === null || _e === void 0 ? void 0 : _e.hiragana) !== null && _f !== void 0 ? _f : '';
        }
    }
    get errorBoard() {
        var _a, _b;
        return (_b = (_a = this.nihongoGame) === null || _a === void 0 ? void 0 : _a.getError()) !== null && _b !== void 0 ? _b : 0;
    }
    get pointBoard() {
        var _a, _b;
        return (_b = (_a = this.nihongoGame) === null || _a === void 0 ? void 0 : _a.getPoint()) !== null && _b !== void 0 ? _b : 0;
    }
}
GameScoreboardComponent.ɵfac = function GameScoreboardComponent_Factory(t) { return new (t || GameScoreboardComponent)(); };
GameScoreboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameScoreboardComponent, selectors: [["app-game-scoreboard"]], inputs: { nihongoGame: "nihongoGame", type: "type" }, decls: 12, vars: 4, consts: [[1, "d-flex", "pt-3", "pb-2", "px-4", "overlay", "bg-orange", "score-board"], [1, "h5"], [1, "offset"]], template: function GameScoreboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.givenBoard);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.timeBoard);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.pointBoard, " pts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.errorBoard, " miss");
    } }, styles: [".overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.offset[_ngcontent-%COMP%] {\n  width: 30px;\n}\n\n.bg-orange[_ngcontent-%COMP%] {\n  background-color: #e67e22;\n}\n\n.score-board[_ngcontent-%COMP%] {\n  border-width: 0 0 10px 10px;\n  border-style: solid;\n  border-color: white;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-bottom-left-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxnYW1lLXNjb3JlYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSwrQkFBQTtBQUNKIiwiZmlsZSI6ImdhbWUtc2NvcmVib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4ub2Zmc2V0IHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG59XHJcblxyXG4uYmctb3JhbmdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjdlMjI7XHJcbn1cclxuXHJcbi5zY29yZS1ib2FyZCB7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgMCAxMHB4IDEwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameScoreboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-scoreboard',
                templateUrl: './game-scoreboard.component.html',
                styleUrls: ['./game-scoreboard.component.scss']
            }]
    }], function () { return []; }, { nihongoGame: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_hiragana_tile_hiragana_tile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/hiragana-tile/hiragana-tile.component */ "e7fj");
/* harmony import */ var _game_menu_game_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-menu/game-menu.component */ "hU2R");
/* harmony import */ var _game_menu_menu_button_menu_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-menu/menu-button/menu-button.component */ "VM58");
/* harmony import */ var _game_scoreboard_game_scoreboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-scoreboard/game-scoreboard.component */ "ONAn");
/* harmony import */ var _hiragana_choice_hiragana_choice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hiragana-choice/hiragana-choice.component */ "bhjN");
/* harmony import */ var _game_final_score_game_final_score_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game-final-score/game-final-score.component */ "m8M7");
/* harmony import */ var _game_highscore_list_game_highscore_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game-highscore-list/game-highscore-list.component */ "ws5B");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _game_selector_game_selector_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./game-selector/game-selector.component */ "oDhR");











class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_shared_hiragana_tile_hiragana_tile_component__WEBPACK_IMPORTED_MODULE_1__["HiraganaTileComponent"],
        _game_menu_game_menu_component__WEBPACK_IMPORTED_MODULE_2__["GameMenuComponent"],
        _game_menu_menu_button_menu_button_component__WEBPACK_IMPORTED_MODULE_3__["MenuButtonComponent"],
        _game_scoreboard_game_scoreboard_component__WEBPACK_IMPORTED_MODULE_4__["GameScoreboardComponent"],
        _hiragana_choice_hiragana_choice_component__WEBPACK_IMPORTED_MODULE_5__["HiraganaChoiceComponent"],
        _game_final_score_game_final_score_component__WEBPACK_IMPORTED_MODULE_6__["GameFinalScoreComponent"],
        _game_highscore_list_game_highscore_list_component__WEBPACK_IMPORTED_MODULE_7__["GameHighscoreListComponent"],
        _game_selector_game_selector_component__WEBPACK_IMPORTED_MODULE_9__["GameSelectorComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"]], exports: [_shared_hiragana_tile_hiragana_tile_component__WEBPACK_IMPORTED_MODULE_1__["HiraganaTileComponent"],
        _game_menu_game_menu_component__WEBPACK_IMPORTED_MODULE_2__["GameMenuComponent"],
        _game_scoreboard_game_scoreboard_component__WEBPACK_IMPORTED_MODULE_4__["GameScoreboardComponent"],
        _hiragana_choice_hiragana_choice_component__WEBPACK_IMPORTED_MODULE_5__["HiraganaChoiceComponent"],
        _game_final_score_game_final_score_component__WEBPACK_IMPORTED_MODULE_6__["GameFinalScoreComponent"],
        _game_highscore_list_game_highscore_list_component__WEBPACK_IMPORTED_MODULE_7__["GameHighscoreListComponent"],
        _game_selector_game_selector_component__WEBPACK_IMPORTED_MODULE_9__["GameSelectorComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"]
                ],
                declarations: [
                    _shared_hiragana_tile_hiragana_tile_component__WEBPACK_IMPORTED_MODULE_1__["HiraganaTileComponent"],
                    _game_menu_game_menu_component__WEBPACK_IMPORTED_MODULE_2__["GameMenuComponent"],
                    _game_menu_menu_button_menu_button_component__WEBPACK_IMPORTED_MODULE_3__["MenuButtonComponent"],
                    _game_scoreboard_game_scoreboard_component__WEBPACK_IMPORTED_MODULE_4__["GameScoreboardComponent"],
                    _hiragana_choice_hiragana_choice_component__WEBPACK_IMPORTED_MODULE_5__["HiraganaChoiceComponent"],
                    _game_final_score_game_final_score_component__WEBPACK_IMPORTED_MODULE_6__["GameFinalScoreComponent"],
                    _game_highscore_list_game_highscore_list_component__WEBPACK_IMPORTED_MODULE_7__["GameHighscoreListComponent"],
                    _game_selector_game_selector_component__WEBPACK_IMPORTED_MODULE_9__["GameSelectorComponent"]
                ],
                exports: [
                    _shared_hiragana_tile_hiragana_tile_component__WEBPACK_IMPORTED_MODULE_1__["HiraganaTileComponent"],
                    _game_menu_game_menu_component__WEBPACK_IMPORTED_MODULE_2__["GameMenuComponent"],
                    _game_scoreboard_game_scoreboard_component__WEBPACK_IMPORTED_MODULE_4__["GameScoreboardComponent"],
                    _hiragana_choice_hiragana_choice_component__WEBPACK_IMPORTED_MODULE_5__["HiraganaChoiceComponent"],
                    _game_final_score_game_final_score_component__WEBPACK_IMPORTED_MODULE_6__["GameFinalScoreComponent"],
                    _game_highscore_list_game_highscore_list_component__WEBPACK_IMPORTED_MODULE_7__["GameHighscoreListComponent"],
                    _game_selector_game_selector_component__WEBPACK_IMPORTED_MODULE_9__["GameSelectorComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _game_app_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/app-global */ "5IVi");
/* harmony import */ var _game_highscore_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/highscore.list */ "p9ds");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _shared_game_selector_game_selector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/game-selector/game-selector.component */ "oDhR");
/* harmony import */ var _hiragana_multiple_choice_hiragana_multiple_choice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hiragana-multiple-choice/hiragana-multiple-choice.component */ "TBKY");
/* harmony import */ var _katakana_multiple_choice_katakana_multiple_choice_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./katakana-multiple-choice/katakana-multiple-choice.component */ "n3ry");









function AppComponent_app_game_selector_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-game-selector", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function AppComponent_app_game_selector_2_Template_app_game_selector_selected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.selectGame($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_app_hiragana_multiple_choice_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-hiragana-multiple-choice", 5);
} }
function AppComponent_app_katakana_multiple_choice_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-katakana-multiple-choice", 5);
} }
class AppComponent {
    constructor() {
        this.title = 'nihongo-torena';
        this.availableGames = _game_highscore_list__WEBPACK_IMPORTED_MODULE_2__["Games"];
    }
    ngOnInit() {
        _game_highscore_list__WEBPACK_IMPORTED_MODULE_2__["HighscoreList"].getHighscores();
    }
    selectGame(selection) {
        _game_app_global__WEBPACK_IMPORTED_MODULE_1__["AppGlobal"].gameSelected = selection;
    }
    get selected() {
        return _game_app_global__WEBPACK_IMPORTED_MODULE_1__["AppGlobal"].gameSelected;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 4, consts: [[1, "d-flex", "flex-column", "min-height-100"], [1, "container", "flex-grow-1", "d-flex", "flex-column", "justify-content-center", 3, "ngSwitch"], ["class", "d-flex flex-column justify-content-center", 3, "selected", 4, "ngSwitchCase"], ["class", "d-flex flex-column justify-content-center", 4, "ngSwitchCase"], [1, "d-flex", "flex-column", "justify-content-center", 3, "selected"], [1, "d-flex", "flex-column", "justify-content-center"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_app_game_selector_2_Template, 1, 0, "app-game-selector", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_app_hiragana_multiple_choice_3_Template, 1, 0, "app-hiragana-multiple-choice", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_app_katakana_multiple_choice_4_Template, 1, 0, "app-katakana-multiple-choice", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.availableGames.NoSelection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.availableGames.HiraganaMultiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.availableGames.KatakanaMultiple);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _shared_game_selector_game_selector_component__WEBPACK_IMPORTED_MODULE_5__["GameSelectorComponent"], _hiragana_multiple_choice_hiragana_multiple_choice_component__WEBPACK_IMPORTED_MODULE_6__["HiraganaMultipleChoiceComponent"], _katakana_multiple_choice_katakana_multiple_choice_component__WEBPACK_IMPORTED_MODULE_7__["KatakanaMultipleChoiceComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "TBKY":
/*!********************************************************************************!*\
  !*** ./src/app/hiragana-multiple-choice/hiragana-multiple-choice.component.ts ***!
  \********************************************************************************/
/*! exports provided: HiraganaMultipleChoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiraganaMultipleChoiceComponent", function() { return HiraganaMultipleChoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _game_highscore_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/highscore.list */ "p9ds");
/* harmony import */ var _game_hiragana_multiple_choice_hiragana_multiple_choice_game___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game/hiragana-multiple-choice/hiragana-multiple-choice.game. */ "nTLI");
/* harmony import */ var _game_nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game/nihongo-base/nihongo-game */ "bPHt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_hiragana_choice_hiragana_choice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/hiragana-choice/hiragana-choice.component */ "bhjN");
/* harmony import */ var _shared_game_menu_game_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/game-menu/game-menu.component */ "hU2R");
/* harmony import */ var _shared_game_scoreboard_game_scoreboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/game-scoreboard/game-scoreboard.component */ "ONAn");
/* harmony import */ var _shared_game_final_score_game_final_score_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/game-final-score/game-final-score.component */ "m8M7");
/* harmony import */ var _shared_game_highscore_list_game_highscore_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/game-highscore-list/game-highscore-list.component */ "ws5B");











function HiraganaMultipleChoiceComponent_app_hiragana_choice_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-hiragana-choice", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function HiraganaMultipleChoiceComponent_app_hiragana_choice_5_Template_app_hiragana_choice_selected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const furigana_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("furigana", furigana_r5)("isEnabled", ctx_r0.isEnabled())("isVisible", ctx_r0.isVisible());
} }
function HiraganaMultipleChoiceComponent_app_game_menu_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-menu", 10);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nihongoGame", ctx_r1.hiraganaGame);
} }
function HiraganaMultipleChoiceComponent_app_game_scoreboard_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-scoreboard", 11);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nihongoGame", ctx_r2.hiraganaGame);
} }
function HiraganaMultipleChoiceComponent_app_game_final_score_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-final-score", 12);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nihongoGame", ctx_r3.hiraganaGame);
} }
function HiraganaMultipleChoiceComponent_app_game_highscore_list_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-highscore-list", 13);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nihongoGame", ctx_r4.hiraganaGame)("game", ctx_r4.game);
} }
class HiraganaMultipleChoiceComponent {
    constructor() {
        this.hiraganaGame = new _game_hiragana_multiple_choice_hiragana_multiple_choice_game___WEBPACK_IMPORTED_MODULE_2__["HiraganaMultipleChoiceGame"]();
    }
    ngOnInit() { }
    get multipleChoiceValue() {
        return this.hiraganaGame.multipleChoiceValue;
    }
    get givenHiragana() {
        var _a, _b;
        return (_b = (_a = this.hiraganaGame.getGiven()) === null || _a === void 0 ? void 0 : _a.hiragana) !== null && _b !== void 0 ? _b : '';
    }
    get hasStarted() {
        return this.hiraganaGame.statusValue === _game_nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_3__["Statuses"].Started;
    }
    get hasCompleted() {
        return this.hiraganaGame.statusValue === _game_nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_3__["Statuses"].Completed;
    }
    get onMenu() {
        return this.hiraganaGame.statusValue === _game_nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_3__["Statuses"].Menu;
    }
    get completed() {
        return this.hiraganaGame.statusValue === _game_nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_3__["Statuses"].Completed;
    }
    get highscore() {
        return this.hiraganaGame.statusValue === _game_nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_3__["Statuses"].Highscore;
    }
    get game() {
        return _game_highscore_list__WEBPACK_IMPORTED_MODULE_1__["Games"].HiraganaMultiple;
    }
    isEnabled() {
        return this.hiraganaGame.hasStarted;
    }
    isVisible() {
        return this.hiraganaGame.hasStarted;
    }
    onSelect(furigana) {
        this.hiraganaGame.checkSelected(furigana);
    }
}
HiraganaMultipleChoiceComponent.ɵfac = function HiraganaMultipleChoiceComponent_Factory(t) { return new (t || HiraganaMultipleChoiceComponent)(); };
HiraganaMultipleChoiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HiraganaMultipleChoiceComponent, selectors: [["app-hiragana-multiple-choice"]], decls: 10, vars: 6, consts: [[1, "d-flex", "flex-column"], [1, "row", "w-100", "mb-5"], [1, "p-2", "mt-2", "text-center", "fw-bold", "display-1"], [1, "row", "w-100"], ["class", "col-3 px-0", 3, "furigana", "isEnabled", "isVisible", "selected", 4, "ngFor", "ngForOf"], ["title", "Choose the Romaji", "subtitle", "Find the equivalent romaji from the given choices", 3, "nihongoGame", 4, "ngIf"], ["type", "hiragana", 3, "nihongoGame", 4, "ngIf"], [3, "nihongoGame", 4, "ngIf"], [3, "nihongoGame", "game", 4, "ngIf"], [1, "col-3", "px-0", 3, "furigana", "isEnabled", "isVisible", "selected"], ["title", "Choose the Romaji", "subtitle", "Find the equivalent romaji from the given choices", 3, "nihongoGame"], ["type", "hiragana", 3, "nihongoGame"], [3, "nihongoGame"], [3, "nihongoGame", "game"]], template: function HiraganaMultipleChoiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HiraganaMultipleChoiceComponent_app_hiragana_choice_5_Template, 1, 3, "app-hiragana-choice", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HiraganaMultipleChoiceComponent_app_game_menu_6_Template, 1, 1, "app-game-menu", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HiraganaMultipleChoiceComponent_app_game_scoreboard_7_Template, 1, 1, "app-game-scoreboard", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HiraganaMultipleChoiceComponent_app_game_final_score_8_Template, 1, 1, "app-game-final-score", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HiraganaMultipleChoiceComponent_app_game_highscore_list_9_Template, 1, 2, "app-game-highscore-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.givenHiragana);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.multipleChoiceValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.onMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hiraganaGame.hasStarted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.completed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.highscore);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_hiragana_choice_hiragana_choice_component__WEBPACK_IMPORTED_MODULE_5__["HiraganaChoiceComponent"], _shared_game_menu_game_menu_component__WEBPACK_IMPORTED_MODULE_6__["GameMenuComponent"], _shared_game_scoreboard_game_scoreboard_component__WEBPACK_IMPORTED_MODULE_7__["GameScoreboardComponent"], _shared_game_final_score_game_final_score_component__WEBPACK_IMPORTED_MODULE_8__["GameFinalScoreComponent"], _shared_game_highscore_list_game_highscore_list_component__WEBPACK_IMPORTED_MODULE_9__["GameHighscoreListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXJhZ2FuYS1tdWx0aXBsZS1jaG9pY2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HiraganaMultipleChoiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hiragana-multiple-choice',
                templateUrl: './hiragana-multiple-choice.component.html',
                styleUrls: ['./hiragana-multiple-choice.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "VM58":
/*!***********************************************************************!*\
  !*** ./src/app/shared/game-menu/menu-button/menu-button.component.ts ***!
  \***********************************************************************/
/*! exports provided: MenuButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuButtonComponent", function() { return MenuButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_game_app_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/game/app-global */ "5IVi");
/* harmony import */ var src_app_game_highscore_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/game/highscore.list */ "p9ds");




class MenuButtonComponent {
    constructor() {
        this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.highscore = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    startGame() {
        this.started.emit();
    }
    goToHighscore() {
        this.highscore.emit();
    }
    goToGameMenu() {
        src_app_game_app_global__WEBPACK_IMPORTED_MODULE_1__["AppGlobal"].gameSelected = src_app_game_highscore_list__WEBPACK_IMPORTED_MODULE_2__["Games"].NoSelection;
    }
}
MenuButtonComponent.ɵfac = function MenuButtonComponent_Factory(t) { return new (t || MenuButtonComponent)(); };
MenuButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuButtonComponent, selectors: [["app-menu-button"]], outputs: { started: "started", highscore: "highscore" }, decls: 7, vars: 0, consts: [[1, "d-flex", "flex-column", "align-items-center", "mt-3", "menu"], ["type", "button", 1, "btn", "btn-light", "my-1", 3, "click"]], template: function MenuButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuButtonComponent_Template_button_click_1_listener() { return ctx.startGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuButtonComponent_Template_button_click_3_listener() { return ctx.goToHighscore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Highscore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuButtonComponent_Template_button_click_5_listener() { return ctx.goToGameMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Game Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 200px !important;\n  background-color: #e67e22c0;\n  color: white;\n}\n\n.menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #e67e22;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWVudS1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSiIsImZpbGUiOiJtZW51LWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjdlMjJjMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1lbnUgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjdlMjI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-button',
                templateUrl: './menu-button.component.html',
                styleUrls: ['./menu-button.component.scss']
            }]
    }], function () { return []; }, { started: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], highscore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _hiragana_romaji_timer_hiragana_romaji_timer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hiragana-romaji-timer/hiragana-romaji-timer.component */ "BYDN");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _hiragana_multiple_choice_hiragana_multiple_choice_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hiragana-multiple-choice/hiragana-multiple-choice.component */ "TBKY");
/* harmony import */ var _katakana_multiple_choice_katakana_multiple_choice_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./katakana-multiple-choice/katakana-multiple-choice.component */ "n3ry");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _hiragana_romaji_timer_hiragana_romaji_timer_component__WEBPACK_IMPORTED_MODULE_5__["HiraganaRomajiTimerComponent"],
        _hiragana_multiple_choice_hiragana_multiple_choice_component__WEBPACK_IMPORTED_MODULE_7__["HiraganaMultipleChoiceComponent"],
        _katakana_multiple_choice_katakana_multiple_choice_component__WEBPACK_IMPORTED_MODULE_8__["KatakanaMultipleChoiceComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                    _hiragana_romaji_timer_hiragana_romaji_timer_component__WEBPACK_IMPORTED_MODULE_5__["HiraganaRomajiTimerComponent"],
                    _hiragana_multiple_choice_hiragana_multiple_choice_component__WEBPACK_IMPORTED_MODULE_7__["HiraganaMultipleChoiceComponent"],
                    _katakana_multiple_choice_katakana_multiple_choice_component__WEBPACK_IMPORTED_MODULE_8__["KatakanaMultipleChoiceComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bPHt":
/*!***************************************************!*\
  !*** ./src/app/game/nihongo-base/nihongo-game.ts ***!
  \***************************************************/
/*! exports provided: Statuses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Statuses", function() { return Statuses; });
var Statuses;
(function (Statuses) {
    Statuses[Statuses["Stopped"] = 0] = "Stopped";
    Statuses[Statuses["Started"] = 1] = "Started";
    Statuses[Statuses["Menu"] = 2] = "Menu";
    Statuses[Statuses["Completed"] = 3] = "Completed";
    Statuses[Statuses["Failed"] = 4] = "Failed";
    Statuses[Statuses["Highscore"] = 5] = "Highscore";
})(Statuses || (Statuses = {}));


/***/ }),

/***/ "bhjN":
/*!*********************************************************************!*\
  !*** ./src/app/shared/hiragana-choice/hiragana-choice.component.ts ***!
  \*********************************************************************/
/*! exports provided: HiraganaChoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiraganaChoiceComponent", function() { return HiraganaChoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_model_furigana_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/furigana.model */ "BtRM");



class HiraganaChoiceComponent {
    constructor() {
        this.furigana = new src_app_model_furigana_model__WEBPACK_IMPORTED_MODULE_1__["FuriganaModel"]('n');
        this.isEnabled = false;
        this.isVisible = true;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onSelect() {
        if (this.isEnabled) {
            this.selected.emit(this.furigana);
        }
    }
    get romaji() {
        return this.furigana.romaji;
    }
    get hiragana() {
        return this.furigana.hiragana;
    }
}
HiraganaChoiceComponent.ɵfac = function HiraganaChoiceComponent_Factory(t) { return new (t || HiraganaChoiceComponent)(); };
HiraganaChoiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HiraganaChoiceComponent, selectors: [["app-hiragana-choice"]], inputs: { furigana: "furigana", isEnabled: "isEnabled", isVisible: "isVisible" }, outputs: { selected: "selected" }, decls: 3, vars: 3, consts: [[3, "className", "click"], [3, "className"]], template: function HiraganaChoiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HiraganaChoiceComponent_Template_div_click_0_listener() { return ctx.onSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", "tile d-flex flex-column border m-1 clickable " + (ctx.isEnabled ? "" : "disabled"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", "p-2 mt-2 text-center fw-weight-bold h5 " + (ctx.isVisible ? "visible" : "invisible"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.romaji);
    } }, styles: [".tile[_ngcontent-%COMP%]:hover {\n  background-color: #d1e7dd;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  cursor: not-allowed !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoaXJhZ2FuYS1jaG9pY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7QUFDSiIsImZpbGUiOiJoaXJhZ2FuYS1jaG9pY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGlsZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFlN2RkO1xyXG59XHJcblxyXG4uZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HiraganaChoiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hiragana-choice',
                templateUrl: './hiragana-choice.component.html',
                styleUrls: ['./hiragana-choice.component.scss']
            }]
    }], function () { return []; }, { furigana: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "e7fj":
/*!*****************************************************************!*\
  !*** ./src/app/shared/hiragana-tile/hiragana-tile.component.ts ***!
  \*****************************************************************/
/*! exports provided: HiraganaTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiraganaTileComponent", function() { return HiraganaTileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_model_furigana_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/furigana.model */ "BtRM");



class HiraganaTileComponent {
    constructor() {
        this.furigana = new src_app_model_furigana_model__WEBPACK_IMPORTED_MODULE_1__["FuriganaModel"]('n');
        this.isEnabled = false;
        this.isVisible = true;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onSelect() {
        if (this.isEnabled) {
            this.selected.emit(this.furigana);
        }
    }
    get romaji() {
        return this.furigana.romaji;
    }
    get hiragana() {
        return this.furigana.hiragana;
    }
}
HiraganaTileComponent.ɵfac = function HiraganaTileComponent_Factory(t) { return new (t || HiraganaTileComponent)(); };
HiraganaTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HiraganaTileComponent, selectors: [["app-hiragana-tile"]], inputs: { furigana: "furigana", isEnabled: "isEnabled", isVisible: "isVisible" }, outputs: { selected: "selected" }, decls: 6, vars: 4, consts: [[3, "className", "click"], [1, "p-1", "text-center", "fw-bold"], [1, "my-0"], [3, "className"]], template: function HiraganaTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HiraganaTileComponent_Template_div_click_0_listener() { return ctx.onSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", "tile d-flex flex-column border m-1 clickable " + (ctx.isEnabled ? "" : "disabled"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hiragana);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", "p-1 text-center " + (ctx.isVisible ? "visible" : "invisible"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.romaji);
    } }, styles: [".tile[_ngcontent-%COMP%]:hover {\n  background-color: #d1e7dd;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  cursor: not-allowed !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoaXJhZ2FuYS10aWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLDhCQUFBO0FBQ0oiLCJmaWxlIjoiaGlyYWdhbmEtdGlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aWxlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWU3ZGQ7XHJcbn1cclxuXHJcbi5kaXNhYmxlZCB7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HiraganaTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hiragana-tile',
                templateUrl: './hiragana-tile.component.html',
                styleUrls: ['./hiragana-tile.component.scss']
            }]
    }], function () { return []; }, { furigana: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 8, vars: 0, consts: [[1, "container"], [1, "d-flex", "flex-wrap", "justify-content-between", "align-items-center", "py-3", "my-4", "border-top"], [1, "col-md-4", "d-flex", "align-items-center"], [1, "text-muted"], [1, "col-md-4", "d-flex", "align-items-center", "justify-content-end"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A9 Jesrael Cruz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "2021 Nihongo Trainer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hU2R":
/*!*********************************************************!*\
  !*** ./src/app/shared/game-menu/game-menu.component.ts ***!
  \*********************************************************/
/*! exports provided: GameMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameMenuComponent", function() { return GameMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _menu_button_menu_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-button/menu-button.component */ "VM58");



class GameMenuComponent {
    constructor() {
        this.title = 'Guess the Hiragana';
        this.subtitle = 'Choose the hiragana based on given romaji';
    }
    ngOnInit() {
    }
    startGame() {
        var _a;
        (_a = this.nihongoGame) === null || _a === void 0 ? void 0 : _a.start();
    }
    goToHighscore() {
        var _a;
        (_a = this.nihongoGame) === null || _a === void 0 ? void 0 : _a.goToHighscore();
    }
}
GameMenuComponent.ɵfac = function GameMenuComponent_Factory(t) { return new (t || GameMenuComponent)(); };
GameMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameMenuComponent, selectors: [["app-game-menu"]], inputs: { nihongoGame: "nihongoGame", title: "title", subtitle: "subtitle" }, decls: 7, vars: 2, consts: [[1, "overlay", "d-flex", "flex-column", "justify-content-center", "align-items-center", "bg-orange"], [1, "menu", "p-5"], [1, "display-3"], [1, "lead"], [3, "started", "highscore"]], template: function GameMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-menu-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("started", function GameMenuComponent_Template_app_menu_button_started_6_listener() { return ctx.startGame(); })("highscore", function GameMenuComponent_Template_app_menu_button_highscore_6_listener() { return ctx.goToHighscore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subtitle, " ");
    } }, directives: [_menu_button_menu_button_component__WEBPACK_IMPORTED_MODULE_1__["MenuButtonComponent"]], styles: [".overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.bg-orange[_ngcontent-%COMP%] {\n  background-color: #e67e2280;\n}\n\n.menu[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxnYW1lLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFDSiIsImZpbGUiOiJnYW1lLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxufVxyXG5cclxuLmJnLW9yYW5nZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3ZTIyODA7XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-menu',
                templateUrl: './game-menu.component.html',
                styleUrls: ['./game-menu.component.scss']
            }]
    }], function () { return []; }, { nihongoGame: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "imSe":
/*!******************************************!*\
  !*** ./src/app/static-db/furigana.db.ts ***!
  \******************************************/
/*! exports provided: FuriganaDb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuriganaDb", function() { return FuriganaDb; });
/* harmony import */ var _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/furigana.model */ "BtRM");

class FuriganaDb {
    static randomHiragana(tiles = 96) {
        const hiragana = this.table.filter((furigana) => furigana.hasHiragana).map((f) => f);
        const random = (this.randomizeFurigana(hiragana, tiles));
        return random;
    }
    static randomKatakana(tiles = 96) {
        const hiragana = this.table.filter((furigana) => furigana.hasKatakana).map((f) => f);
        const random = (this.randomizeFurigana(hiragana, tiles));
        return random;
    }
    static sortedHiragana(tiles = 96) {
        const hiragana = this.table.filter((furigana) => furigana.hasHiragana).map((f) => f);
        return hiragana.slice(0, tiles);
    }
    static sortedKatakana(tiles = 96) {
        const hiragana = this.table.filter((furigana) => furigana.hasKatakana).map((f) => f);
        return hiragana.slice(0, tiles);
    }
    static randomizeFurigana(array, size) {
        const result = [];
        while (result.length < size && array.length > 0) {
            const index = Math.floor(Math.random() * array.length);
            result.push(array[index]);
            array.splice(index, 1);
        }
        return result;
    }
}
FuriganaDb.table = [
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('a'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('i'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('u'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('e'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('o'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('ka'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('ki'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('ku'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('ke'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('ko'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('sa'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('shi'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('su'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('se'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('so'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('ta'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('chi'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('tsu'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('te'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('to'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('na'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('ni'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('nu'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('ne'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('no'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('ha'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('hi'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('fu'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('he'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('ho'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('ma'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('mi'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('mu'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('me'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('mo'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('ya'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('yu'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('yo'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('ra'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('ri'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('ru'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('re'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('ro'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('wa'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('wo'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('n'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('ga'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('gi'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('gu'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('ge'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('go'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('za'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('ji'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('zu'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('ze'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('zo'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('da'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('dzi'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('dzu'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('de'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('do'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('ba'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('bi'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('bu'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('be'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('bo'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('pa'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('pi'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('pu'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('pe'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('po'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('kya'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('kyu'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('kyo'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('sha'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('shu'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('sho'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('cha'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('chu'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('cho'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('nya'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('nyu'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('nyo'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('hya'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('hyu'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('hyo'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('mya'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('myu'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('myo'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('rya'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('ryu'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('ryo'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('gya'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('gyu'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('gyo'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('jya'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('jyu'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('jyo'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('dzya'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('dzyu'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('dzyo'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('bya'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('byu'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('byo'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('pya'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('pyu'),
    new _model_furigana_model__WEBPACK_IMPORTED_MODULE_0__["FuriganaModel"]('pyo'),
];


/***/ }),

/***/ "j97u":
/*!*********************************************************!*\
  !*** ./src/app/game/nihongo-base/nihongo-scoreboard.ts ***!
  \*********************************************************/
/*! exports provided: NihongoScoreboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NihongoScoreboard", function() { return NihongoScoreboard; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

class NihongoScoreboard {
    constructor(scoreConfig) {
        this.lastTime = 0;
        this.time = 0;
        this.points = 0;
        this.errors = 0;
        this.given = null;
        this.timerSub = null;
        this.scoreConfig = null;
        this.lastTime = 0;
        this.time = 0;
        this.points = 0;
        this.errors = 0;
        this.given = null;
        this.timerSub = null;
        this.scoreConfig = scoreConfig;
    }
    start() {
        this.timerSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(1000)
            .subscribe(x => { this.countdown(); });
    }
    stop() {
        var _a;
        (_a = this.timerSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    missed() {
        var _a, _b;
        this.errors++;
        this.points -= (_b = (_a = this.scoreConfig) === null || _a === void 0 ? void 0 : _a.getMissedPoint()) !== null && _b !== void 0 ? _b : 0;
    }
    addPoint() {
        var _a, _b;
        this.points += (_b = (_a = this.scoreConfig) === null || _a === void 0 ? void 0 : _a.getPoint(this.lastTime, this.time)) !== null && _b !== void 0 ? _b : 0;
        this.lastTime = this.time;
    }
    setGiven(furigana) {
        this.given = furigana;
    }
    get timeNumber() {
        return this.time;
    }
    get timeValue() {
        const hour = Math.floor(this.time / 3600);
        const minute = Math.floor((this.time % 3600) / 60);
        const seconds = Math.floor((this.time % 3600) % 60);
        return `${this.min2digit(hour)}:${this.min2digit(minute)}:${this.min2digit(seconds)}`;
    }
    get pointValue() {
        return this.points;
    }
    get errorValue() {
        return this.errors;
    }
    get givenValue() {
        return this.given;
    }
    countdown() {
        this.time++;
    }
    min2digit(num) {
        if (num < 10) {
            return `0${num}`;
        }
        else {
            return `${num}`;
        }
    }
}


/***/ }),

/***/ "kktn":
/*!********************************************************!*\
  !*** ./src/app/game/nihongo-base/nihongo-game.base.ts ***!
  \********************************************************/
/*! exports provided: NihongoGameBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NihongoGameBase", function() { return NihongoGameBase; });
/* harmony import */ var _static_db_furigana_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../static-db/furigana.db */ "imSe");
/* harmony import */ var _highscore_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../highscore.list */ "p9ds");
/* harmony import */ var _hiragana_romaji_timer_score__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hiragana-romaji-timer.score */ "4lOu");
/* harmony import */ var _nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nihongo-base/nihongo-game */ "bPHt");
/* harmony import */ var _nihongo_base_nihongo_scoreboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nihongo-base/nihongo-scoreboard */ "j97u");





class NihongoGameBase {
    constructor() {
        this.table = _static_db_furigana_db__WEBPACK_IMPORTED_MODULE_0__["FuriganaDb"].randomHiragana();
        this.scoreboard = new _nihongo_base_nihongo_scoreboard__WEBPACK_IMPORTED_MODULE_4__["NihongoScoreboard"](new _hiragana_romaji_timer_score__WEBPACK_IMPORTED_MODULE_2__["HiraganaRomajiTimerScore"]());
        this.selected = [];
        this.status = _nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_3__["Statuses"].Menu;
        this.multipleChoice = [];
    }
    start() {
        this.selected = [];
        this.table = _static_db_furigana_db__WEBPACK_IMPORTED_MODULE_0__["FuriganaDb"].randomHiragana(20);
        this.scoreboard = new _nihongo_base_nihongo_scoreboard__WEBPACK_IMPORTED_MODULE_4__["NihongoScoreboard"](new _hiragana_romaji_timer_score__WEBPACK_IMPORTED_MODULE_2__["HiraganaRomajiTimerScore"]());
        this.status = _nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_3__["Statuses"].Started;
        this.scoreboard.start();
        this.scoreboard.setGiven(this.chooseFurigana());
        this.multipleChoice = this.getMultipleChoice();
    }
    goToMenu() {
        this.status = _nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_3__["Statuses"].Menu;
    }
    goToHighscore() {
        this.status = _nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_3__["Statuses"].Highscore;
    }
    checkSelected(chosen) {
        var _a;
        if (chosen.romaji === ((_a = this.scoreboard.givenValue) === null || _a === void 0 ? void 0 : _a.romaji)) {
            this.addSelected(chosen);
            this.scoreboard.addPoint();
            this.scoreboard.setGiven(this.chooseFurigana());
            this.multipleChoice = this.getMultipleChoice();
            if (this.table.length === this.selected.length) {
                this.status = _nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_3__["Statuses"].Completed;
                this.saveHighscore();
                this.scoreboard.stop();
            }
        }
        else {
            this.scoreboard.missed();
        }
    }
    getTimeValue() {
        return this.scoreboard.timeNumber;
    }
    getTable() {
        return this.table;
    }
    getSelected() {
        return this.selected.map((furigana) => furigana.duplicate());
    }
    getTime() {
        return this.scoreboard.timeValue;
    }
    getPoint() {
        return this.scoreboard.pointValue;
    }
    getError() {
        return this.scoreboard.errorValue;
    }
    getGiven() {
        return this.scoreboard.givenValue;
    }
    get statusValue() {
        return this.status;
    }
    get multipleChoiceValue() {
        return this.multipleChoice;
    }
    get hasStarted() {
        return this.status === _nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_3__["Statuses"].Started;
    }
    get onMenu() {
        return this.status === _nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_3__["Statuses"].Menu;
    }
    saveHighscore() {
        const highscore = new _highscore_list__WEBPACK_IMPORTED_MODULE_1__["HighscoreModel"](this.getPoint(), this.getTimeValue(), this.getError());
        _highscore_list__WEBPACK_IMPORTED_MODULE_1__["HighscoreList"].addHighscore(highscore, _highscore_list__WEBPACK_IMPORTED_MODULE_1__["Games"].HiraganaMultiple);
    }
    getMultipleChoice() {
        const furiganaSet = [];
        const givenIndex = Math.floor(Math.random() * 4);
        while (furiganaSet.length < 4) {
            if (furiganaSet.length === givenIndex) {
                if (this.scoreboard.givenValue) {
                    furiganaSet.push(this.scoreboard.givenValue);
                }
            }
            const furigana = this.randomFurigana(furiganaSet);
            if (furigana) {
                furiganaSet.push(furigana);
            }
            if (furiganaSet.length === givenIndex) {
                if (this.scoreboard.givenValue) {
                    furiganaSet.push(this.scoreboard.givenValue);
                }
            }
        }
        return furiganaSet;
    }
    addSelected(furigana) {
        this.selected.push(furigana.duplicate());
    }
    chooseFurigana() {
        const table = this.table.filter((f) => {
            const selected = this.selected.filter((s) => s.romaji === f.romaji);
            return selected.length === 0;
        });
        const index = Math.floor(Math.random() * table.length);
        return table[index];
    }
    randomFurigana(furiganaSet) {
        const given = this.scoreboard.givenValue;
        const table = this.table.filter((f) => {
            const set = furiganaSet.filter((fs) => fs.romaji === f.romaji);
            return set.length === 0 && f.romaji !== (given === null || given === void 0 ? void 0 : given.romaji);
        });
        const index = Math.floor(Math.random() * table.length);
        return table[index];
    }
}


/***/ }),

/***/ "m8M7":
/*!***********************************************************************!*\
  !*** ./src/app/shared/game-final-score/game-final-score.component.ts ***!
  \***********************************************************************/
/*! exports provided: GameFinalScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameFinalScoreComponent", function() { return GameFinalScoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GameFinalScoreComponent {
    constructor() { }
    get score() {
        var _a, _b;
        return (_b = (_a = this.nihongoGame) === null || _a === void 0 ? void 0 : _a.getPoint()) !== null && _b !== void 0 ? _b : 0;
    }
    get time() {
        var _a, _b;
        return (_b = (_a = this.nihongoGame) === null || _a === void 0 ? void 0 : _a.getTime()) !== null && _b !== void 0 ? _b : '00:00:00';
    }
    get missed() {
        var _a, _b;
        return (_b = (_a = this.nihongoGame) === null || _a === void 0 ? void 0 : _a.getError()) !== null && _b !== void 0 ? _b : 0;
    }
    ngOnInit() {
    }
    goToMenu() {
        var _a;
        (_a = this.nihongoGame) === null || _a === void 0 ? void 0 : _a.goToMenu();
    }
}
GameFinalScoreComponent.ɵfac = function GameFinalScoreComponent_Factory(t) { return new (t || GameFinalScoreComponent)(); };
GameFinalScoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameFinalScoreComponent, selectors: [["app-game-final-score"]], inputs: { nihongoGame: "nihongoGame" }, decls: 18, vars: 3, consts: [[1, "overlay", "d-flex", "flex-column", "justify-content-center", "align-items-center", "bg-orange"], [1, "menu", "p-5", "d-flex", "flex-column", "justify-content-center", "align-items-center"], [1, "display-6"], [1, "display-3", "fw-bold"], [1, "h5", "fw-normal", "row", "details"], [1, "col-4", "text-start"], [1, "col-8", "text-end"], ["type", "button", 1, "btn", "btn-light", "mt-4", 3, "click"]], template: function GameFinalScoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Final Score");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Time:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Miss:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameFinalScoreComponent_Template_button_click_16_listener() { return ctx.goToMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Go to Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.score, " pts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.missed);
    } }, styles: [".overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.bg-orange[_ngcontent-%COMP%] {\n  background-color: #e67e2280;\n}\n\n.details[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.menu[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  background-color: white;\n}\n\n.menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 200px !important;\n  background-color: #e67e22c0;\n  color: white;\n}\n\n.menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #e67e22;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxnYW1lLWZpbmFsLXNjb3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBQ0k7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQUNSOztBQUVJO0VBQ0kseUJBQUE7QUFBUiIsImZpbGUiOiJnYW1lLWZpbmFsLXNjb3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5iZy1vcmFuZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2N2UyMjgwO1xyXG59XHJcblxyXG4uZGV0YWlscyB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3ZTIyYzA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2N2UyMjtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameFinalScoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-final-score',
                templateUrl: './game-final-score.component.html',
                styleUrls: ['./game-final-score.component.scss']
            }]
    }], function () { return []; }, { nihongoGame: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "n3ry":
/*!********************************************************************************!*\
  !*** ./src/app/katakana-multiple-choice/katakana-multiple-choice.component.ts ***!
  \********************************************************************************/
/*! exports provided: KatakanaMultipleChoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KatakanaMultipleChoiceComponent", function() { return KatakanaMultipleChoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _game_highscore_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/highscore.list */ "p9ds");
/* harmony import */ var _game_katakana_multiple_choice_katakana_multiple_choice_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game/katakana-multiple-choice/katakana-multiple-choice.game */ "GTpk");
/* harmony import */ var _game_nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game/nihongo-base/nihongo-game */ "bPHt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_hiragana_choice_hiragana_choice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/hiragana-choice/hiragana-choice.component */ "bhjN");
/* harmony import */ var _shared_game_menu_game_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/game-menu/game-menu.component */ "hU2R");
/* harmony import */ var _shared_game_scoreboard_game_scoreboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/game-scoreboard/game-scoreboard.component */ "ONAn");
/* harmony import */ var _shared_game_final_score_game_final_score_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/game-final-score/game-final-score.component */ "m8M7");
/* harmony import */ var _shared_game_highscore_list_game_highscore_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/game-highscore-list/game-highscore-list.component */ "ws5B");











function KatakanaMultipleChoiceComponent_app_hiragana_choice_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-hiragana-choice", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function KatakanaMultipleChoiceComponent_app_hiragana_choice_5_Template_app_hiragana_choice_selected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const furigana_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("furigana", furigana_r5)("isEnabled", ctx_r0.isEnabled())("isVisible", ctx_r0.isVisible());
} }
function KatakanaMultipleChoiceComponent_app_game_menu_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-menu", 10);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nihongoGame", ctx_r1.katakanaGame);
} }
function KatakanaMultipleChoiceComponent_app_game_scoreboard_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-scoreboard", 11);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nihongoGame", ctx_r2.katakanaGame);
} }
function KatakanaMultipleChoiceComponent_app_game_final_score_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-final-score", 12);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nihongoGame", ctx_r3.katakanaGame);
} }
function KatakanaMultipleChoiceComponent_app_game_highscore_list_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-highscore-list", 13);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nihongoGame", ctx_r4.katakanaGame)("game", ctx_r4.game);
} }
class KatakanaMultipleChoiceComponent {
    constructor() {
        this.katakanaGame = new _game_katakana_multiple_choice_katakana_multiple_choice_game__WEBPACK_IMPORTED_MODULE_2__["KatakanaMultipleChoiceGame"]();
    }
    ngOnInit() { }
    get multipleChoiceValue() {
        return this.katakanaGame.multipleChoiceValue;
    }
    get givenKatakana() {
        var _a, _b;
        return (_b = (_a = this.katakanaGame.getGiven()) === null || _a === void 0 ? void 0 : _a.katakana) !== null && _b !== void 0 ? _b : '';
    }
    get hasStarted() {
        return this.katakanaGame.statusValue === _game_nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_3__["Statuses"].Started;
    }
    get hasCompleted() {
        return this.katakanaGame.statusValue === _game_nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_3__["Statuses"].Completed;
    }
    get onMenu() {
        return this.katakanaGame.statusValue === _game_nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_3__["Statuses"].Menu;
    }
    get completed() {
        return this.katakanaGame.statusValue === _game_nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_3__["Statuses"].Completed;
    }
    get highscore() {
        return this.katakanaGame.statusValue === _game_nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_3__["Statuses"].Highscore;
    }
    get game() {
        return _game_highscore_list__WEBPACK_IMPORTED_MODULE_1__["Games"].KatakanaMultiple;
    }
    isEnabled() {
        return this.katakanaGame.hasStarted;
    }
    isVisible() {
        return this.katakanaGame.hasStarted;
    }
    onSelect(furigana) {
        this.katakanaGame.checkSelected(furigana);
    }
}
KatakanaMultipleChoiceComponent.ɵfac = function KatakanaMultipleChoiceComponent_Factory(t) { return new (t || KatakanaMultipleChoiceComponent)(); };
KatakanaMultipleChoiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KatakanaMultipleChoiceComponent, selectors: [["app-katakana-multiple-choice"]], decls: 10, vars: 6, consts: [[1, "d-flex", "flex-column"], [1, "row", "w-100", "mb-5"], [1, "p-2", "mt-2", "text-center", "fw-bold", "display-1"], [1, "row", "w-100"], ["class", "col-3 px-0", 3, "furigana", "isEnabled", "isVisible", "selected", 4, "ngFor", "ngForOf"], ["title", "Choose the Romaji", "subtitle", "Find the equivalent romaji from the given choices", 3, "nihongoGame", 4, "ngIf"], ["type", "hiragana", 3, "nihongoGame", 4, "ngIf"], [3, "nihongoGame", 4, "ngIf"], [3, "nihongoGame", "game", 4, "ngIf"], [1, "col-3", "px-0", 3, "furigana", "isEnabled", "isVisible", "selected"], ["title", "Choose the Romaji", "subtitle", "Find the equivalent romaji from the given choices", 3, "nihongoGame"], ["type", "hiragana", 3, "nihongoGame"], [3, "nihongoGame"], [3, "nihongoGame", "game"]], template: function KatakanaMultipleChoiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, KatakanaMultipleChoiceComponent_app_hiragana_choice_5_Template, 1, 3, "app-hiragana-choice", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, KatakanaMultipleChoiceComponent_app_game_menu_6_Template, 1, 1, "app-game-menu", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, KatakanaMultipleChoiceComponent_app_game_scoreboard_7_Template, 1, 1, "app-game-scoreboard", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, KatakanaMultipleChoiceComponent_app_game_final_score_8_Template, 1, 1, "app-game-final-score", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, KatakanaMultipleChoiceComponent_app_game_highscore_list_9_Template, 1, 2, "app-game-highscore-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.givenKatakana);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.multipleChoiceValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.onMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.katakanaGame.hasStarted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.completed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.highscore);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_hiragana_choice_hiragana_choice_component__WEBPACK_IMPORTED_MODULE_5__["HiraganaChoiceComponent"], _shared_game_menu_game_menu_component__WEBPACK_IMPORTED_MODULE_6__["GameMenuComponent"], _shared_game_scoreboard_game_scoreboard_component__WEBPACK_IMPORTED_MODULE_7__["GameScoreboardComponent"], _shared_game_final_score_game_final_score_component__WEBPACK_IMPORTED_MODULE_8__["GameFinalScoreComponent"], _shared_game_highscore_list_game_highscore_list_component__WEBPACK_IMPORTED_MODULE_9__["GameHighscoreListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrYXRha2FuYS1tdWx0aXBsZS1jaG9pY2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KatakanaMultipleChoiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-katakana-multiple-choice',
                templateUrl: './katakana-multiple-choice.component.html',
                styleUrls: ['./katakana-multiple-choice.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nTLI":
/*!*********************************************************************************!*\
  !*** ./src/app/game/hiragana-multiple-choice/hiragana-multiple-choice.game..ts ***!
  \*********************************************************************************/
/*! exports provided: HiraganaMultipleChoiceGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiraganaMultipleChoiceGame", function() { return HiraganaMultipleChoiceGame; });
/* harmony import */ var _static_db_furigana_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../static-db/furigana.db */ "imSe");
/* harmony import */ var _highscore_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../highscore.list */ "p9ds");
/* harmony import */ var _hiragana_romaji_timer_score__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hiragana-romaji-timer.score */ "4lOu");
/* harmony import */ var _nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nihongo-base/nihongo-game */ "bPHt");
/* harmony import */ var _nihongo_base_nihongo_game_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nihongo-base/nihongo-game.base */ "kktn");
/* harmony import */ var _nihongo_base_nihongo_scoreboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nihongo-base/nihongo-scoreboard */ "j97u");






class HiraganaMultipleChoiceGame extends _nihongo_base_nihongo_game_base__WEBPACK_IMPORTED_MODULE_4__["NihongoGameBase"] {
    constructor() {
        super(...arguments);
        this.table = _static_db_furigana_db__WEBPACK_IMPORTED_MODULE_0__["FuriganaDb"].randomHiragana();
        this.scoreboard = new _nihongo_base_nihongo_scoreboard__WEBPACK_IMPORTED_MODULE_5__["NihongoScoreboard"](new _hiragana_romaji_timer_score__WEBPACK_IMPORTED_MODULE_2__["HiraganaRomajiTimerScore"]());
    }
    start() {
        this.selected = [];
        this.table = _static_db_furigana_db__WEBPACK_IMPORTED_MODULE_0__["FuriganaDb"].randomHiragana(20);
        this.scoreboard = new _nihongo_base_nihongo_scoreboard__WEBPACK_IMPORTED_MODULE_5__["NihongoScoreboard"](new _hiragana_romaji_timer_score__WEBPACK_IMPORTED_MODULE_2__["HiraganaRomajiTimerScore"]());
        this.status = _nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_3__["Statuses"].Started;
        this.scoreboard.start();
        this.scoreboard.setGiven(this.chooseFurigana());
        this.multipleChoice = this.getMultipleChoice();
    }
    checkSelected(chosen) {
        var _a;
        if (chosen.romaji === ((_a = this.scoreboard.givenValue) === null || _a === void 0 ? void 0 : _a.romaji)) {
            this.addSelected(chosen);
            this.scoreboard.addPoint();
            this.scoreboard.setGiven(this.chooseFurigana());
            this.multipleChoice = this.getMultipleChoice();
            if (this.table.length === this.selected.length) {
                this.status = _nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_3__["Statuses"].Completed;
                this.saveHighscore();
                this.scoreboard.stop();
            }
        }
        else {
            this.scoreboard.missed();
        }
    }
    saveHighscore() {
        const highscore = new _highscore_list__WEBPACK_IMPORTED_MODULE_1__["HighscoreModel"](this.getPoint(), this.getTimeValue(), this.getError());
        _highscore_list__WEBPACK_IMPORTED_MODULE_1__["HighscoreList"].addHighscore(highscore, _highscore_list__WEBPACK_IMPORTED_MODULE_1__["Games"].HiraganaMultiple);
    }
}


/***/ }),

/***/ "oDhR":
/*!*****************************************************************!*\
  !*** ./src/app/shared/game-selector/game-selector.component.ts ***!
  \*****************************************************************/
/*! exports provided: GameSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameSelectorComponent", function() { return GameSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_game_highscore_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/game/highscore.list */ "p9ds");



class GameSelectorComponent {
    constructor() {
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.availableGames = src_app_game_highscore_list__WEBPACK_IMPORTED_MODULE_1__["Games"];
    }
    selectGame(selection) {
        this.selected.emit(selection);
    }
}
GameSelectorComponent.ɵfac = function GameSelectorComponent_Factory(t) { return new (t || GameSelectorComponent)(); };
GameSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameSelectorComponent, selectors: [["app-game-selector"]], outputs: { selected: "selected" }, decls: 10, vars: 0, consts: [[1, "d-flex", "flex-column"], [1, "overlay", "d-flex", "flex-column", "justify-content-center", "align-items-center", "bg-orange"], [1, "menu", "p-5", "d-flex", "flex-column", "justify-content-center", "align-items-center"], [1, "display-3"], [1, "mt-3", "d-flex", "flex-column"], ["type", "button", 1, "btn", "btn-light", "my-1", 3, "click"]], template: function GameSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Game Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameSelectorComponent_Template_button_click_6_listener() { return ctx.selectGame(ctx.availableGames.HiraganaMultiple); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Hiragana - Romaji ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameSelectorComponent_Template_button_click_8_listener() { return ctx.selectGame(ctx.availableGames.KatakanaMultiple); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Katakana - Romaji ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.bg-orange[_ngcontent-%COMP%] {\n  background-color: #e67e2280;\n}\n\n.details[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.menu[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  background-color: white;\n}\n\n.menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 300px !important;\n  background-color: #e67e22c0;\n  color: white;\n}\n\n.menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #e67e22;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxnYW1lLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBQ0k7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQUNSOztBQUVJO0VBQ0kseUJBQUE7QUFBUiIsImZpbGUiOiJnYW1lLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5iZy1vcmFuZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2N2UyMjgwO1xyXG59XHJcblxyXG4uZGV0YWlscyB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3ZTIyYzA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2N2UyMjtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameSelectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-selector',
                templateUrl: './game-selector.component.html',
                styleUrls: ['./game-selector.component.scss']
            }]
    }], function () { return []; }, { selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "p9ds":
/*!****************************************!*\
  !*** ./src/app/game/highscore.list.ts ***!
  \****************************************/
/*! exports provided: Games, HighscoreList, HighscoreBank, HighscoreModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Games", function() { return Games; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighscoreList", function() { return HighscoreList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighscoreBank", function() { return HighscoreBank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighscoreModel", function() { return HighscoreModel; });
var Games;
(function (Games) {
    Games["HiraganaMultiple"] = "HiraganaMultiple";
    Games["KatakanaMultiple"] = "KatakanaMultiple";
    Games["NoSelection"] = "NoSelection";
})(Games || (Games = {}));
class HighscoreList {
    static getHighscores() {
        const myHighscore = [];
        const item = localStorage.getItem('highscores');
        const highscoreBank = JSON.parse(item !== null && item !== void 0 ? item : '[]');
        highscoreBank.forEach((h) => {
            const key = h.key;
            const highscores = h.highscores;
            if (Object.keys(Games).includes(key) && Array.isArray(highscores)) {
                const eachHighscore = [];
                highscores.forEach((hs) => {
                    const point = hs.point;
                    const time = hs.time;
                    const missed = hs.missed;
                    if (!isNaN(point) && !isNaN(time) && !isNaN(missed) && isNaN(key)) {
                        eachHighscore.push(new HighscoreModel(point, time, missed));
                    }
                });
                myHighscore.push(new HighscoreBank(key, eachHighscore));
            }
        });
        this.highscores = myHighscore;
    }
    static addHighscore(highscore, key) {
        var _a;
        const game = (_a = this.highscores.find((h) => h.key === key)) !== null && _a !== void 0 ? _a : new HighscoreBank(key, []);
        game.highscores.push(highscore);
        game.highscores.sort((a, b) => {
            if (a.point === b.point) {
                if (a.time === b.time) {
                    if (a.missed === b.missed) {
                        return 0;
                    }
                    else if (a.missed < b.missed) {
                        return 1;
                    }
                    else {
                        return -1;
                    }
                }
                else if (a.time < b.time) {
                    return 1;
                }
                else {
                    return -1;
                }
            }
            else if (a.point < b.point) {
                return 1;
            }
            else {
                return -1;
            }
        });
        if (game.highscores.length > 10) {
            game.highscores = game.highscores.slice(0, 10);
        }
        if (this.highscores.findIndex((h) => h.key === key) === -1) {
            this.highscores.push(game);
        }
        this.saveHighscore();
    }
    static saveHighscore() {
        localStorage.setItem('highscores', JSON.stringify(this.highscores));
    }
}
HighscoreList.highscores = [];
class HighscoreBank {
    constructor(key, highscores) {
        this.key = key;
        this.highscores = highscores;
    }
}
class HighscoreModel {
    constructor(point, time, missed) {
        this.point = point;
        this.time = time;
        this.missed = missed;
    }
    get timeValue() {
        const hour = Math.floor(this.time / 3600);
        const minute = Math.floor((this.time % 3600) / 60);
        const seconds = Math.floor((this.time % 3600) % 60);
        return `${this.min2digit(hour)}:${this.min2digit(minute)}:${this.min2digit(seconds)}`;
    }
    min2digit(num) {
        if (num < 10) {
            return `0${num}`;
        }
        else {
            return `${num}`;
        }
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wXfM":
/*!****************************************************!*\
  !*** ./src/app/game/hiragana-romaji-timer.game.ts ***!
  \****************************************************/
/*! exports provided: HiraganaRomajiTimerGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiraganaRomajiTimerGame", function() { return HiraganaRomajiTimerGame; });
/* harmony import */ var _static_db_furigana_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../static-db/furigana.db */ "imSe");
/* harmony import */ var _hiragana_romaji_timer_score__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hiragana-romaji-timer.score */ "4lOu");
/* harmony import */ var _nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nihongo-base/nihongo-game */ "bPHt");
/* harmony import */ var _nihongo_base_nihongo_scoreboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nihongo-base/nihongo-scoreboard */ "j97u");




class HiraganaRomajiTimerGame {
    constructor() {
        this.table = _static_db_furigana_db__WEBPACK_IMPORTED_MODULE_0__["FuriganaDb"].randomHiragana();
        this.scoreboard = new _nihongo_base_nihongo_scoreboard__WEBPACK_IMPORTED_MODULE_3__["NihongoScoreboard"](new _hiragana_romaji_timer_score__WEBPACK_IMPORTED_MODULE_1__["HiraganaRomajiTimerScore"]());
        this.selected = [];
        this.status = _nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_2__["Statuses"].Menu;
        this.multipleChoiceValue = [];
    }
    start() {
        this.selected = [];
        this.table = _static_db_furigana_db__WEBPACK_IMPORTED_MODULE_0__["FuriganaDb"].randomHiragana(20);
        this.scoreboard = new _nihongo_base_nihongo_scoreboard__WEBPACK_IMPORTED_MODULE_3__["NihongoScoreboard"](new _hiragana_romaji_timer_score__WEBPACK_IMPORTED_MODULE_1__["HiraganaRomajiTimerScore"]());
        this.status = _nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_2__["Statuses"].Started;
        this.scoreboard.start();
        this.chooseFurigana();
    }
    goToMenu() {
        this.status = _nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_2__["Statuses"].Menu;
    }
    goToHighscore() {
        this.status = _nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_2__["Statuses"].Highscore;
    }
    checkSelected(chosen) {
        var _a;
        if (chosen.romaji === ((_a = this.scoreboard.givenValue) === null || _a === void 0 ? void 0 : _a.romaji)) {
            this.addSelected(chosen);
            this.scoreboard.addPoint();
            this.chooseFurigana();
            if (this.table.length === this.selected.length) {
                this.status = _nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_2__["Statuses"].Completed;
                this.scoreboard.stop();
            }
        }
        else {
            this.scoreboard.missed();
            if (this.scoreboard.errorValue >= 3) {
                this.status = _nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_2__["Statuses"].Failed;
                this.scoreboard.stop();
            }
        }
    }
    getTimeValue() {
        return this.scoreboard.timeNumber;
    }
    getTable() {
        return this.table;
    }
    getSelected() {
        return this.selected.map((furigana) => furigana.duplicate());
    }
    getTime() {
        return this.scoreboard.timeValue;
    }
    getPoint() {
        return this.scoreboard.pointValue;
    }
    getError() {
        return this.scoreboard.errorValue;
    }
    getGiven() {
        return this.scoreboard.givenValue;
    }
    get statusValue() {
        return this.status;
    }
    get hasStarted() {
        return this.status === _nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_2__["Statuses"].Started;
    }
    get onMenu() {
        return this.status === _nihongo_base_nihongo_game__WEBPACK_IMPORTED_MODULE_2__["Statuses"].Menu;
    }
    addSelected(furigana) {
        this.selected.push(furigana.duplicate());
    }
    chooseFurigana() {
        const table = this.table.filter((f) => {
            const selected = this.selected.filter((s) => s.romaji === f.romaji);
            return selected.length === 0;
        });
        const index = Math.floor(Math.random() * table.length);
        this.scoreboard.setGiven(table[index]);
    }
}


/***/ }),

/***/ "ws5B":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/game-highscore-list/game-highscore-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GameHighscoreListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameHighscoreListComponent", function() { return GameHighscoreListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_game_highscore_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/game/highscore.list */ "p9ds");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function GameHighscoreListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const highscore_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", highscore_r1.point, " pts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](highscore_r1.timeValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](highscore_r1.missed);
} }
class GameHighscoreListComponent {
    constructor() {
        this.highscoreList = [];
    }
    ngOnInit() {
        var _a, _b;
        console.log(src_app_game_highscore_list__WEBPACK_IMPORTED_MODULE_1__["HighscoreList"].highscores);
        if (this.game) {
            this.highscoreList = (_b = (_a = src_app_game_highscore_list__WEBPACK_IMPORTED_MODULE_1__["HighscoreList"].highscores.find((h) => h.key === this.game)) === null || _a === void 0 ? void 0 : _a.highscores) !== null && _b !== void 0 ? _b : [];
        }
    }
    goToMenu() {
        var _a;
        (_a = this.nihongoGame) === null || _a === void 0 ? void 0 : _a.goToMenu();
    }
}
GameHighscoreListComponent.ɵfac = function GameHighscoreListComponent_Factory(t) { return new (t || GameHighscoreListComponent)(); };
GameHighscoreListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameHighscoreListComponent, selectors: [["app-game-highscore-list"]], inputs: { nihongoGame: "nihongoGame", game: "game" }, decls: 16, vars: 1, consts: [[1, "overlay", "d-flex", "flex-column", "justify-content-center", "align-items-center", "bg-orange"], [1, "menu", "p-5", "d-flex", "flex-column", "justify-content-center", "align-items-center"], [1, "display-6"], [1, "h5", "fw-normal", "row", "table-list", "mt-3"], [1, "col-2", "text-center", "fw-bold"], [1, "col-4", "text-center", "fw-bold"], ["class", "h5 fw-normal row table-list py-2", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-light", "mt-4", 3, "click"], [1, "h5", "fw-normal", "row", "table-list", "py-2"], [1, "col-2", "text-center"], [1, "col-4", "text-center"]], template: function GameHighscoreListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Highscore List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Missed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, GameHighscoreListComponent_div_13_Template, 9, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameHighscoreListComponent_Template_button_click_14_listener() { return ctx.goToMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Go to Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.highscoreList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.bg-orange[_ngcontent-%COMP%] {\n  background-color: #e67e2280;\n}\n\n.table-list[_ngcontent-%COMP%] {\n  width: 600px;\n}\n\n.menu[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  background-color: white;\n}\n\n.menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 200px !important;\n  background-color: #e67e22c0;\n  color: white;\n}\n\n.menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #e67e22;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxnYW1lLWhpZ2hzY29yZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBQ0k7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQUNSOztBQUVJO0VBQ0kseUJBQUE7QUFBUiIsImZpbGUiOiJnYW1lLWhpZ2hzY29yZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5iZy1vcmFuZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2N2UyMjgwO1xyXG59XHJcblxyXG4udGFibGUtbGlzdCB7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3ZTIyYzA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2N2UyMjtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameHighscoreListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-highscore-list',
                templateUrl: './game-highscore-list.component.html',
                styleUrls: ['./game-highscore-list.component.scss']
            }]
    }], function () { return []; }, { nihongoGame: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], game: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map