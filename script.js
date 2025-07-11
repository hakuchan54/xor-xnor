body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    margin: 0;
    padding-top: 2rem;
    background-color: #f0f2f5;
}
.container {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 90%;
    max-width: 500px;
}
h1 {
    color: #333;
    margin-top: 0;
    margin-bottom: 1.5rem;
}
table {
    width: 100%;
    border-collapse: collapse;
    font-size: 1.1rem;
}
th, td {
    border: 1px solid #ddd;
    padding: 0.75rem;
    text-align: center;
}
thead {
    background-color: #f2f2f2;
    font-weight: bold;
}
tbody tr:nth-child(even) {
    background-color: #f9f9f9;
}
.output-val {
    font-weight: bold;
    font-family: monospace;
    padding: 0.2rem 0.5rem;
    border-radius: 5px;
    color: white;
    display: inline-block;
    width: 25px;
}
.xor-val {
    background-color: #28a745;
}
.xnor-val {
    background-color: #dc3545;
}
