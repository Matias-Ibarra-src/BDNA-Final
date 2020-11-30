"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const response_module_1 = __importDefault(require("../../modules/response.module"));
const user_controller_1 = __importDefault(require("./user.controller"));
const router = express_1.default.Router();
router.get("/all", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_controller_1.default.getAllUsers();
            response_module_1.default.success(req, res, user);
        }
        catch (error) {
            response_module_1.default.error(req, res, "Error desconocido");
        }
    });
});
router.get('/:id', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params['id'];
        try {
            let user = yield user_controller_1.default.getUserById(id);
            response_module_1.default.success(req, res, user);
        }
        catch (error) {
            response_module_1.default.error(req, res, "Error desconocido");
        }
    });
});
router.get('/:email', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const email = req.params['email'];
        try {
            let user = yield user_controller_1.default.getUserByEmail(email);
            response_module_1.default.success(req, res, user);
        }
        catch (error) {
            response_module_1.default.error(req, res, "Error desconocido");
        }
    });
});
router.post("/add", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = req.body;
        try {
            const Result = yield user_controller_1.default.addUser(user);
            response_module_1.default.success(req, res, Result, 201);
        }
        catch (error) {
            response_module_1.default.error(req, res, "Error desconocido");
        }
    });
});
exports.default = router;
