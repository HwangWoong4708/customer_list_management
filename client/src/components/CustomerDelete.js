import React from "react";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Button,
  Typography,
} from "@material-ui/core";

class CustomerDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  deleteCustomer(id) {
    // /api/customer/7 : 고객데이터가 7인 데이터 삭제
    const url = "/api/customers/" + id;
    fetch(url, {
      method: "DELETE",
    });
    this.props.stateRefresh();
  }
  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleClickOpen}
        >
          삭제
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle onClose={this.handleClose}>경고</DialogTitle>
          <DialogContent>
            <Typography gutterBottom>선택한 고객 정보가 삭제됩니다.</Typography>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={e => {
                this.deleteCustomer(this.props.id);
              }}
            >
              삭제
            </Button>
            <Button
              variant="contained"
              color="outlined"
              onClick={this.handleClose}
            >
              닫기
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default CustomerDelete;
