// https://www.terraform.io/docs/providers/oci/r/data_oci_core_cluster_network_instances.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "cluster_network_id": {
        "type": "string",
        "required": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "display_name": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instances": {
        "type": [
          "list",
          [
            "object",
            {
              "availability_domain": "string",
              "compartment_id": "string",
              "display_name": "string",
              "fault_domain": "string",
              "id": "string",
              "instance_configuration_id": "string",
              "load_balancer_backends": [
                "list",
                [
                  "object",
                  {
                    "backend_health_status": "string",
                    "backend_name": "string",
                    "backend_set_name": "string",
                    "load_balancer_id": "string",
                    "state": "string"
                  }
                ]
              ],
              "region": "string",
              "shape": "string",
              "state": "string",
              "time_created": "string"
            }
          ]
        ],
        "computed": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "regex": {
              "type": "bool",
              "optional": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
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

export interface DataOciCoreClusterNetworkInstancesConfig extends TerraformMetaArguments {
  readonly clusterNetworkId: string;
  readonly compartmentId: string;
  readonly displayName?: string;
  /** filter block */
  readonly filter?: DataOciCoreClusterNetworkInstancesFilter[];
}
export class DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackends extends ComplexComputedList {

  // backend_health_status - computed: true, optional: false, required: true
  public get backendHealthStatus() {
    return this.getStringAttribute('backend_health_status');
  }

  // backend_name - computed: true, optional: false, required: true
  public get backendName() {
    return this.getStringAttribute('backend_name');
  }

  // backend_set_name - computed: true, optional: false, required: true
  public get backendSetName() {
    return this.getStringAttribute('backend_set_name');
  }

  // load_balancer_id - computed: true, optional: false, required: true
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }
}
export class DataOciCoreClusterNetworkInstancesInstances extends ComplexComputedList {

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // fault_domain - computed: true, optional: false, required: true
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_configuration_id - computed: true, optional: false, required: true
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }

  // load_balancer_backends - computed: true, optional: false, required: true
  public get loadBalancerBackends() {
    return 'not implemented' as any;
  }

  // region - computed: true, optional: false, required: true
  public get region() {
    return this.getStringAttribute('region');
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}
export interface DataOciCoreClusterNetworkInstancesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreClusterNetworkInstances extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreClusterNetworkInstancesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_cluster_network_instances',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterNetworkId = config.clusterNetworkId;
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_network_id - computed: false, optional: false, required: true
  private _clusterNetworkId: string;
  public get clusterNetworkId() {
    return this._clusterNetworkId;
  }
  public set clusterNetworkId(value: string) {
    this._clusterNetworkId = value;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instances - computed: true, optional: false, required: true
  public instances(index: string) {
    return new DataOciCoreClusterNetworkInstancesInstances(this, 'instances', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreClusterNetworkInstancesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreClusterNetworkInstancesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_network_id: this._clusterNetworkId,
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      filter: this._filter,
    };
  }
}
