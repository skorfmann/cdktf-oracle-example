// https://www.terraform.io/docs/providers/oci/r/data_oci_load_balancer_backend_set_health.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "backend_set_name": {
        "type": "string",
        "required": true
      },
      "critical_state_backend_names": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "load_balancer_id": {
        "type": "string",
        "required": true
      },
      "status": {
        "type": "string",
        "computed": true
      },
      "total_backend_count": {
        "type": "number",
        "computed": true
      },
      "unknown_state_backend_names": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "warning_state_backend_names": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataOciLoadBalancerBackendSetHealthConfig extends TerraformMetaArguments {
  readonly backendSetName: string;
  readonly loadBalancerId: string;
}

// Resource

export class DataOciLoadBalancerBackendSetHealth extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciLoadBalancerBackendSetHealthConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_load_balancer_backend_set_health',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backendSetName = config.backendSetName;
    this._loadBalancerId = config.loadBalancerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_set_name - computed: false, optional: false, required: true
  private _backendSetName: string;
  public get backendSetName() {
    return this._backendSetName;
  }
  public set backendSetName(value: string) {
    this._backendSetName = value;
  }

  // critical_state_backend_names - computed: true, optional: false, required: true
  public get criticalStateBackendNames() {
    return this.getListAttribute('critical_state_backend_names');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // load_balancer_id - computed: false, optional: false, required: true
  private _loadBalancerId: string;
  public get loadBalancerId() {
    return this._loadBalancerId;
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // total_backend_count - computed: true, optional: false, required: true
  public get totalBackendCount() {
    return this.getNumberAttribute('total_backend_count');
  }

  // unknown_state_backend_names - computed: true, optional: false, required: true
  public get unknownStateBackendNames() {
    return this.getListAttribute('unknown_state_backend_names');
  }

  // warning_state_backend_names - computed: true, optional: false, required: true
  public get warningStateBackendNames() {
    return this.getListAttribute('warning_state_backend_names');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      backend_set_name: this._backendSetName,
      load_balancer_id: this._loadBalancerId,
    };
  }
}
