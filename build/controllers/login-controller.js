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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginnController = void 0;
const database_1 = require("../database");
class LoginnController {
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.pool.query('SELECT * FROM usuarios');
            res.json(result[0]);
        });
    }
    getByIdUsr(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield database_1.pool.query('SELECT * FROM usuarios WHERE idUsr=?', [id]);
            res.json(result[0]);
        });
    }
    getUsr(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usr } = req.params;
            const { pwd } = req.params;
            const result = yield database_1.pool.query('SELECT * FROM usuarios WHERE usr=? AND pwd=?', [usr, pwd]);
            res.json(result[0]);
        });
    }
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usr } = req.params;
            const result = yield database_1.pool.query('SELECT * FROM usuarios WHERE usr=? AND pwd=?', [usr, req.body.pwd]);
            res.json(result[0]);
        });
    }
    insertUsr(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.pool.query('INSERT INTO usuarios SET ?', [req.body]);
            res.json({ Message: 'Se inserto correctamente' });
        });
    }
    updateUsr(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.pool.query('UPDATE usuarios SET ? WHERE idUsr=?', [req.body, id]);
            res.json({ mesagge: 'Se ha actualizado con exito' });
        });
    }
    deleteUsr(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.pool.query('DELETE FROM usuarios WHERE idUsr=?', [id]);
            res.json({ Message: 'Se ha eliminado correctamente' });
        });
    }
}
exports.loginnController = new LoginnController;
