document.getElementById('addEmployeeBtn').addEventListener('click', addEmployee);
        document.getElementById('deleteEmployeeBtn').addEventListener('click', openConfirmationModalDelete);
        document.getElementById('clearTableBtn').addEventListener('click', openConfirmationModalClear);
        document.getElementById('clearFieldsBtn').addEventListener('click', clearInputFields);

        document.getElementById('confirmActionBtn').addEventListener('click', confirmAction);
        document.getElementById('cancelActionBtn').addEventListener('click', closeConfirmationModal);

        let payrollData = [];
        let actionType;

        function updateTable() {
            const tableBody = document.getElementById('payrollBody');
            tableBody.innerHTML = '';

            payrollData.forEach((employee, index) => {
                const grossPay = employee.daysWorked * employee.dailyRate;
                const netPay = grossPay - employee.deductionAmount;

                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${employee.employeeName}</td>
                    <td>${employee.daysWorked}</td>
                    <td>${employee.dailyRate}</td>
                    <td>${grossPay}</td>
                    <td>${employee.deductionAmount}</td>
                    <td>${formatCurrency(netPay, 'PHP')}</td>
                `;

                tableBody.appendChild(row);
            });

            updateEmployeeCounter();
        }

        function formatCurrency(amount, currency) {
            const formatter = new Intl.NumberFormat('en-PH', {
                style: 'currency',
                currency: currency,
            });
            return formatter.format(amount);
        }

        function addEmployee() {
            const employeeName = document.getElementById('employeeName').value;
            const daysWorked = parseFloat(document.getElementById('daysWorked').value);
            const dailyRate = parseFloat(document.getElementById('dailyRate').value);
            const deductionAmount = parseFloat(document.getElementById('deductionAmount').value);

            const employee = {
                employeeName,
                daysWorked,
                dailyRate,
                deductionAmount
            };

            payrollData.push(employee);
            updateTable();
        }

        function openConfirmationModalDelete() {
            actionType = 'delete';
            const lineNumber = parseInt(document.getElementById('deleteEmployeeInput').value);
            if (lineNumber >= 1 && lineNumber <= payrollData.length) {
                const employeeName = payrollData[lineNumber - 1].employeeName;
                const confirmationMessage = `Are you sure you want to delete Employee ${lineNumber}: ${employeeName}?`;
                openConfirmationModal(confirmationMessage);
            } else {
                const confirmationMessage = 'Invalid Employee Number';
                openConfirmationModal(confirmationMessage);
            }
        }

        function openConfirmationModalClear() {
            actionType = 'clear';
            const confirmationMessage = 'Are you sure you want to clear the entire table?';
            openConfirmationModal(confirmationMessage);
        }

        function openConfirmationModal(message) {
            document.getElementById('confirmationMessage').textContent = message;
            document.getElementById('confirmationModal').style.display = 'block';
        }

        function closeConfirmationModal() {
            document.getElementById('confirmationModal').style.display = 'none';
        }

        function confirmAction() {
            const modal = document.getElementById('confirmationModal');
            modal.style.display = 'none';

            if (actionType === 'delete') {
                const lineNumber = parseInt(document.getElementById('deleteEmployeeInput').value);
                if (lineNumber >= 1 && lineNumber <= payrollData.length) {
                    payrollData.splice(lineNumber - 1, 1);
                    updateTable();
                } else {
                    alert('Invalid Employee Number');
                }
            } else if (actionType === 'clear') {
                payrollData = [];
                updateTable();
            }
        }

        function clearInputFields() {
            document.getElementById('employeeName').value = '';
            document.getElementById('daysWorked').value = '';
            document.getElementById('dailyRate').value = '';
            document.getElementById('deductionAmount').value = '';
        }

        function updateEmployeeCounter() {
            const employeeCounter = document.getElementById('employeeCounter');
            const employeeCount = payrollData.length;
            employeeCounter.textContent = `Total Employees: ${employeeCount}`;
        }