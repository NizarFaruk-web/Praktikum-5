body {
    font-family: Arial, sans-serif;
    background: #e0e7ff;
    margin: 0;
    padding: 20px;
}

.todo {
    width: 400px;
    margin: 40px auto;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

h2 {
    margin-top: 0;
    color: #1e1b4b;
    text-align: center;
}

form {
    display: flex;
    gap: 8px;
}

form input {
    flex: 1;
    padding: 8px 12px;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    font-size: 14px;
}

form input:focus {
    outline: none;
    border-color: #4f46e5;
}

form button {
    padding: 8px 16px;
    background: #4f46e5;
    color: #ffffff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
}

form button:hover {
    background: #4338ca;
}

ul {
    list-style: none;
    padding: 0;
    margin: 16px 0;
}

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    border-bottom: 1px solid #e2e8f0;
}

li span {
    flex: 1;
    cursor: pointer;
    word-break: break-word;
}

li.selesai span {
    text-decoration: line-through;
    color: #94a3b8;
}

.hapus {
    background: #ef4444;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
}

.hapus:hover {
    background: #dc2626;
}

.footer-todo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
}

#info {
    font-size: 13px;
    color: #64748b;
    margin: 0;
}

.hapus-semua {
    background: #fee2e2;
    color: #b91c1c;
    border: 1px solid #fecaca;
    border-radius: 4px;
    padding: 4px 10px;
    font-size: 12px;
    cursor: pointer;
    font-weight: 600;
}

.hapus-semua:hover {
    background: #fca5a5;
}
