import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HrmDispatch, useAppSelector } from '../../store';
import { EExpenseType, fetchCreateExpense } from '../../store/feature/expensesSlice';
import Swal from 'sweetalert2';

function ExpensesPopup() {
    const dispatch = useDispatch<HrmDispatch>();
    const token = useAppSelector(state => state.auth.token);

    const [amount, setAmount] = useState<number>(0);
    const [expenseType, setExpenseType] = useState<EExpenseType>(EExpenseType.YEMEK);
    const [description, setDescription] = useState<string>('');
    const [expensesDate, setExpensesDate] = useState<string>('');
    const [document, setDocument] = useState<string>('');   

    const AddExpenses = () => {
        dispatch(fetchCreateExpense({
            token: token,
            amount: amount,
            expenseType: expenseType,
            description: description,
            expensesDate: expensesDate,
            document: document,
        })).then(data => {
            console.log(data)
            if (data.payload === true) {
                Swal.fire("Başarılı!", "Harcama kaydedildi!", "success");
            } else {
                Swal.fire("Hata!", "Harcama kaydedilemedi!", "error");
            }
        })
    }

    return (
        <div className="modal fade" id="exampleModal4" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header bg-dark">
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="card" style={{ width: '25rem' }}>
                            <div className="card-header text-center">
                                <h5 className="card-title">Harcama Bilgileri</h5>
                            </div>
                            <div className="list-group list-group-flush">
                                <div className="list-group-item">
                                    <label>Harcama Türü</label>
                                    <select 
                                        className="form-control"
                                        value={expenseType}
                                        onChange={(e) => setExpenseType(e.target.value as EExpenseType)}
                                    >
                                        <option value={EExpenseType.YEMEK}>Yemek</option>
                                        <option value={EExpenseType.KONAKLAMA}>Konaklama</option>
                                        <option value={EExpenseType.ULASIM}>Ulaşım</option>
                                        <option value={EExpenseType.EGLENCE}>Eğlence</option>
                                        <option value={EExpenseType.SAGLIK}>Sağlık</option>
                                        <option value={EExpenseType.EGITIM}>Eğitim</option>
                                        <option value={EExpenseType.DIGER}>Diğer</option>
                                    </select>
                                </div>
                                <div className="list-group-item">
                                    <label>Harcama Tutarı</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={amount}
                                        onChange={(e) => setAmount(Number(e.target.value))}
                                    />
                                </div>
                                <div className="list-group-item">
                                    <label>Açıklama</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                                <div className="list-group-item">
                                    <label>Harcama Tarihi</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={expensesDate}
                                        onChange={(e) => setExpensesDate(e.target.value)}
                                    />
                                </div>
                                <div className="list-group-item">
                                    <label>Belge</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={document}
                                        onChange={(e) => setDocument(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="card-footer text-end">
                                <button 
                                    type="button" 
                                    className="btn btn-primary"
                                    onClick={AddExpenses}
                                >
                                    Kaydet
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExpensesPopup;
