// https://www.terraform.io/docs/providers/oci/r/data_oci_core_instance_pool.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "actual_size": {
        "type": "number",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "display_name": {
        "type": "string",
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "instance_configuration_id": {
        "type": "string",
        "computed": true
      },
      "instance_pool_id": {
        "type": "string",
        "required": true
      },
      "load_balancers": {
        "type": [
          "list",
          [
            "object",
            {
              "backend_set_name": "string",
              "id": "string",
              "instance_pool_id": "string",
              "load_balancer_id": "string",
              "port": "number",
              "state": "string",
              "vnic_selection": "string"
            }
          ]
        ],
        "computed": true
      },
      "placement_configurations": {
        "type": [
          "list",
          [
            "object",
            {
              "availability_domain": "string",
              "fault_domains": [
                "list",
                "string"
              ],
              "primary_subnet_id": "string",
              "secondary_vnic_subnets": [
                "list",
                [
                  "object",
                  {
                    "display_name": "string",
                    "subnet_id": "string"
                  }
                ]
              ]
            }
          ]
        ],
        "computed": true
      },
      "size": {
        "type": "number",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
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
import { StringMap } from "cdktf";
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciCoreInstancePoolConfig extends TerraformMetaArguments {
  readonly instancePoolId: string;
}
export class DataOciCoreInstancePoolLoadBalancers extends ComplexComputedList {

  // backend_set_name - computed: true, optional: false, required: true
  public get backendSetName() {
    return this.getStringAttribute('backend_set_name');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_pool_id - computed: true, optional: false, required: true
  public get instancePoolId() {
    return this.getStringAttribute('instance_pool_id');
  }

  // load_balancer_id - computed: true, optional: false, required: true
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // vnic_selection - computed: true, optional: false, required: true
  public get vnicSelection() {
    return this.getStringAttribute('vnic_selection');
  }
}
export class DataOciCoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets extends ComplexComputedList {

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export class DataOciCoreInstancePoolPlacementConfigurations extends ComplexComputedList {

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // fault_domains - computed: true, optional: false, required: true
  public get faultDomains() {
    return this.getListAttribute('fault_domains');
  }

  // primary_subnet_id - computed: true, optional: false, required: true
  public get primarySubnetId() {
    return this.getStringAttribute('primary_subnet_id');
  }

  // secondary_vnic_subnets - computed: true, optional: false, required: true
  public get secondaryVnicSubnets() {
    return 'not implemented' as any;
  }
}

// Resource

export class DataOciCoreInstancePool extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreInstancePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_instance_pool',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._instancePoolId = config.instancePoolId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actual_size - computed: true, optional: false, required: true
  public get actualSize() {
    return this.getNumberAttribute('actual_size');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_configuration_id - computed: true, optional: false, required: true
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }

  // instance_pool_id - computed: false, optional: false, required: true
  private _instancePoolId: string;
  public get instancePoolId() {
    return this._instancePoolId;
  }
  public set instancePoolId(value: string) {
    this._instancePoolId = value;
  }

  // load_balancers - computed: true, optional: false, required: true
  public loadBalancers(index: string) {
    return new DataOciCoreInstancePoolLoadBalancers(this, 'load_balancers', index);
  }

  // placement_configurations - computed: true, optional: false, required: true
  public placementConfigurations(index: string) {
    return new DataOciCoreInstancePoolPlacementConfigurations(this, 'placement_configurations', index);
  }

  // size - computed: true, optional: false, required: true
  public get size() {
    return this.getNumberAttribute('size');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_pool_id: this._instancePoolId,
    };
  }
}
