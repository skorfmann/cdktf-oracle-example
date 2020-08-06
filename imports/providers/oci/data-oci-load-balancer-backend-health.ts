// https://www.terraform.io/docs/providers/oci/r/data_oci_load_balancer_backend_health.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "backend_name": {
        "type": "string",
        "required": true
      },
      "backend_set_name": {
        "type": "string",
        "required": true
      },
      "health_check_results": {
        "type": [
          "list",
          [
            "object",
            {
              "health_check_status": "string",
              "source_ip_address": "string",
              "subnet_id": "string",
              "timestamp": "string"
            }
          ]
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
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciLoadBalancerBackendHealthConfig extends TerraformMetaArguments {
  readonly backendName: string;
  readonly backendSetName: string;
  readonly loadBalancerId: string;
}
export class DataOciLoadBalancerBackendHealthHealthCheckResults extends ComplexComputedList {

  // health_check_status - computed: true, optional: false, required: true
  public get healthCheckStatus() {
    return this.getStringAttribute('health_check_status');
  }

  // source_ip_address - computed: true, optional: false, required: true
  public get sourceIpAddress() {
    return this.getStringAttribute('source_ip_address');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // timestamp - computed: true, optional: false, required: true
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
}

// Resource

export class DataOciLoadBalancerBackendHealth extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciLoadBalancerBackendHealthConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_load_balancer_backend_health',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backendName = config.backendName;
    this._backendSetName = config.backendSetName;
    this._loadBalancerId = config.loadBalancerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_name - computed: false, optional: false, required: true
  private _backendName: string;
  public get backendName() {
    return this._backendName;
  }
  public set backendName(value: string) {
    this._backendName = value;
  }

  // backend_set_name - computed: false, optional: false, required: true
  private _backendSetName: string;
  public get backendSetName() {
    return this._backendSetName;
  }
  public set backendSetName(value: string) {
    this._backendSetName = value;
  }

  // health_check_results - computed: true, optional: false, required: true
  public healthCheckResults(index: string) {
    return new DataOciLoadBalancerBackendHealthHealthCheckResults(this, 'health_check_results', index);
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      backend_name: this._backendName,
      backend_set_name: this._backendSetName,
      load_balancer_id: this._loadBalancerId,
    };
  }
}
